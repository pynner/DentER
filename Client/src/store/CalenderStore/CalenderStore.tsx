import { observable, action } from "mobx";

class CalenderStore {
  @observable hasErrored = false;
  @observable isLoading = true;
  @observable calendarArray = [];

  @action
  fetchItems(data) {
    this.calendarArray = data;
    this.isLoading = false;
  }
}

export default CalenderStore;
