import * as React from "react";
import { observer, inject } from "mobx-react/native";

import { View, H3, ListItem, List, Item, Input } from "native-base";

import styles from "./styles";
import Additional from "../../stories/screens/Additional";

import { Keyboard } from "react-native";

export interface Props {
  navigation: any;
  surveyStore: any;
}
export interface State {}

@inject("surveyStore")
@observer
export default class AdditionalContainer extends React.Component<Props, State> {
  addInfo: any;

  resetForm() {
    this.props.surveyStore.clearAdditional();
  }

  submitSurvey() {
    this.props.surveyStore.saveSurvey();
  }

  render() {
    const survey = this.props.surveyStore;
    const Fields = (
      <View>
        {/* Additional Info */}
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
                  value={survey.additionalInfo[0]}
                  onChangeText={e => survey.additionalOnChange(e)}
                />
              </Item>
            </ListItem>
          </List>
        </View>
        <View style={styles.horizontalLine} />
      </View>
    );
    return (
      <Additional
        navigation={this.props.navigation}
        surveyQuestions={Fields}
        reset={() => this.resetForm()}
        submit={() => this.submitSurvey()}
      />
    );
  }
}
