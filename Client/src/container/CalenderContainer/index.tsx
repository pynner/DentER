import * as React from "react";
import { observer, inject } from "mobx-react/native";
import { Calendar } from "react-native-calendars";

import Calender from "../../stories/screens/Calender";

import { Alert } from "react-native";

import { API } from "aws-amplify";

export interface Props {
  navigation: any;
  calenderStore: any;
}
export interface State {}

@inject("calenderStore")
@observer
export default class CalenderContainer extends React.Component<Props, State> {
  months: Object;
  dentists: Object;

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

    this.dentists = {
      1: "Pynn",
      2: "Robb",
      3: "Chiz",
      4: "Gibb",
      0: "Peng"
    };
  }

  showDentist(day) {
    const dentistArray = this.props.calenderStore.calendarArray.find(
      o => o.stringDate === day.dateString
    );
    Alert.alert(
      dentistArray != undefined
        ? "Dr. " + dentistArray.dentist + " is On-Call"
        : "Dr.Bear" + " is On-Call",
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

  async addNewDentist(day) {
    const cDay = day.dateString + "T08:00:00";
    console.log(cDay);

    let newDate = {
      body: {
        date: new Date(cDay).getTime(),
        dentist: this.dentists[day.day % 5],
        endDate: new Date(cDay).getTime() + 86399999,
        stringDate: day.dateString
      }
    };

    const path = "/calender";

    // Use the API module to save the note to the database
    try {
      const apiResponse = await API.put("calenderCRUD", path, newDate);
      console.log("<< response from saving survey >>");
      console.log(apiResponse);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const store = this.props.calenderStore;
    // const calendar dates = store.submissionsArray.toJS();
    const Fields = (
      <Calendar
        displayLoadingIndicator={store.isLoading}
        scrollEnabled={false}
        onDayPress={day => {
          this.showDentist(day);
        }}
        markedDates={store.onCall}
        markingType={"period"}
      />
    );
    return <Calender navigation={this.props.navigation} calender={Fields} />;
  }
}
