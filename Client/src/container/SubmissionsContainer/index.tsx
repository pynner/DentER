import * as React from "react";
import { observer, inject } from "mobx-react/native";
import { View } from "native-base";
import styles from "./styles";
import Submissions from "../../stories/screens/Submissions";

export interface Props {
  navigation: any;
  surveyStore: any;
}
export interface State {}

@inject("surveyStore")
@observer
export default class SubmissionsContainer extends React.Component<
  Props,
  State
> {
  addInfo: any;

  resetForm() {
    this.props.surveyStore.clearAdditional();
  }

  submitSurvey() {
    this.props.surveyStore.saveSurvey();
  }

  refresh() {
    // get new submission data
  }

  render() {
    const survey = this.props.surveyStore;
    const style = <View style={styles.horizontalLine} />;
    return (
      <Submissions
        navigation={this.props.navigation}
        onRefresh={() => this.refresh()}
      />
    );
  }
}
