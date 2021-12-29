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
import React from "react";
import db from "../db/firestore";

export default ({ navigation, route }) => {
  const image = {
    uri: "https://images.unsplash.com/photo-1530625625693-b38b404cb1be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  };
  const [dataId, setDataID] = React.useState(route.params.item);
  const [id, setID] = React.useState();
  const [name, setName] = React.useState();
  const [age, setAge] = React.useState();
  const [cnic, setCnic] = React.useState();
  const [contact, setContact] = React.useState();
  const [designation, setDesignation] = React.useState();

  const updateData = () => {
    return db.collection("Employee").doc(dataId).update({
      name: name,
      age: age,
      cnic: cnic,
      contact: contact,
      designation: designation
    }).then((result) => navigation.navigate('View Employee'));
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text
          style={{
            textAlign: "center",
            color: "#fff",
            marginBottom: 10,
            fontSize: 24,
          }}
        >
          Update Employee
        </Text>
        <Text style={{ marginLeft: 10, color: "#fff", fontSize: 18 }}>
          Employee Id
        </Text>
        <Input
          placeholder="Enter Employee ID"
          placeholderTextColor="#fff"
          inputStyle={{ color: "#fff" }}
          onChangeText={setID}
          leftIcon={
            <Icon
              name="id-card"
              type="font-awesome"
              color="#fff"
              iconStyle={{ marginRight: 10 }}
            />
          }
        />

        <Text style={{ marginLeft: 10, color: "#fff", fontSize: 18 }}>
          Employee Name
        </Text>
        <Input
          placeholder="Enter Employee Name"
          placeholderTextColor="#fff"
          inputStyle={{ color: "#fff" }}
          onChangeText={setName}
          leftIcon={
            <Icon
              name="user"
              type="font-awesome"
              color="#fff"
              iconStyle={{ marginRight: 10 }}
            />
          }
        />

        <Text style={{ marginLeft: 10, color: "#fff", fontSize: 18 }}>Age</Text>
        <Input
          placeholder="Enter Age"
          placeholderTextColor="#fff"
          inputStyle={{ color: "#fff" }}
          onChangeText={setAge}
          leftIcon={
            <Icon
              name="male"
              type="font-awesome"
              color="#fff"
              iconStyle={{ marginRight: 10 }}
            />
          }
        />

        <Text style={{ marginLeft: 10, color: "#fff", fontSize: 18 }}>
          CNIC
        </Text>
        <Input
          placeholder="Enter CNIC"
          placeholderTextColor="#fff"
          inputStyle={{ color: "#fff" }}
          onChangeText={setCnic}
          leftIcon={
            <Icon
              name="id-card"
              type="font-awesome"
              color="#fff"
              iconStyle={{ marginRight: 10 }}
            />
          }
        />

        <Text style={{ marginLeft: 10, color: "#fff", fontSize: 18 }}>
          Contact No
        </Text>
        <Input
          placeholder="Enter Contact Number"
          placeholderTextColor="#fff"
          inputStyle={{ color: "#fff" }}
          onChangeText={setContact}
          leftIcon={
            <Icon
              name="mobile"
              type="font-awesome"
              color="#fff"
              iconStyle={{ marginRight: 10 }}
            />
          }
        />

        <Text style={{ marginLeft: 10, color: "#fff", fontSize: 18 }}>
          Designation
        </Text>
        <Input
          placeholder="Enter Designation"
          placeholderTextColor="#fff"
          inputStyle={{ color: "#fff" }}
          onChangeText={setDesignation}
          leftIcon={
            <Icon
              name="id-badge"
              type="font-awesome"
              color="#fff"
              iconStyle={{ marginRight: 10 }}
            />
          }
        />

        <View
          style={{ justifyContent: "center", alignItems: "center", margin: 10 }}
        >
          <TouchableOpacity
            onPress={() => {
              updateData();
            }}
            style={{
              backgroundColor: "green",
              padding: 10,
              borderRadius: 5,
              width: 190,
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 20, color: "#fff" }}>Update Employee</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 24,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});
