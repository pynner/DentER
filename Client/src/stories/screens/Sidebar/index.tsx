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
    route: "BlankPage",
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
          <List
            style={{ marginTop: 40 }}
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => {
                    data.route === "Login"
                      ? this.props.navigation.dispatch(resetAction)
                      : this.props.navigation.navigate(data.route);
                  }}
                >
                  <Text>{data.caption}</Text>
                </ListItem>
              );
            }}
          />
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
