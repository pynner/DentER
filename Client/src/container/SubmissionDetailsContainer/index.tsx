import * as React from "react";
import { observer, inject } from "mobx-react/native";
import { View } from "native-base";
import styles from "./styles";
import SubmissionDetailsContainer from "../../stories/screens/SubmissionDetails";

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
    const survey = this.props.submissionsStore;
    const style = <View style={styles.horizontalLine} />;
    return (
      <Submission // @ Mitchell
        navigation={this.props.navigation}
        onRefresh={() => this.refresh()}
      />
    );
  }
}
