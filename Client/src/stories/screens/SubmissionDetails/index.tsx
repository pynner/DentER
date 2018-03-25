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
  Text,
  Separator, H3
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
          <CardItem header>
            <H3>Susie Green</H3>
          </CardItem>
          <Separator bordered>
            <Text>PAIN DESCRIPTION</Text>
          </Separator>
          <CardItem>
            <Body>
              <Text>Where?</Text>
            </Body>
            <Right>
              <Text note>Gums</Text>
            </Right>
          </CardItem>
          <CardItem>
            <Body>
              <Text>How long?</Text>
            </Body>
            <Right>
              <Text note>A few days</Text>
            </Right>
          </CardItem>
          <Separator bordered>
            <Text>COMMON SYMPTOMS</Text>
          </Separator>
          <CardItem>
            <Body>
              <Text>Bleeding</Text>
            </Body>
            <Right>
              <Text note>Yes</Text>
            </Right>
          </CardItem>
          <CardItem>
            <Body>
              <Text>Hard Lumps</Text>
            </Body>
            <Right>
              <Text note>No</Text>
            </Right>
          </CardItem>
          <CardItem>
            <Body>
              <Text>Soft Lumps</Text>
            </Body>
            <Right>
              <Text note>No</Text>
            </Right>
          </CardItem>
          <Separator bordered>
            <Text>ADDITIONAL COMMENTS</Text>
          </Separator>
          <CardItem>
              <Text style={{color: "gray"}}>
                The pain is so bad I cannot eat.
                I am bedridden, and my children are going hungry because
                they are too young to feed themselves. My many cats are also
                starting to feel the effects of hunger, and I worry for their lives.
              </Text>
          </CardItem>
        </Card>
        </Content>
      </Container>
    );
  }
}

export default SubmissionDetails;
