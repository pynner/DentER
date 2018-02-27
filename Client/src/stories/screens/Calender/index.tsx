import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body
} from "native-base";
import { NavigationActions } from "react-navigation";

import styles from "./styles";
export interface Props {
  navigation: any;
  calender: any;
  onRefresh: Function;
}
const resetAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "Drawer" })]
});
export interface State {}
class Calender extends React.Component<Props, State> {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.dispatch(resetAction)}
            >
              <Icon name="ios-close" />
            </Button>
          </Left>

          <Body style={{ flex: 3 }}>
            <Title>On-Call Calender</Title>
          </Body>

          <Right>
            <Button transparent onPress={() => console.log("Refresh calender")}>
              <Icon name="ios-refresh" />
            </Button>
          </Right>
        </Header>

        <Content padder>{this.props.calender}</Content>
      </Container>
    );
  }
}

export default Calender;
