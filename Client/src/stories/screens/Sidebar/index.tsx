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
  CardItem,
  Left,
  Thumbnail,
  Separator,
  H3,
  Right
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

        <CardItem>
        <Body>
          <Button
            full
            success
            onPress={() => {
              this.props.navigation.navigate("MultipleChoice");
            }}
          >
            <Text>New request</Text>
          </Button>
        </Body>
        <Right>
          <Button
            full
            onPress={() =>
              Auth.signOut()
                .then(data => console.log(data))
                .catch(err => console.log(err))
            }
          >
            <Text>Sign out</Text>
          </Button>
        </Right>
        </CardItem>

        <List style={{ marginTop: 0 }}>
          <Separator bordered>
            <Text>PATIENT</Text>
          </Separator>
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

          <Separator bordered>
            <Text>DENTIST</Text>
          </Separator>

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
      </Container>
    );
  }
}
