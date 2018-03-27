import * as React from "react";
import {
  Text,
  Container,
  List,
  ListItem,
  Content,
  Button,
  Body,
  CardItem,
  Left,
  Thumbnail,
  Separator,
  Right
} from "native-base";

import { Auth } from "aws-amplify";

import styles from "./styles";
export interface Props {
  navigation: any;
  name: any;
  isDentist: any;
}
export interface State {}

export default class Sidebar extends React.Component<Props, State> {
  render() {
    return (
      <Container style={styles.topPad}>
        <CardItem>
          <Left>
            <Thumbnail
              source={
                this.props.isDentist
                  ? require("../../../../assets/dentist.jpg")
                  : require("../../../../assets/profile.jpg")
              }
            />
            <Body>
              <Text>
                {this.props.isDentist
                  ? "Dr. " + this.props.name
                  : this.props.name}
              </Text>
              <Text note>{this.props.isDentist ? "Dentist" : "Patient"}</Text>
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

        {!this.props.isDentist ? (
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
                this.props.navigation.navigate("Submissions");
              }}
            >
              <Text>Past Submissions</Text>
            </ListItem>
          </List>
        ) : (
          <List style={{ marginTop: 0 }}>
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
        )}
        <Content />
      </Container>
    );
  }
}
