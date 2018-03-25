import * as React from "react";
import { observer, inject } from "mobx-react/native";
import Submissions from "../../stories/screens/Submissions";

export interface Props {
  navigation: any;
  submissionsStore: any;
}
export interface State {}

@inject("submissionsStore")
@observer
export default class SubmissionsContainer extends React.Component<
  Props,
  State
> {
  componentWillMount() {
    this.props.submissionsStore.getAllSubmissions();
  }

  refresh() {
    this.props.submissionsStore.getAllSubmissions();
  }

  render() {
    const submissionList = this.props.submissionsStore.submissionsArray.toJS();
    return (
      <Submissions
        navigation={this.props.navigation}
        onRefresh={() => this.refresh()}
        submissionList={submissionList}
      />
    );
  }
}
