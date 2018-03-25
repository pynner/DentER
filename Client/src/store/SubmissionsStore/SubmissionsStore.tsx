import { observable, action } from "mobx";

import { API, Auth } from "aws-amplify";

class SubmissionsStore {
  @observable submissionsArray = [];

  @action
  async getAllSubmissions() {
    const currentUser = await Auth.currentAuthenticatedUser()
      .then(response => {
        return response.username;
      })
      .catch(error => {
        console.log("Error getting user:" + error);
      });
    const path = "/survey/dentist/Dr." + currentUser;
    console.log(currentUser);
    const myInit = {
      headers: {}
    };
    console.log("Hellllo");

    try {
      this.submissionsArray = await API.get("surveyCRUD", path, myInit).then(
        response => {
          return response.data;
        }
      );
      console.log("response from getting surveys: ");
      // console.log(apiResponse);
      // this.submissionsArray = apiResponse;
      console.log(this.submissionsArray);
      console.log(this.submissionsArray.length);
      console.log(this.submissionsArray[0].dentist);
    } catch (e) {
      console.log(e);
    }
  }
}

export default SubmissionsStore;
