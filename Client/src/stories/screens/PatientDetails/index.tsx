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
  Text,
  View,
  Right
} from "native-base";

import styles from "./styles";
import { NavigationActions } from "react-navigation";
import { Alert } from "react-native";

import Sound from "react-native-sound";

export interface Props {
  navigation: any;
  content: any;
  submit: Function;
  reset: Function;
}

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "Drawer" })]
});

export interface State {}
class PatientDetails extends React.Component<Props, State> {
  whoosh: any;

  constructor(props) {
    super(props);
    this.whoosh = new Sound("send.mp3", Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log("failed to load the sound", error);
        return;
      }
      // loaded successfully
      console.log(
        "duration in seconds: " +
          this.whoosh.getDuration() +
          "number of channels: " +
          this.whoosh.getNumberOfChannels()
      );
    });
  }

  confirmSubmit() {
    // Actually submit form
    Alert.alert(
      "Confirm Submission",
      "Are you sure you want to submit your dentist submission?",
      [
        {
          text: "Yes",
          onPress: () => {
            console.log("Submitted");
            // Play the sound with an onEnd callback
            this.whoosh.play(success => {
              if (success) {
                console.log("successfully finished playing");
              } else {
                console.log("playback failed due to audio decoding errors");
                // reset the player to its uninitialized state (android only)
                // this is the only option to recover after an error occured and use the player again
                this.whoosh.reset();
              }
            });
            this.props.submit();
            this.props.navigation.dispatch(resetAction);
          }
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        }
      ],
      { cancelable: false }
    );
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>

          <Body style={{ flex: 3 }}>
            <Title>Personal Information</Title>
          </Body>

          <Right>
            <Button transparent onPress={() => this.props.reset()}>
              <Icon name="md-refresh" />
            </Button>
          </Right>
        </Header>

        <Content padder>{this.props.content}</Content>

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
          <Button transparent onPress={() => this.confirmSubmit()}>
            <Text style={{ color: "white", paddingRight: 0, fontSize: 20 }}>
              Submit
            </Text>
            <Icon
              name="md-checkmark"
              style={{ color: "white", marginLeft: 10, fontSize: 45 }}
            />
          </Button>
        </View>
      </Container>
    );
  }
}

export default PatientDetails;
