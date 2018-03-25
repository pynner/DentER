import { observable, action } from "mobx";

import { API, Auth } from "aws-amplify";

class SubmissionsStore {
  @observable submissionsArray = [];

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
    const path = "/survey/dentist/Dr." + currentUser;

    const myInit = {
      headers: {}
    };

    try {
      this.submissionsArray = await API.get("surveyCRUD", path, myInit).then(
        response => {
          return response.data;
        }
      );
      console.log("response from getting surveys: ");
      console.log(this.submissionsArray);
    } catch (e) {
      console.log(e);
    }
  }
}

export default SubmissionsStore;
