import { observable, action, computed } from "mobx";

import { API, Auth } from "aws-amplify";

class SubmissionsStore {
  @observable submissionsArray = [];

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
    const currentUser = await Auth.currentUserInfo()
      .then(response => {
        // return response.attributes.phone_number;
        return response.username;
      })
      .catch(error => {
        console.log("Error getting user:" + error);
      });
    const path = "/survey/dentist/" + currentUser;

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
  }
}

export default SubmissionsStore;
