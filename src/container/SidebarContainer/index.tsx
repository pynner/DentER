// @flow
import * as React from "react";
import Sidebar from "../../stories/screens/Sidebar";
import { observer, inject } from "mobx-react/native";

export interface Props {
  navigation: any;
  surveyStore: any;
}
export interface State {}
@inject("surveyStore")
@observer
export default class SidebarContainer extends React.Component<Props, State> {
  render() {
    return (
      <Sidebar
        navigation={this.props.navigation}
        name={this.props.surveyStore.userName}
        isDentist={this.props.surveyStore.isDentist}
      />
    );
  }
}
