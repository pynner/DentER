import { observable, action } from "mobx";

import { API } from "aws-amplify";

class CalenderStore {
  @observable hasErrored = false;
  @observable isLoading = true;
  @observable calendarArray = [];

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
        console.log("response from getting surveys: ");
        console.log(this.calendarArray);
        this.isLoading = false;
      } catch (e) {
        console.log(e);
      }
    }
  }
}

export default CalenderStore;
