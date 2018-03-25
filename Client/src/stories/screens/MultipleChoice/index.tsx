import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body,
  View
} from "native-base";
import { NavigationActions } from "react-navigation";

import styles from "./styles";
export interface Props {
  navigation: any;
  surveyQuestions: any;
  reset: Function;
}
const resetAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "Drawer" })]
});
export interface State {}
class MultipleChoice extends React.Component<Props, State> {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.dispatch(resetAction)}
            >
              <Icon name="md-close" />
            </Button>
          </Left>

          <Body style={{ flex: 3 }}>
            <Title>New Submission</Title>
          </Body>

          <Right>
            <Button transparent onPress={() => this.props.reset()}>
              <Icon name="md-refresh" />
            </Button>
          </Right>
        </Header>

        <Content padder>
          {this.props.surveyQuestions}
          {/* View to add padding so can scroll to bottom item */}
          <View style={{ marginBottom: 100 }} />
        </Content>

        {/* Survey Navigation */}
        <View style={styles.navigation}>
          <Button transparent />
          <Button
            transparent
            onPress={() => this.props.navigation.navigate("Additional")}
          >
            <Text style={{ color: "white", paddingRight: 0, fontSize: 20 }}>
              Next
            </Text>
            <Icon
              name="arrow-forward"
              style={{ color: "white", marginLeft: 10, fontSize: 45 }}
            />
          </Button>
        </View>
      </Container>
    );
  }
}

export default MultipleChoice;
