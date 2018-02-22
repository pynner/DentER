import { observable, action } from "mobx";

class TwoFactor {
  @observable isValid = false;
  @observable code = "";

  @action
  phoneOnChange(val) {
    this.code = val;
    // Run code validation once code length is 4 numbers
    if (this.code.length === 4) {
      this.validateCode();
    }
  }

  // @TODO check 2AUTH code via AWS
  @action
  validateCode() {
    if (this.code.length === 4) {
      this.isValid = true;
    }
  }

  @action
  clearStore() {
    this.code = "";
    this.isValid = false;
  }
}

export default TwoFactor;
