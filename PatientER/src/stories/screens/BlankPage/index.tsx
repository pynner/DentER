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
  View
} from "native-base";
import { NavigationActions } from "react-navigation";

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
          <Text>
            {param !== undefined
              ? param.name.item
              : "Create Something Awesome . . ."}
          </Text>
        </Content>

        <View
          style={{
            flexDirection: "row",
            flex: 1,
            backgroundColor: "#666666",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            justifyContent: "space-between",
            padding: 5
          }}
        >
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
