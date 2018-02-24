import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body,
  View,
  H3,
  ListItem,
  CheckBox,
  List
} from "native-base";
import { NavigationActions } from "react-navigation";

import styles from "./styles";
export interface Props {
  navigation: any;
  questions: any;
}
const resetAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "Drawer" })]
});
export interface State {}
class BlankPage extends React.Component<Props, State> {
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
              <Icon name="ios-close" />
            </Button>
          </Left>

          <Body style={{ flex: 3 }}>
            <Title>{param ? param.name.item : "Blank Page"}</Title>
          </Body>

          <Right />
        </Header>

        <Content padder>
          {this.props.questions.map((question, i) => (
            <View key={i}>
              {/* Question title */}
              <View style={{ marginBottom: 10 }}>
                <H3 style={{ fontWeight: "bold" }}>{question.title} </H3>
              </View>
              {/* Question body */}
              <View style={{ backgroundColor: "white" }}>
                <List>
                  {question.options.map((option, i) => (
                    <ListItem key={i} style={{ marginRight: 15 }}>
                      <CheckBox checked={false} />
                      <Body>
                        <Text>{option}</Text>
                      </Body>
                    </ListItem>
                  ))}
                </List>
              </View>

              <View style={styles.horizontalLine} />
            </View> //End wrapper
          ))}

          {/* View to add padding so can scroll to bottom item */}
          <View style={{ marginBottom: 100 }} />
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
          <Button transparent onPress={() => this.props.navigation.navigate()}>
            <Text style={{ color: "white", paddingRight: 0, fontSize: 20 }}>
              Next
            </Text>
            <Icon
              name="arrow-forward"
              style={{ color: "white", marginLeft: 10, fontSize: 45 }}
            />
          </Button>
        </View>
      </Container>
    );
  }
}

export default BlankPage;
