import * as React from "react";
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
  Card,
  CardItem,
  Text,
  View,
  Item,
  Input,
  ListItem
} from "native-base";

import styles from "./styles";
import { NavigationActions } from "react-navigation";
export interface Props {
  navigation: any;
}

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "Additional" })]
});

export interface State {}
class PatientDetails extends React.Component<Props, State> {
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
            <Title>Personal Information</Title>
          </Body>
        </Header>

        <Content padder>
          <Card>
            <CardItem header>
              <Text>How old are you?</Text>
            </CardItem>
            <CardItem>
              <Item rounded>
                <Input keyboardType="numeric" placeholder="Enter your age..." />
              </Item>
            </CardItem>
            <CardItem header>
              <Text>What is your sex?</Text>
            </CardItem>
            <ListItem icon>
              <Left>
                <Icon name="man" style={{ color: "blue" }} />
                <Text>Male</Text>
              </Left>
              <Body />
            </ListItem>
            <ListItem>
              <Left>
                <Icon name="woman" style={{ color: "red" }} />
                <Text>Female</Text>
              </Left>
              <Body />
              <Right>
                <Icon name="checkmark" />
              </Right>
            </ListItem>
            <CardItem header>
              <Text>What number can we reach you at?</Text>
            </CardItem>
            <CardItem>
              <Item rounded>
                <Input
                  keyboardType="phone-pad"
                  placeholder="Enter your number..."
                />
              </Item>
            </CardItem>
          </Card>
        </Content>

        {/* Survey Navigation */}
        <View style={styles.navigation}>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon
              name="arrow-back"
              style={{ color: "white", marginRight: 10, fontSize: 45 }}
            />
            <Text style={{ color: "white", paddingLeft: 0, fontSize: 20 }}>
              Previous
            </Text>
          </Button>
          <Button
            transparent
            onPress={() => this.props.navigation.navigate("Drawer")}
          >
            <Text style={{ color: "white", paddingRight: 0, fontSize: 20 }}>
              Submit
            </Text>
            <Icon
              name="md-checkmark"
              style={{ color: "white", marginLeft: 10, fontSize: 45 }}
            />
          </Button>
        </View>
      </Container>
    );
  }
}

export default PatientDetails;
