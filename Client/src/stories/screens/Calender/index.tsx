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
}
const resetAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "Drawer" })]
});
export interface State {}
class Calender extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  }

  forceUpdateHandler() {
    this.forceUpdate();
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.dispatch(resetAction)}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>

          <Body style={{ flex: 3 }}>
            <Title>On-Call Calendar</Title>
          </Body>

          <Right>
            <Button transparent onPress={() => this.forceUpdateHandler()}>
              <Icon name="md-refresh" />
            </Button>
          </Right>
        </Header>

        <Content padder>{this.props.calender}</Content>
      </Container>
    );
  }
}

export default Calender;
