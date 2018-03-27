import { observable, action } from "mobx";

import { API, Auth } from "aws-amplify";

class CalenderStore {
  @observable hasErrored = false;
  @observable isLoading = true;
  calendarArray = [];
  onCall = {};
  dentist = "";

  @action
  async getAllCalender() {
    if (this.calendarArray && this.calendarArray.length) {
      console.log("Already received AWS data");
    } else {
      const path = "/calender/getall/all";

      const myInit = {
        headers: {}
      };

      try {
        this.calendarArray = await API.get("calenderCRUD", path, myInit).then(
          response => {
            return response.data;
          }
        );
        console.log("Received calendar data");

        await Auth.currentUserInfo()
          .then(response => {
            this.dentist = response.username;
          })
          .catch(error => {
            console.log("Error getting user:" + error);
          });

        // Get on call days
        const onCallObject = this.calendarArray.filter(
          o => o.dentist === this.dentist
        );

        onCallObject.forEach(item => {
          const date = item.stringDate;
          this.onCall[date] = {
            startingDay: true,
            endingDay: true,
            color: "#98fb98"
          };
        });
        this.isLoading = false;
      } catch (e) {
        console.log(e);
      }
    }
  }
}

export default CalenderStore;
