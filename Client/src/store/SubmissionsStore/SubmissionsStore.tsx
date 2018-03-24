import { observable, action } from "mobx";

import { API } from "aws-amplify";

class SubmissionsStore {
  @action
  async getAllSubmissions() {
    // const path = "/survey/pynner1521863441110";
    const path = "/survey/allObj/test";
    const myInit = {
      headers: {}
    };
    console.log("Hellllo");

    try {
      const apiResponse = await API.get("surveyCRUD", path, myInit);
      console.log("response from getting surveys: ");
      console.log(apiResponse);
    } catch (e) {
      console.log(e);
    }
  }
}

export default SubmissionsStore;
