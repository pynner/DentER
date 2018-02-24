import * as React from "react";
import { observer, inject } from "mobx-react/native";

import { Text, Body, View, H3, ListItem, CheckBox, List } from "native-base";

import styles from "./styles";
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
    const survey = this.props.surveyStore;
    const Fields = (
      <View>
        {/* Question title */}
        <View style={{ marginBottom: 10 }}>
          <H3 style={{ fontWeight: "bold" }}>{survey.questions[0].title} </H3>
        </View>
        {/* Question body */}
        <View style={{ backgroundColor: "white" }}>
          <List>
            {survey.questions[0].options.map((option, i) => (
              <ListItem key={i} style={{ marginRight: 15 }}>
                {console.log("key: " + i)}
                {console.log(survey.surveyChoice[0])}
                <CheckBox checked={survey.surveyChoice[0] === i} />
                <Body>
                  <Text>{option}</Text>
                </Body>
              </ListItem>
            ))}
          </List>
        </View>

        <View style={styles.horizontalLine} />
      </View>
    );

    // const questions = this.props.surveyStore.questions.toJS();
    return (
      <BlankPage navigation={this.props.navigation} surveyQuestions={Fields} />
    );
  }
}
