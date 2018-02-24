import { observable, action } from "mobx";

class SurveyStore {
  @observable hasErrored = false;
  @observable isLoading = true;
  @observable questions = [];
  @observable surveyChoice = [1, -1, -1, -1];

  @action
  fetchItems(data) {
    this.questions = data;
    this.isLoading = false;
  }

  @action
  q1Touch(key) {
    console.log(key);
  }
}

export default SurveyStore;
