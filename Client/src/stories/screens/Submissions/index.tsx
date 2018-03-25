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
              <Text>PATIENT SUBMISSIONS</Text>
            </Separator>
            <CardItem>
              <Icon style={{color: "red"}}name="md-notifications" />
              <Body>
                <Text>Liam Kent</Text>
              </Body>
              <Right>
                <Text note>May 31, 2011</Text>
              </Right>
            </CardItem>
            <CardItem>
              <Icon active style={{color: "lightgray"}} name="md-eye" />
              <Body>
                <Text>Larry David</Text>
              </Body>
              <Right>
                <Text note>April 4, 2011</Text>
              </Right>
            </CardItem>
            <CardItem>
              <Icon active style={{color: "lightgray"}} name="md-eye" />
              <Body>
                <Text>Mitchell Pine</Text>
              </Body>
              <Right>
                <Text note>June 5, 2010</Text>
              </Right>
            </CardItem>
            <CardItem>
              <Icon active style={{color: "lightgray"}} name="md-eye" />
              <Body>
                <Text>Susie Green</Text>
              </Body>
              <Right>
                <Text note>August 14, 2009</Text>
              </Right>
            </CardItem>
            <CardItem>
              <Icon active style={{color: "lightgray"}} name="md-eye" />
              <Body>
                <Text>Ted Beneke</Text>
              </Body>
              <Right>
                <Text note>January 23, 2009</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default Submissions;
