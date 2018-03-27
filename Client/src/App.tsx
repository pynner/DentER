import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import { Dimensions } from "react-native";

const deviceWidth = Dimensions.get("window").width;

import Login from "./container/LoginContainer";
import Home from "./container/HomeContainer";
import MultipleChoice from "./container/MultipleChoiceContainer";
import Additional from "./container/AdditionalContainer";
import Sidebar from "./container/SidebarContainer";
import TwoFactor from "./container/TwoFactorContainer";
import Calender from "./container/CalenderContainer";
import Submissions from "./container/SubmissionsContainer";
import SubmissionDetails from "./container/SubmissionDetailsContainer";
import PatientDetails from "./container/PatientDetailsContainer";

import Amplify from "aws-amplify";
import awsmobile from "../awsmobilejs/#current-backend-info/aws-exports";
import { withAuthenticator } from "aws-amplify-react-native";

Amplify.configure(awsmobile);

const Drawer = DrawerNavigator(
  {
    Home: { screen: Home }
  },
  {
    drawerWidth: deviceWidth - 50,
    drawerPosition: "left",
    contentComponent: props => <Sidebar {...props} />
  }
);

const App = StackNavigator(
  {
    Login: { screen: Login },
    MultipleChoice: { screen: MultipleChoice },
    Additional: { screen: Additional },
    Drawer: { screen: Drawer },
    TwoFactor: { screen: TwoFactor },
    Calender: { screen: Calender },
    Submissions: { screen: Submissions },
    SubmissionDetails: { screen: SubmissionDetails },
    PatientDetails: { screen: PatientDetails }
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);

const app = () => (
  <Root>
    <App />
  </Root>
);

export default withAuthenticator(app);
