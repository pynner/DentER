// @flow
import * as React from "react";
import { Linking } from "react-native";
import {
  Item,
  Input,
  Icon,
  Form,
  Toast,
  Text,
  Body,
  ListItem,
  CheckBox
} from "native-base";
import { observer, inject } from "mobx-react/native";

import Login from "../../stories/screens/Login";

export interface Props {
  navigation: any;
  loginForm: any;
}
export interface State {}

@inject("loginForm")
@observer
export default class LoginContainer extends React.Component<Props, State> {
  phoneInput: any;
  login() {
    this.props.loginForm.validateForm();
    if (this.props.loginForm.isValid) {
      this.props.loginForm.clearStore();
      this.props.navigation.navigate("TwoFactor");
    } else {
      Toast.show({
        text: "Must enter a valid phone number and accept the terms of use",
        duration: 5000,
        position: "top",
        textStyle: { textAlign: "center" },
        type: "warning"
      });
    }
  }
  render() {
    const form = this.props.loginForm;
    const Fields = (
      <Form>
        <Item error={form.phoneError ? true : false}>
          <Icon active name="ios-phone-portrait" />
          <Text> +1 </Text>
          <Input
            style={{ paddingLeft: 0 }}
            placeholder="Enter Your Mobile Phone Number"
            autoFocus={true}
            maxLength={10}
            keyboardType="numeric"
            ref={c => (this.phoneInput = c)}
            value={form.phone}
            onBlur={() => form.validatePhone()}
            onChangeText={e => form.phoneOnChange(e)}
          />
        </Item>
        <ListItem>
          <CheckBox
            checked={form.termsCheck}
            onPress={() => form.termPressed()}
          />
          <Body>
            <Text>
              I agree to the{" "}
              {/* @TODO Add button to actually open a terms of use somewhere */}
              <Text
                style={{ color: "blue", textDecorationLine: "underline" }}
                onPress={() => Linking.openURL("http://google.com")}
              >
                Term(s) of Use
              </Text>
            </Text>
          </Body>
        </ListItem>
      </Form>
    );
    return <Login loginForm={Fields} onLogin={() => this.login()} />;
  }
}
