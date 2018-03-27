import * as React from "react";
import { observer, inject } from "mobx-react/native";
import { Image } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Body,
  Right,
  H3,
  Card,
  CardItem,
  Text
} from "native-base";

import styles from "./styles";
export interface Props {
  navigation: any;
  count: number;
  onRefresh: Function;
}
export interface State {}
class Home extends React.Component<Props, State> {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon
                active
                name="menu"
                onPress={() => this.props.navigation.navigate("DrawerOpen")}
              />
            </Button>
          </Left>
          <Body>
            <Title>DentER</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.onRefresh()}>
              <Icon name="ios-cloud-download-outline" />
            </Button>
          </Right>
        </Header>
        <Content padder>
          <Card>
            <CardItem header>
              <Body>
                <H3>Welcome to DentER!</H3>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>The best way to connect with on-call dentists.</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon
                style={
                  this.props.count > 0 ? { color: "red" } : { color: "grey" }
                }
                name="md-notifications"
              />
              <Text>You have {this.props.count} notifications.</Text>
            </CardItem>
          </Card>
          <Body>
            <Text> </Text>
            <Text>Swipe right to get started.</Text>
            <Text> </Text>
            <Image
              source={require("../../../../assets/DentER_logo.png")}
              style={{ width: 650 / 8, height: 650 / 8 }}
            />
          </Body>
        </Content>
      </Container>
    );
  }
}

export default Home;
