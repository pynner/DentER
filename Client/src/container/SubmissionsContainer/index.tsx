import * as React from "react";
import { observer, inject } from "mobx-react/native";
import { View } from "native-base";
import styles from "./styles";
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
  addInfo: any;

  refresh() {
    this.props.submissionsStore.getAllSubmissions();
  }

  render() {
    const survey = this.props.submissionsStore;
    const style = <View style={styles.horizontalLine} />;
    return (
      <Submissions
        navigation={this.props.navigation}
        onRefresh={() => this.refresh()}
      />
    );
  }
}
