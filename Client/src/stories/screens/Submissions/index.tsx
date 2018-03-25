import * as React from "react";
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Content,
  Card, CardItem,
  Text,
  Separator
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
              <Icon name="md-close" />
            </Button>
          </Left>

          <Body style={{ flex: 3 }}>
            <Title>Survey Submissions</Title>
          </Body>

          <Right>
            <Button transparent onPress={() => this.props.onRefresh()}>
              <Icon name="md-refresh" />
            </Button>
          </Right>
        </Header>
        <Content padder>
        <Card>
            <Separator bordered>
              <Text>URGENT</Text>
            </Separator>
            <CardItem>
              <Icon active name="person" />
              <Text style={{color: "red"}}>Susie Green</Text>
              <Right>
                <Icon name="eye" />
              </Right>
            </CardItem>
            <CardItem>
              <Icon active name="person" />
              <Text style={{color: "red"}}>Richard Louis</Text>
            </CardItem>
          </Card>
          <Card>
            <Separator bordered>
              <Text>PATIENT SUBMISSIONS</Text>
            </Separator>
            <CardItem>
              <Icon active name="person" />
              <Text>Mitchell Pynn</Text>
              <Right>
                <Icon style={{color: "red"}}name="md-notifications" />
              </Right>
            </CardItem>
            <CardItem>
              <Icon active name="person" />
              <Text>Robert Scott</Text>
            </CardItem>
            <CardItem>
              <Icon active name="people" />
              <Text>Larry David</Text>
              <Right>
                <Icon name="md-notifications" />
              </Right>
            </CardItem>
            <CardItem>
              <Icon active name="person" />
              <Text>Liam Kent</Text>
              <Right>
                <Icon name="md-notifications" />
              </Right>
            </CardItem>
            <CardItem>
              <Icon active name="person" />
              <Text>Drew Sharp</Text>
              <Right>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default Submissions;
