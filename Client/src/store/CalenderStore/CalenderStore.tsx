import { observable, action } from "mobx";

class CalenderStore {
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
}

export default CalenderStore;
