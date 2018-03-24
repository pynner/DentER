import * as React from "react";
import { Image, Platform } from "react-native";
import {
  Text,
  Container,
  List,
  ListItem,
  Content,
  Footer,
  Button,
  Body,
  FooterTab,
  H2,
  CardItem,
  Left, Right,
  Thumbnail
} from "native-base";
import { NavigationActions } from "react-navigation";

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
          <CardItem>
            <Left>
              <Thumbnail source={require("../../../../assets/profile.jpg")} />
              <Body>
                <Text>Signed in as</Text>
                <Text note>Mitchell Pynn</Text>
              </Body>
            </Left>
          </CardItem>
          <List style={{ marginTop: 0 }}>
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
                this.props.navigation.dispatch(resetAction);
              }}
            >
              <Text>Sign out</Text>
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
