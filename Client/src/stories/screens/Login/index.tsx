import * as React from "react";
import { Image, Platform } from "react-native";
import {
  Container,
  Content,
  Header,
  Body,
  Title,
  Button,
  Text,
  View,
  Footer
} from "native-base";
//import styles from "./styles";
export interface Props {
  loginForm: any;
  onLogin: Function;
}
export interface State {}
class Login extends React.Component<Props, State> {
  render() {
    return (
      <Container>
        <Header style={{ height: 200 }}>
          <Body style={{ alignItems: "center" }}>
            <Image
              source={require("../../../../assets/DentER_logo.png")}
              style={{ width: 130, height: 130, marginTop: 30 }}
            />
            <Title>DentER</Title>
            <View padder>
              <Text
                style={{ color: Platform.OS === "ios" ? "#000" : "#FFF" }}
              />
            </View>
          </Body>
        </Header>
        <Content>
          {this.props.loginForm}
          <View padder style={{ marginTop: 20 }}>
            <Button block onPress={() => this.props.onLogin()}>
              <Text>Login</Text>
            </Button>
          </View>
        </Content>
        <Footer style={{ backgroundColor: "#F8F8F8" }}>
          <View
            style={{ alignItems: "center", opacity: 0.5, flexDirection: "row" }}
          >
            <View padder>
              <Text style={{ color: "#000" }}>Made by: </Text>
            </View>
            <Image
              source={require("../../../../assets/periodic.png")}
              style={{ width: 422 / 4, height: 86 / 4 }}
            />
          </View>
        </Footer>
      </Container>
    );
  }
}

export default Login;
