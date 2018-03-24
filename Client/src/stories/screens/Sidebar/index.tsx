import * as React from "react";
import {
  Text,
  Container,
  List,
  ListItem,
  Content,
  Footer,
  Button,
  FooterTab,
  H2
} from "native-base";
import { NavigationActions } from "react-navigation";

import { Auth } from "aws-amplify";

export interface Props {
  navigation: any;
}
export interface State {}
const resetAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "Login" })]
});
export default class Sidebar extends React.Component<Props, State> {
  render() {
    return (
      <Container>
        <Content>
          <List style={{ marginTop: 40 }}>
            <ListItem
              button
              onPress={() => {
                this.props.navigation.navigate("Home");
              }}
            >
              <Text>Home</Text>
            </ListItem>

            <ListItem
              button
              onPress={() => {
                this.props.navigation.navigate("Calender");
              }}
            >
              <Text>Calendar</Text>
            </ListItem>
            <ListItem
              button
              onPress={() => {
                Auth.signOut()
                  .then(data => console.log(data))
                  .catch(err => console.log(err));
              }}
            >
              <Text>Logout</Text>
            </ListItem>
          </List>
        </Content>

        <Footer>
          <FooterTab>
            <Button
              full
              success
              onPress={() => {
                this.props.navigation.navigate("MultipleChoice");
              }}
            >
              <H2 style={{ color: "white", fontWeight: "bold" }}>
                SUBMIT NEW REQUEST
              </H2>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
