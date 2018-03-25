import * as React from "react";
import { Image } from "react-native";
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
  H3,
  Card,
  CardItem,
  Text,
  View
} from "native-base";

import styles from "./styles";
import { NavigationActions } from "react-navigation";
export interface Props {
  navigation: any;
}

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "Drawer" })]
});

export interface State {}
class PatientDetails extends React.Component<Props, State> {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.dispatch(resetAction)}
            >
              <Icon name="md-close" />
            </Button>
          </Left>

          <Body style={{ flex: 3 }}>
            <Title>Personal Information</Title>
          </Body>
        </Header>

        <Content padder>
          <Text>Test</Text>
          <View style={{ marginBottom: 100 }} />
        </Content>

        {/* Survey Navigation */}
        <View style={styles.navigation}>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon
              name="arrow-back"
              style={{ color: "white", marginRight: 10, fontSize: 45 }}
            />
            <Text style={{ color: "white", paddingLeft: 0, fontSize: 20 }}>
              Previous
            </Text>
          </Button>
          <Button transparent onPress={() => this.props.navigation.navigate("PatientDetails") }>
            <Text style={{ color: "white", paddingRight: 0, fontSize: 20 }}>
              Next
            </Text>
            <Icon
              name="arrow-forward"
              style={{ color: "white", marginLeft: 10, fontSize: 45 }}
            />
          </Button>
        </View>
      </Container>
    );
  }
}

export default PatientDetails;
