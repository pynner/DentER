import * as React from "react";
import { observer, inject } from "mobx-react/native";
import SubmissionDetails from "../../stories/screens/SubmissionDetails";

export interface Props {
  navigation: any;
  submissionsStore: any;
}
export interface State {}

@inject("submissionsStore")
@observer
export default class SubmissionDetailsContainer extends React.Component<
  Props,
  State
> {
  addInfo: any;

  refresh() {
    this.props.submissionsStore.getAllSubmissions();
  }

  render() {
    return (
      <SubmissionDetails
        navigation={this.props.navigation}
        onRefresh={() => this.refresh()}
      />
    );
  }
}
