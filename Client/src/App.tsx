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
    TwoFactor: { screen: TwoFactor }
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);

export default () => (
  <Root>
    <App />
  </Root>
);
