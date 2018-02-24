import * as React from "react";
import { observer, inject } from "mobx-react/native";

import {
  Text,
  Body,
  View,
  H3,
  ListItem,
  CheckBox,
  List,
  Item,
  Input
} from "native-base";

import { Keyboard } from "react-native";

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
  addInfo: any;
  componentWillMount() {
    this.props.surveyStore.fetchItems(data);
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
                  checked={survey.surveyChoice[0] === i}
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
                  checked={survey.surveyChoice[1] === i}
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
                  checked={survey.surveyChoice[2][i]}
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

        {/* Question 4 */}
        <View style={{ marginBottom: 10 }}>
          <H3 style={{ fontWeight: "bold" }}>{survey.questions[3].title} </H3>
        </View>
        <View style={{ backgroundColor: "white" }}>
          <List>
            <ListItem>
              <Item regular>
                <Input
                  multiline={true}
                  numberOfLines={4}
                  placeholder="Enter Additional Information"
                  returnKeyType={"done"}
                  style={{ height: 150 }}
                  onSubmitEditing={() => Keyboard.dismiss()}
                  ref={c => (this.addInfo = c)}
                  value={survey.surveyChoice[3]}
                  onChangeText={e => survey.q3OnChange(e)}
                />
              </Item>
            </ListItem>
          </List>
        </View>
        <View style={styles.horizontalLine} />
      </View>
    );
    return (
      <BlankPage navigation={this.props.navigation} surveyQuestions={Fields} />
    );
  }
}
