import { observable, action } from "mobx";

class SurveyStore {
  @observable hasErrored = false;
  @observable isLoading = true;
  @observable questions = [];
  @observable surveyChoice = [""];

  @action
  fetchItems(data) {
    this.questions = data;
    this.isLoading = false;
  }
}

export default SurveyStore;
