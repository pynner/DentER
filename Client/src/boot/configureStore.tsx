/* tslint:disable */
import MainStore from "../store/DomainStore/HomeStore";
import LoginStore from "../store/ViewStore/LoginViewStore";
import TwoFactor from "../store/TwoFactorStore/TwoFactorStore";
import SurveyStore from "../store/SurveyStore/SurveyStore";
import CalenderStore from "../store/CalenderStore/CalenderStore";
import SubmissionsStore from "../store/SubmissionsStore/SubmissionsStore";

export default function() {
  const mainStore = new MainStore();
  const loginForm = new LoginStore();
  const twoFactor = new TwoFactor();
  const surveyStore = new SurveyStore();
  const calenderStore = new CalenderStore();
  const submissionsStore = new SubmissionsStore();

  return {
    loginForm,
    mainStore,
    twoFactor,
    surveyStore,
    calenderStore,
    submissionsStore
  };
}
