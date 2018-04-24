import * as React from "react";
import { observer, inject } from "mobx-react/native";

import Home from "../../stories/screens/Home";

export interface Props {
  navigation: any;
  calenderStore: any;
  submissionsStore: any;
  surveyStore: any;
}
export interface State {}

@inject("calenderStore")
@inject("submissionsStore")
@inject("surveyStore")
@observer
export default class HomeContainer extends React.Component<Props, State> {
  componentWillMount() {
    this.getNewData();
  }

  getNewData() {
    this.props.calenderStore.getAllCalender();
    this.props.submissionsStore.getAllSubmissions();
    this.props.surveyStore.getAWSdata();
  }

  render() {
    return (
      <Home
        navigation={this.props.navigation}
        count={this.props.submissionsStore.unread}
        onRefresh={() => this.getNewData()}
        isLoading={this.props.submissionsStore.isLoading}
      />
    );
  }
}
