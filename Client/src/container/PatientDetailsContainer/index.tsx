import * as React from "react";
import { observer, inject } from "mobx-react/native";

import PatientDetailsContainer from "../../stories/screens/PatientDetails";

export interface Props {
  navigation: any;
  mainStore: any;
}
export interface State {}

@inject("mainStore")
@observer
export default class PatientDetailsContainerContainer extends React.Component<Props, State> {
  render() {
    return <PatientDetailsContainer navigation={this.props.navigation} />;
  }
}
