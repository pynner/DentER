import * as React from "react";
import { observer, inject } from "mobx-react/native";

import Home from "../../stories/screens/Home";

export interface Props {
  navigation: any;
  mainStore: any;
}
export interface State {}

@inject("mainStore")
@observer
export default class HomeContainer extends React.Component<Props, State> {
  render() {
    return <Home navigation={this.props.navigation} />;
  }
}
