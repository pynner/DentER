import * as React from "react";
import { observer, inject } from "mobx-react/native";

import { Text, Body, View, H3, ListItem, CheckBox, List } from "native-base";

import styles from "./styles";
import MultipleChoice from "../../stories/screens/MultipleChoice";
import data from "./data";

export interface Props {
  navigation: any;
  surveyStore: any;
}
export interface State {}

@inject("surveyStore")
@observer
export default class MultipleChoiceContainer extends React.Component<
  Props,
  State
> {
  addInfo: any;

  resetForm() {
    this.props.surveyStore.clearMultipleChoice();
  }

  componentWillMount() {
    this.props.surveyStore.fetchItems(data);
    // this.props.surveyStore.getAWSdata();
  }

  render() {
    const survey = this.props.surveyStore;
    const Fields = (
      <View>
        {/* Question 1 */}
        <View style={{ marginBottom: 10 }}>
          <H3 style={{ fontWeight: "bold" }}>{survey.questions[0].title} </H3>
        </View>
        <View style={{ backgroundColor: "white" }}>
          <List>
            {survey.questions[0].options.map((option, i) => (
              <ListItem
                key={i}
                style={{ marginRight: 15 }}
                onPress={() => survey.q0Touch(i)}
              >
                <CheckBox
                  checked={survey.multipleChoiceAnswers[0] === i}
                  onPress={() => survey.q0Touch(i)}
                />
                <Body>
                  <Text>{option}</Text>
                </Body>
              </ListItem>
            ))}
          </List>
        </View>
        <View style={styles.horizontalLine} />

        {/* Question 2 */}
        <View style={{ marginBottom: 10 }}>
          <H3 style={{ fontWeight: "bold" }}>{survey.questions[1].title} </H3>
        </View>
        <View style={{ backgroundColor: "white" }}>
          <List>
            {survey.questions[1].options.map((option, i) => (
              <ListItem
                key={i}
                style={{ marginRight: 15 }}
                onPress={() => survey.q1Touch(i)}
              >
                <CheckBox
                  checked={survey.multipleChoiceAnswers[1] === i}
                  onPress={() => survey.q1Touch(i)}
                />
                <Body>
                  <Text>{option}</Text>
                </Body>
              </ListItem>
            ))}
          </List>
        </View>
        <View style={styles.horizontalLine} />

        {/* Question 3 */}
        <View style={{ marginBottom: 10 }}>
          <H3 style={{ fontWeight: "bold" }}>{survey.questions[2].title} </H3>
        </View>
        <View style={{ backgroundColor: "white" }}>
          <List>
            {survey.questions[2].options.map((option, i) => (
              <ListItem
                key={i}
                style={{ marginRight: 15 }}
                onPress={() => survey.q2Touch(i)}
              >
                <CheckBox
                  checked={survey.multipleChoiceAnswers[2][i]}
                  onPress={() => survey.q2Touch(i)}
                />
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
    return (
      <MultipleChoice
        navigation={this.props.navigation}
        surveyQuestions={Fields}
        reset={() => this.resetForm()}
      />
    );
  }
}
