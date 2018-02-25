import React from "react";
import TwoFactor from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

const onLogin = jest.fn();
const twoFactor = React.Component;

it("renders correctly", () => {
  const tree = renderer
    .create(<TwoFactor onLogin={onLogin} twoFactor={twoFactor} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
