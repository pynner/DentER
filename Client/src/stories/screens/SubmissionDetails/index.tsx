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
  Separator,
  H3,
  H2,
  Footer,
  FooterTab
} from "native-base";
import { NavigationActions } from "react-navigation";
import Communications from "react-native-communications";

import styles from "./styles";
export interface Props {
  navigation: any;
  onRefresh: Function;
}
const resetAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "Submissions" })]
});

export interface State {}
class SubmissionDetails extends React.Component<Props, State> {
  render() {
    const param = this.props.navigation.state.params;
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
            <CardItem>
              <Body>
                <Button
                  full
                  success
                  onPress={() => // make a phone call (placeholder # for now)
                      Communications.phonecall("1 234 5678", false)
                  }
                >
                  <Text>Call</Text>
                </Button>
              </Body>
            <Right><Text>+1 (234) 567-8910</Text></Right>
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
              <Text style={{ color: "gray" }}>
                The pain is so bad I cannot eat. I am bedridden, and my children
                are going hungry because they are too young to feed themselves.
                My many cats are also starting to feel the effects of hunger,
                and I worry for their lives.
              </Text>
          </CardItem>
          <Separator bordered>
            <Text>PATIENT INFORMATION</Text>
          </Separator>
          <CardItem>
            <Body>
              <Text>Age</Text>
            </Body>
            <Right>
              <Text note>37</Text>
            </Right>
          </CardItem>
          <CardItem>
            <Body>
              <Text>Sex</Text>
            </Body>
            <Right>
              <Text note>Female</Text>
            </Right>
          </CardItem>
          <CardItem>
            <Body>
              <Text>Phone number</Text>
            </Body>
            <Right>
              <Text note>+1 (709) 435 7433</Text>
            </Right>
          </CardItem>
          <CardItem footer>

          </CardItem>
        </Card>
        </Content>
      </Container>
    );
  }
}

export default SubmissionDetails;
