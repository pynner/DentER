import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Body,
  Right,
  H1,
  H3
} from "native-base";

import styles from "./styles";
export interface Props {
  navigation: any;
}
export interface State {}
class Home extends React.Component<Props, State> {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon
                active
                name="menu"
                onPress={() => this.props.navigation.navigate("DrawerOpen")}
              />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <H1> Welcome to DentER! </H1>
          <H3> The best way to connect with dentists on-call </H3>
        </Content>
      </Container>
    );
  }
}

export default Home;
