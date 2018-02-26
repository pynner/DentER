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

const routes = [
  {
    route: "Home",
    caption: "Home"
  },
  {
    route: "MultipleChoice",
    caption: "New Request"
  },
  {
    route: "Login",
    caption: "Logout"
  }
];

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
                this.props.navigation.navigate(routes[0].route);
              }}
            >
              <Text>{routes[0].caption}</Text>
            </ListItem>

            <ListItem
              button
              onPress={() => {
                this.props.navigation.dispatch(resetAction);
              }}
            >
              <Text>{routes[2].caption}</Text>
            </ListItem>
          </List>
        </Content>

        <Footer>
          <FooterTab>
            <Button
              full
              success
              onPress={() => {
                this.props.navigation.navigate(routes[1].route);
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
