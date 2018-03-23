import { observable, action } from "mobx";

import { API, Auth } from "aws-amplify";

class SurveyStore {
  @observable hasErrored = false;
  @observable isLoading = true;
  @observable questions = [];
  @observable multipleChoiceAnswers = [-1, -1, [false, false, false]];
  @observable additionalInfo = [""];

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
  clearMultipleChoice() {
    this.multipleChoiceAnswers = [-1, -1, [false, false, false]];
  }

  @action
  clearAdditional() {
    this.additionalInfo = [""];
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
        submissionDate: new Date().getTime(),
        userId: currentUser,
        submissionId: currentUser + new Date().getTime()
      }
    };
    const path = "/survey";

    // Use the API module to save the note to the database
    try {
      const apiResponse = await API.put("surveyCRUD", path, newNote);
      console.log("<< response from saving survey >>");
      console.log(apiResponse);
    } catch (e) {
      console.log(e);
    }
  }
}

export default SurveyStore;
