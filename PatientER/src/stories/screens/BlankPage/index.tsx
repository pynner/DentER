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
  actions: [NavigationActions.navigate({ routeName: "Home" })]
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
            position: "absolute",
            bottom: 50,
            left: 0,
            right: 0,
            justifyContent: "space-between",
            padding: 15
          }}
        >
          <Button iconLeft onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-back" />
            <Text>Previous</Text>
          </Button>
          <Button iconRight onPress={() => this.props.navigation.navigate()}>
            <Icon name="arrow-forward" />
            <Text>Next</Text>
          </Button>
        </View>
      </Container>
    );
  }
}

export default BlankPage;
