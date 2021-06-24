import React, { Component } from "react";
import { ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { Text } from "react-native";

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "Contact Us",
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <Card wrapperStyle={{ margin: 20 }} title="Contact Information">
          <Text>1 Nucamp Way</Text>
          <Text> Seattle, WA 98001</Text>
          <Text style={{ marginBottom: 10 }}> U.S.A. </Text>

          <Text> Phone: 1-206-555-1234</Text>
          <Text> Email: campsites@nucamp.co</Text>
        </Card>
      </ScrollView>
    );
  }
}

export default Contact;
