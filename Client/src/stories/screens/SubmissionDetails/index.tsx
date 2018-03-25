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
  Card,
  CardItem,
  Text
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
class SubmissionDetails extends React.Component<Props, State> {
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
            <Title>Submission Details</Title>
          </Body>

          <Right>
            <Button transparent onPress={() => this.props.onRefresh()}>
              <Icon name="md-refresh" />
            </Button>
          </Right>
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Text>Placeholder</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default SubmissionDetails;
