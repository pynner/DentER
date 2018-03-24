import * as React from "react";
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
  H3,
  CardItem,
  Left,
  Thumbnail
} from "native-base";

import { Auth } from "aws-amplify";

export interface Props {
  navigation: any;
}
export interface State {}

export default class Sidebar extends React.Component<Props, State> {
  render() {
    return (
      <Container>
        <CardItem>
          <Left>
            <Thumbnail source={require("../../../../assets/profile.jpg")} />
            <Body>
              <Text>Mitchell Pynn</Text>
              <Text note>Patient</Text>
            </Body>
          </Left>
        </CardItem>

        <Button
          full
          info
          onPress={() =>
            Auth.signOut()
              .then(data => console.log(data))
              .catch(err => console.log(err))
          }
        >
          <Text>Sign out</Text>
        </Button>

        <List style={{ marginTop: 0 }}>
          <ListItem>
            <H3>Patient</H3>
          </ListItem>

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
          <ListItem>
            <H3>Dentist</H3>
          </ListItem>

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
              this.props.navigation.navigate("Submissions");
            }}
          >
            <Text>Submissions</Text>
          </ListItem>
        </List>
        <Content />

        <Footer>
          <FooterTab>
            <Button
              full
              success
              onPress={() => {
                this.props.navigation.navigate("MultipleChoice");
              }}
            >
              <H2 style={{ color: "white", fontWeight: "normal" }}>
                Submit new request
              </H2>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
