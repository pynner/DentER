import { observable, action } from "mobx";

import { API, Auth } from "aws-amplify";

class SurveyStore {
  @observable hasErrored = false;
  @observable isLoading = true;
  @observable questions = [];
  @observable multipleChoiceAnswers = [-1, -1, [false, false, false]];
  @observable additionalInfo = [" "];
  @observable age: number;
  @observable phone = "0";
  @observable sex = "N/A";
  @observable name = "";
  userName = "";
  cDentist = "Dr.Bear";

  @action
  fetchItems(data) {
    this.questions = data;
    this.isLoading = false;
  }

  @action
  q0Touch(key) {
    this.multipleChoiceAnswers[0] = key;
  }

  @action
  q1Touch(key) {
    this.multipleChoiceAnswers[1] = key;
  }

  @action
  q2Touch(key) {
    this.multipleChoiceAnswers[2][key] = !this.multipleChoiceAnswers[2][key];
  }

  @action
  additionalOnChange(val) {
    this.additionalInfo[0] = val;
  }

  @action
  ageOnChange(val) {
    this.age = val;
  }

  @action
  nameOnChange(val) {
    this.name = val;
  }

  @action
  phoneOnChange(val) {
    this.phone = val;
  }

  @action
  sexTouch(val) {
    this.sex = val;
  }

  @action
  clearMultipleChoice() {
    this.multipleChoiceAnswers = [-1, -1, [false, false, false]];
  }

  @action
  clearAdditional() {
    this.additionalInfo = [""];
  }
  @action
  // Get user name, phone number, and dentist on call
  async getAWSdata() {
    console.log("Getting AWS user data");
    await Auth.currentUserInfo()
      .then(response => {
        this.userName = response.username;
        this.phone = response.attributes.phone_number;
      })
      .catch(error => {
        console.log("Error getting user:" + error);
      });
    // @TODO get dentist from DB, make sure call to get current dentist with current time

    const path = "/calender/getdentist/1522102295490";

    const myInit = {
      headers: {}
    };

    try {
      this.cDentist = await API.get("calenderCRUD", path, myInit).then(
        response => {
          return response.data.Items[0].dentist;
        }
      );
      console.log("response from getting calender dentist: ");
      console.log(this.cDentist);
    } catch (e) {
      console.log(e);
    }
  }

  @action
  clearPatient() {
    this.age = 0;
    this.phone = "0";
    this.sex = "N/A";
  }
  // Submit survey to AWS
  @action
  async saveSurvey() {
    const currentUser = await Auth.currentAuthenticatedUser()
      .then(response => {
        return response.username;
      })
      .catch(error => {
        console.log("Error getting user:" + error);
      });

    let newNote = {
      body: {
        addInfo: this.additionalInfo[0],
        dentist: this.cDentist,
        multipleChoiceAnswers: this.multipleChoiceAnswers,
        hasSeen: false,
        isComplete: false,
        submissionDate: new Date().getTime(),
        userId: currentUser,
        submissionId: currentUser + new Date().getTime(),
        name: "Cool",
        phone: this.phone,
        sex: this.sex,
        age: Number(this.age)
      }
    };
    const path = "/survey";

    // Use the API module to save the note to the database
    try {
      console.log(newNote);
      const apiResponse = await API.put("surveyCRUD", path, newNote);
      console.log("<< response from saving survey >>");
      console.log(apiResponse);

      // Clear store
      this.multipleChoiceAnswers = [-1, -1, [false, false, false]];
      this.additionalInfo = [""];
      this.age = 0;
      this.phone = "0";
      this.sex = "N/A";
    } catch (e) {
      console.log(e);
    }
  }
}

export default SurveyStore;
