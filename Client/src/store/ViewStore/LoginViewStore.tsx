import { observable, action } from "mobx";

class LoginStore {
  @observable phone = "";
  @observable phoneError = "";

  @observable termsCheck = false;

  @observable isValid = false;

  @action
  phoneOnChange(val) {
    this.phone = val;
    this.validatePhone();
  }

  @action
  validatePhone() {
    const required = this.phone ? undefined : "Required";
    this.phoneError = required
      ? required
      : this.phone.match(/\d/g).length === 10
        ? undefined
        : "Invalid phone number!";
  }

  @action
  termPressed() {
    this.termsCheck = !this.termsCheck;
  }

  @action
  validateForm() {
    if (this.phoneError === undefined && this.termsCheck === true) {
      this.isValid = true;
    }
  }

  @action
  clearStore() {
    this.phone = "";
    this.phoneError = "";
    this.termsCheck = false;
    this.isValid = false;
  }
}

export default LoginStore;
