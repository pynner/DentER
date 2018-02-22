import { observable, action } from "mobx";

class TwoFactor {
  @observable code = "";
  @observable isValid = false;

  @action
  codeOnChange(val) {
    this.code = val;
    this.validateCode();
  }

  @action
  validateCode() {
    // @TODO check 2AUTH code via AWS
    if (this.code.length === 4) {
      this.isValid = true;
    } else {
      this.isValid = false;
    }
  }

  @action
  clearStore() {
    this.code = "";
    this.isValid = false;
  }
}

export default TwoFactor;
