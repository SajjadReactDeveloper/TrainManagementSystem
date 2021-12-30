import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Image
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
      <Card style = {{padding: 20, width: 300,}}>
      <View style = {{justifyContent: 'center', alignItems:'center'}}>
      <Image
      source={{
        uri: data.link,
      }}
      style={{ width: 120, height: 120, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}
    />
      </View>
        <Card.Title
          title={data.name}
          subtitle= {data.designation}
        />
        <Card.Content>
          <Paragraph><Text style = {{fontWeight: 'bold'}}>Age:</Text> {data.age}</Paragraph>
          <Paragraph><Text style = {{fontWeight: 'bold'}}>Contact:</Text> {data.contact}</Paragraph>
          <Paragraph><Text style = {{fontWeight: 'bold'}}>CNIC:</Text> {data.cnic}</Paragraph>
          <TouchableOpacity onPress={() => {
            navigation.goBack()
          }} style = {{backgroundColor: 'green', justifyContent: 'center', padding: 10, marginTop: 10, borderRadius: 10}}>
            <Text style= {{color: '#fff', textAlign: 'center'}}>Back</Text>
          </TouchableOpacity>
        </Card.Content>
      </Card>
    </View>
  );
};
