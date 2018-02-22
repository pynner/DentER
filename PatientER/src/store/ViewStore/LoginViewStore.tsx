import { observable, action } from "mobx";

class LoginStore {
  @observable phone = "";
  @observable phoneError = "";
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
        : "Invalid phone number";
  }
  @action
  validateForm() {
    if (this.phoneError === undefined) {
      this.isValid = true;
    }
  }

  @action
  clearStore() {
    this.phone = "";
    this.phoneError = "";
    this.isValid = false;
  }
}

export default LoginStore;
