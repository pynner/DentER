import * as React from "react";
import { observer, inject } from "mobx-react/native";
import { Calendar } from "react-native-calendars";

import Calender from "../../stories/screens/Calender";

import { Alert } from "react-native";

import data from "./data";

export interface Props {
  navigation: any;
  calenderStore: any;
}
export interface State {}

@inject("calenderStore")
@observer
export default class CalenderContainer extends React.Component<Props, State> {
  months: Object;
  dates: Object;

  constructor(props) {
    super(props);
    this.months = {
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
  }
  refresh() {
    // get new calender data
  }

  componentWillMount() {
    this.props.calenderStore.fetchItems(data);
    this.dates = this.props.calenderStore.calendarArray;
  }

  showDentist(day) {
    Alert.alert(
      this.dates[day.dateString] != undefined
        ? this.dates[day.dateString]
        : "Dr.Error" + " is On-Call",
      this.months[day.month] + " " + day.day + " " + day.year,
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
    const store = this.props.calenderStore;
    const Fields = (
      <Calendar
        displayLoadingIndicator={store.isLoading}
        scrollEnabled={false}
        onDayPress={day => {
          this.showDentist(day);
        }}
        markedDates={{
          "2018-02-01": {
            startingDay: true,
            endingDay: true,
            color: "#98fb98"
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
