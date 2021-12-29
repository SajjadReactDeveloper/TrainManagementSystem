import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Input, Icon } from "react-native-elements";
import firestore from "@react-native-firebase/firestore";
import React from "react";
import db from "../db/firestore";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

export default ({ navigation, route }) => {
  const [data, setData] = React.useState(route.params.item);
  return (
    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Card style = {{padding: 20}}>
        <Card.Title
          title={data.name}
          subtitle= {data.designation}
        />
        <Card.Content>
          <Paragraph><Text style = {{fontWeight: 'bold'}}>Age:</Text> {data.age}</Paragraph>
          <Paragraph><Text style = {{fontWeight: 'bold'}}>Contact:</Text> {data.contact}</Paragraph>
          <Paragraph><Text style = {{fontWeight: 'bold'}}>CNIC:</Text> {data.cnic}</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};
