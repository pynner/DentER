import * as React from "react";
import Images from "@assets/images";
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
  Icon,
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
            <Icon name="ios-help-buoy" style={{ fontSize: 104 }} />
            <Title>DentER - Patient</Title>
            <View padder>
              <Text
                style={{ color: Platform.OS === "ios" ? "#000" : "#FFF" }}
              />
            </View>
          </Body>
        </Header>
        <Content>
          {this.props.loginForm}
          <View padder>
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
              source={Images.periodic}
              style={{ width: 422 / 4, height: 86 / 4 }}
            />
          </View>
        </Footer>
      </Container>
    );
  }
}

export default Login;
