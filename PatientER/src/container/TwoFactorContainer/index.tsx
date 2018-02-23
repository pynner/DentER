// @flow
import * as React from "react";
import { Item, Input, Form, Toast } from "native-base";
import { observer, inject } from "mobx-react/native";

import TwoFactor from "../../stories/screens/TwoFactor";

export interface Props {
  navigation: any;
  twoFactor: any;
}
export interface State {}

@inject("twoFactor")
@observer
export default class TwoFactorContainer extends React.Component<Props, State> {
  codeInput: any;
  checkCode() {
    this.props.twoFactor.validateCode();
    if (this.props.twoFactor.isValid) {
      this.props.twoFactor.clearStore();
      // @TODO Change to reset action so cannot navigate back to code after success
      this.props.navigation.navigate("Drawer");
    } else {
      Toast.show({
        text: "Your code is not valid, please try again",
        duration: 3000,
        position: "top",
        textStyle: { textAlign: "center" },
        type: "warning"
      });
    }
  }

  render() {
    const form = this.props.twoFactor;
    const Fields = (
      <Form>
        <Item error={form.isValid ? false : true}>
          <Input
            style={{ textAlign: "center", marginRight: 20 }}
            placeholder="Input Activation Code"
            maxLength={4}
            keyboardType="numeric"
            ref={c => (this.codeInput = c)}
            value={form.code}
            onBlur={() => form.validateCode()}
            onChangeText={e => form.codeOnChange(e)}
          />
        </Item>
      </Form>
    );

    return <TwoFactor twoFactor={Fields} onLogin={() => this.checkCode()} />;
  }
}
