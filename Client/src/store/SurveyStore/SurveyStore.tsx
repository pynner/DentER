import { observable, action } from "mobx";

class SurveyStore {
  @observable hasErrored = false;
  @observable isLoading = true;
  @observable questions = [];
  @observable surveyChoice = [-1, -1, [false, false, false], ""];

  @action
  fetchItems(data) {
    this.questions = data;
    this.isLoading = false;
  }

  @action
  q0Touch(key) {
    this.surveyChoice[0] = key;
  }

  @action
  q1Touch(key) {
    this.surveyChoice[1] = key;
  }

  @action
  q2Touch(key) {
    this.surveyChoice[2][key] = !this.surveyChoice[2][key];
  }

  @action
  q3OnChange(val) {
    this.surveyChoice[3] = val;
  }

  @action
  clearStore() {
    this.hasErrored = false;
    this.surveyChoice = [-1, -1, [false, false, false], ""];
  }
}

export default SurveyStore;
