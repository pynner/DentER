import * as React from "react";
import {
  Container,
  Header,
  Title,
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
  onRefresh: Function;
}
const resetAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "Drawer" })]
});
export interface State {}
class Submissions extends React.Component<Props, State> {
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
            <Title>Survey Submissions</Title>
          </Body>

          <Right>
            <Button transparent onPress={() => console.log("Refresh calender")}>
              <Icon name="ios-refresh" />
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }
}

export default Submissions;
