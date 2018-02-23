import MainStore from "../store/DomainStore/HomeStore";
import LoginStore from "../store/ViewStore/LoginViewStore";
import TwoFactor from "../store/TwoFactorStore/TwoFactorStore";

export default function() {
  const mainStore = new MainStore();
  const loginForm = new LoginStore();
  const twoFactor = new TwoFactor();

  return {
    loginForm,
    mainStore,
    twoFactor
  };
}
