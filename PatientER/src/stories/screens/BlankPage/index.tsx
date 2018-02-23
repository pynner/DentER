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
  List,
  Radio
} from "native-base";
import { NavigationActions } from "react-navigation";
import { ActivityIndicator, StyleSheet } from "react-native";

import styles from "./styles";
export interface Props {
  navigation: any;
}
const resetAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "Drawer" })]
});
export interface State {}
class BlankPage extends React.Component<Props, State> {
  render() {
    const param = this.props.navigation.state.params;
    var opt1Checked = true;
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
          <View style={{ marginBottom: 10 }}>
            <H3 style={{ fontWeight: "bold" }}>
              {""}
              Overall, how satisfied are you with your experience?
            </H3>
          </View>
          <View style={{ backgroundColor: "white" }}>
            <List>
              <ListItem style={{ marginRight: 15 }}>
                <CheckBox checked={true} />
                <Body>
                  <Text>Option 1Option 1Option 1Option </Text>
                </Body>
              </ListItem>
              <ListItem
                style={{ marginRight: 15 }}
                onPress={() => (opt1Checked = !opt1Checked)}
              >
                <CheckBox checked={opt1Checked} />
                <Body>
                  <Text>Option 2</Text>
                </Body>
              </ListItem>
              <ListItem style={{ marginRight: 15 }}>
                <CheckBox checked={false} />
                <Body>
                  <Text>Option 3</Text>
                </Body>
              </ListItem>
              <ListItem style={{ marginRight: 15 }}>
                <CheckBox checked={false} />
                <Body>
                  <Text>Option 4</Text>
                </Body>
              </ListItem>
            </List>
          </View>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginBottom: 10,
              marginTop: 10
            }}
          />
          {/* View to add padding so can see bottom item */}
          <View
            style={{
              marginBottom: 100
            }}
          />
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
