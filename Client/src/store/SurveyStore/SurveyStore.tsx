import { observable, action } from "mobx";

import { API, Auth } from "aws-amplify";

class SurveyStore {
  @observable hasErrored = false;
  @observable isLoading = true;
  @observable questions = [];
  @observable multipleChoiceAnswers = [-1, -1, [false, false, false]];
  @observable additionalInfo = [" "];
  @observable age = "0";
  @observable phone = "0";
  @observable sex = "N/A";
  userName = "";
  userPhone = "";

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
  async getAWSdata() {
    this.userName = await Auth.currentAuthenticatedUser()
      .then(response => {
        return response.username;
      })
      .catch(error => {
        console.log("Error getting user:" + error);
      });
  }

  @action
  clearPatient() {
    this.age = "0";
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
        dentist: "Dr.Tester",
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
      this.age = "0";
      this.phone = "0";
      this.sex = "N/A";
    } catch (e) {
      console.log(e);
    }
  }
}

export default SurveyStore;
