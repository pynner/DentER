// @flow
import * as React from "react";
import { Item, Input, Icon, Form, Toast, Text } from "native-base";
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
      this.props.navigation.navigate("Drawer");
    } else {
      Toast.show({
        text: "Enter a valid phone number",
        duration: 2000,
        position: "top",
        textStyle: { textAlign: "center" }
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
            placeholder="Mobile number"
            maxLength={10}
            keyboardType="numeric"
            ref={c => (this.phoneInput = c)}
            value={form.phone}
            onBlur={() => form.validatePhone()}
            onChangeText={e => form.phoneOnChange(e)}
          />
        </Item>
      </Form>
    );
    return <Login loginForm={Fields} onLogin={() => this.login()} />;
  }
}
