import React, {Component} from 'react';
import {View, Text, Button, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default class DatePicker extends Component {
  state = {
    date: new Date(Date.now()),
    mode: 'date',
    show: false,
  }

  setDate = (event, date) => {
    date = date || this.state.date;

    this.setState({
      show: Platform.OS === 'ios' ? true : false,
      date,
    });
  }

  show = mode => {
    this.setState({
      show: true,
      mode,
    });
  }

  datepicker = () => {
    this.show('date');
  }

  timepicker = () => {
    this.show('time');
  }

  render() {
    const { show, date, mode } = this.state;

    return (
      <View>
        <View>
          <Button onPress={this.datepicker} title="Show date picker!" />
        </View>
        <View>
           <Text>{date.toDateString()}</Text>
        </View>
        <View>
          <Button onPress={this.timepicker} title="Show time picker!" />
        </View>
        <View>
           <Text>{date.toTimeString()}</Text>
        </View>
        { show && <DateTimePicker value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={this.setDate} />
        }
      </View>
    );
  }
}