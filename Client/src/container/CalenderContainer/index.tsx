import * as React from "react";
import { observer, inject } from "mobx-react/native";
import { CalendarList } from "react-native-calendars";

import Calender from "../../stories/screens/Calender";

import { Alert } from "react-native";

export interface Props {
  navigation: any;
  calenderStore: any;
}
export interface State {}

@inject("calenderStore")
@observer
export default class CalenderContainer extends React.Component<Props, State> {
  phoneInput: any;
  refresh() {
    // get new calender data
  }

  showDentist(months, day) {
    Alert.alert(
      // @PULL DOC FROM DATA
      "Dr. Pynn is On-Call",
      months[day.month] + " " + day.day + " " + day.year,
      [
        {
          text: "Ok",
          onPress: () => {
            console.log("Submitted");
          }
        }
      ],
      { cancelable: false }
    );
  }
  render() {
    const months = {
      1: "January	",
      2: "February",
      3: "March",
      4: "April",
      5: "May",
      7: "July",
      8: "August",
      9: "Septembe",
      10: "October",
      11: "November",
      12: "December"
    };
    const form = this.props.calenderStore;
    const Fields = (
      <CalendarList
        onDayPress={day => {
          this.showDentist(months, day);
        }}
        markedDates={{
          "2018-02-01": {
            startingDay: true,
            color: "#98fb98"
          },
          "2018-02-02": {
            color: "#98fb98",
            endingDay: true
          }
        }}
        markingType={"period"}
      />
    );
    return (
      <Calender
        navigation={this.props.navigation}
        calender={Fields}
        onRefresh={() => this.refresh()}
      />
    );
  }
}
