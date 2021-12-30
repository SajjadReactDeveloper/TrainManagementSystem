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
          uri: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=984&q=80",
        }}
        style={{ width: 220, height: 120, justifyContent: 'center', alignItems: 'center' }}
      />
        </View>
          <Card.Title
            title={data.name}
          />
          <Card.Content>
            <Paragraph><Text style = {{fontWeight: 'bold'}}>Source:</Text> {data.source}</Paragraph>
            <Paragraph><Text style = {{fontWeight: 'bold'}}>Destination:</Text> {data.destination}</Paragraph>
            <Paragraph><Text style = {{fontWeight: 'bold'}}>Travel Date:</Text> {data.date}</Paragraph>
            <Paragraph><Text style = {{fontWeight: 'bold'}}>Fare:</Text> {data.cnic}</Paragraph>
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
  