import * as React from "react";
import { observer, inject } from "mobx-react/native";

import PatientDetailsContainer from "../../stories/screens/PatientDetails";

import {
  Icon,
  Left,
  Body,
  Card,
  CardItem,
  Text,
  Item,
  Input,
  ListItem
} from "native-base";

export interface Props {
  navigation: any;
  surveyStore: any;
}
export interface State {}

@inject("surveyStore")
@observer
export default class PatientDetailsContainerContainer extends React.Component<
  Props,
  State
> {
  age: any;
  name: any;
  phoneNum: any;
  resetForm() {
    this.props.surveyStore.clearPatient();
  }

  submitSurvey() {
    this.props.surveyStore.saveSurvey();
  }
  render() {
    const survey = this.props.surveyStore;
    const Fields = (
      <Card>
        <CardItem header>
          <Text>What is your name?</Text>
        </CardItem>
        <CardItem>
          <Item regular>
            <Input
              placeholder="Enter your name..."
              ref={c => (this.name = c)}
              value={survey.name}
              onChangeText={e => survey.nameOnChange(e)}
            />
          </Item>
        </CardItem>
        <CardItem header>
          <Text>How old are you?</Text>
        </CardItem>
        <CardItem>
          <Item regular>
            <Input
              keyboardType="numeric"
              placeholder="Enter your age..."
              ref={c => (this.age = c)}
              value={survey.age}
              onChangeText={e => survey.ageOnChange(e)}
            />
          </Item>
        </CardItem>
        <CardItem header>
          <Text>What is your sex?</Text>
        </CardItem>
        <ListItem icon onPress={() => survey.sexTouch("M")}>
          <Left>
            <Icon
              name="man"
              style={survey.sex === "M" ? { color: "blue" } : { color: "grey" }}
            />
            <Text>Male</Text>
          </Left>
          <Body />
        </ListItem>
        <ListItem icon onPress={() => survey.sexTouch("F")}>
          <Left>
            <Icon
              name="woman"
              style={survey.sex === "F" ? { color: "red" } : { color: "grey" }}
            />
            <Text>Female</Text>
          </Left>
          <Body />
        </ListItem>
        <CardItem header>
          <Text>What number can we reach you at?</Text>
        </CardItem>
        <CardItem>
          <Item regular>
            <Input
              keyboardType="phone-pad"
              placeholder="Enter your number..."
              ref={c => (this.phoneNum = c)}
              value={survey.phone}
              onChangeText={e => survey.phoneOnChange(e)}
            />
          </Item>
        </CardItem>
      </Card>
    );
    return (
      <PatientDetailsContainer
        navigation={this.props.navigation}
        content={Fields}
        submit={() => this.submitSurvey()}
        reset={() => this.resetForm()}
      />
    );
  }
}
