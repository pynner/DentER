import * as React from "react";
import Images from "../../../../assets/images.js";
import { Image, Platform, StyleSheet } from "react-native";
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
  twoFactor: any;
  onLogin: Function;
}
export interface State {}
class TwoFactor extends React.Component<Props, State> {
  render() {
    return (
      <Container>
        <Header style={{ height: 50 }}>
          <Body style={{ alignItems: "center" }}>
            {/* @TODO - Get title from login store */}
            <Title>+1 807 472 5151</Title>
          </Body>
        </Header>
        <Content>
          <View padder style={{ height: 120, alignItems: "center" }}>
            <Text style={{ textAlign: "center" }}>
              {" "}
              An SMS containing an activation code has been sent to the phone
              number above.{"\n"}
            </Text>
            <Text style={{ textAlign: "center" }}>
              {" "}
              To complete your phone number verification, please enter the
              4-digit activation code.{" "}
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginLeft: 15
            }}
          />
          {this.props.twoFactor}
          <View padder style={{ marginTop: 20 }}>
            <Button block onPress={() => this.props.onLogin()}>
              <Text>Submit</Text>
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

export default TwoFactor;
