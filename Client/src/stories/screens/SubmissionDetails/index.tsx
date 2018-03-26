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

import { API } from "aws-amplify";

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
  getPain(val) {
    switch (val) {
      case 0:
        return "Teeth";
      case 1:
        return "Gums";
      case 2:
        return "Jaw";
      case 3:
        return "Head";
      default:
        return "Unknown";
    }
  }

  getDuration(val) {
    switch (val) {
      case 0:
        return "Today";
      case 1:
        return "A few days";
      case 2:
        return "One week";
      case 3:
        return "Longer than one week";
      default:
        return "Unknown";
    }
  }

  async getAllSubmissions(ID) {
    const path = "/survey/update/" + ID;

    const myInit = {
      headers: {}
    };

    try {
      const APIResponse = await API.get("surveyCRUD", path, myInit).then(
        response => {
          return response.data;
        }
      );
      console.log("response from updating status: ");
      console.log(APIResponse);
    } catch (e) {
      console.log(e);
    }
  }

  checkSeen(seen, ID) {
    if (!seen) this.getAllSubmissions(ID);
  }

  render() {
    const param = this.props.navigation.state.params;
    this.checkSeen(param.data.item.hasSeen, param.data.item.submissionId);
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
            <Button transparent onPress={() => console.log(param.data.item)}>
              <Icon name="md-refresh" />
            </Button>
          </Right>
        </Header>
        <Content padder>
          <Card>
            <CardItem header>
              <H3>{param.data.item.name}</H3>
            </CardItem>
            <CardItem>
              <Body>
                <Button
                  full
                  success
                  onPress={() => // make a phone call (placeholder # for now)
                      Communications.phonecall(param.data.item.phone, false)
                  }
                >
                  <Text>Call</Text>
                </Button>
              </Body>
            <Right><Text>{param.data.item.phone}</Text></Right>
            </CardItem>
            <Separator bordered>
              <Text>PAIN DESCRIPTION</Text>
            </Separator>
            <CardItem>
              <Body>
                <Text>Where?</Text>
              </Body>
              <Right>
                <Text note>
                  {this.getPain(param.data.item.multipleChoiceAnswers[0])}
                </Text>
              </Right>
            </CardItem>
            <CardItem>
              <Body>
                <Text>How long?</Text>
              </Body>
              <Right>
                <Text note>
                  {this.getDuration(param.data.item.multipleChoiceAnswers[1])}
                </Text>
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
                <Text note>
                  {param.data.item.multipleChoiceAnswers[1][0] ? "Yes" : "No"}
                </Text>
              </Right>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Hard Lumps</Text>
              </Body>
              <Right>
                <Text note>
                  {param.data.item.multipleChoiceAnswers[1][1] ? "Yes" : "No"}
                </Text>
              </Right>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Soft Lumps</Text>
              </Body>
              <Right>
                <Text note>
                  {param.data.item.multipleChoiceAnswers[1][2] ? "Yes" : "No"}
                </Text>
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
