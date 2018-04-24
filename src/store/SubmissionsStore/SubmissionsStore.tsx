import { observable, action, computed } from "mobx";

import { API, Auth } from "aws-amplify";

import dentists from "../../boot/dentists";

class SubmissionsStore {
  @observable submissionsArray = [];
  @observable isLoading = true;

  currentUser = "";
  dentists = dentists;
  isDentist = false;

  checkIfDentist() {
    if (this.dentists.indexOf(this.currentUser) > -1) {
      this.isDentist = true;
    }
  }

  @computed
  get unread() {
    let count = 0;
    this.submissionsArray.forEach(item => {
      if (!item.hasSeen) {
        count++;
      }
    });
    return count;
  }

  @action
  async getAllSubmissions() {
    await Auth.currentUserInfo()
      .then(response => {
        // return response.attributes.phone_number;
        this.currentUser = response.username;
        this.checkIfDentist();
      })
      .catch(error => {
        console.log("Error getting user:" + error);
      });

    const typeOfSubmissions = this.isDentist ? "dentist" : "patient";
    const path = "/survey/" + typeOfSubmissions + "/" + this.currentUser;

    const myInit = {
      headers: {}
    };

    try {
      this.submissionsArray = await API.get("surveyCRUD", path, myInit).then(
        response => {
          return response.data;
        }
      );
      console.log("Received survey data");
    } catch (e) {
      console.log(e);
    }
    this.isLoading = false;
  }
}

export default SubmissionsStore;
