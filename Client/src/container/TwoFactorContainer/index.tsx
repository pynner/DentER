// @flow
import * as React from "react";
import { Item, Input, Form, Toast } from "native-base";
import { observer, inject } from "mobx-react/native";

import TwoFactor from "../../stories/screens/TwoFactor";
import { NavigationActions } from "react-navigation";

import { Keyboard } from "react-native";

export interface Props {
  navigation: any;
  twoFactor: any;
}

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "Drawer" })]
});

export interface State {}

@inject("twoFactor")
@observer
export default class TwoFactorContainer extends React.Component<Props, State> {
  codeInput: any;
  checkCode() {
    this.props.twoFactor.validateCode();
    if (this.props.twoFactor.isValid) {
      this.props.twoFactor.clearStore();
      Keyboard.dismiss();
      this.props.navigation.dispatch(resetAction);
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
            autoFocus={true}
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
