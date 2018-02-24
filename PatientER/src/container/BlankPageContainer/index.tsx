import * as React from "react";
import { observer, inject } from "mobx-react/native";

import BlankPage from "../../stories/screens/BlankPage";
import data from "./data";

export interface Props {
  navigation: any;
  surveyStore: any;
}
export interface State {}

@inject("surveyStore")
@observer
export default class BlankPageContainer extends React.Component<Props, State> {
  componentWillMount() {
    this.props.surveyStore.fetchItems(data);
  }

  render() {
    const questions = this.props.surveyStore.questions.toJS();
    return (
      <BlankPage navigation={this.props.navigation} questions={questions} />
    );
  }
}
