import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Image,
  Modal,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Input, Icon } from "react-native-elements";
import firestore from "@react-native-firebase/firestore";
import React from "react";
import db from "../db/firestore";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

export default ({ navigation, route }) => {
  const image = {
    uri: "https://images.unsplash.com/photo-1530625625693-b38b404cb1be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  };

  const [name, setName] = React.useState();
  const [cnic, setCnic] = React.useState();
  const [contact, setContact] = React.useState();
  const [amount, setAmount] = React.useState();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [fare, setFare] = React.useState(1000);
  const [right, setRight] = React.useState(false);
  const [more, setMore] = React.useState(false);
  const [R, setR] = React.useState(false);
  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {right? (<View>
                <Text style={styles.modalText}>Thanks for Payment</Text>
                <Text style={styles.modalText}>Your Ticket has been Booked</Text>
              </View>): R? <Text>{more} is Added to your Credits</Text>:<Text>You have Entered Less Amount</Text>}
            <Pressable
              style={{ backgroundColor: "green", padding: 10, borderRadius: 5, marginTop: 10 }}
              onPress={() => {
                (right || R) ? navigation.navigate("View Ticket"): null;
                setModalVisible(false);
              }}
            >
              <Text style={{ color: "#fff" }}>Back</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View>
          <Text
            style={{
              textAlign: "center",
              fontSize: 28,
              fontWeight: "bold",
              color: "white",
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            Pay your Ticket
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            width: 400,
            height: 550,
            padding: 10,
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 24,
              marginBottom: 10,
              fontWeight: "bold",
            }}
          >
            Payment Details
          </Text>
          <Text
            style={{
              margin: 10,
              backgroundColor: "#28B463",
              color: "#fff",
              padding: 10,
              borderRadius: 5,
            }}
          >
            Note: Your Ticket is {fare}
          </Text>
          <Text style={{ marginLeft: 10, color: "#000", fontSize: 18 }}>
            Name
          </Text>
          <Input
            placeholder="Enter Your Name"
            placeholderTextColor="#000"
            inputStyle={{ color: "#000" }}
            onChangeText={setName}
            leftIcon={
              <Icon
                name="user"
                type="font-awesome"
                color="#000"
                iconStyle={{ marginRight: 10 }}
              />
            }
          />
          <Text style={{ marginLeft: 10, color: "#000", fontSize: 18 }}>
            CNIC
          </Text>
          <Input
            placeholder="Enter Your CNIC"
            placeholderTextColor="#000"
            inputStyle={{ color: "#000" }}
            onChangeText={setCnic}
            leftIcon={
              <Icon
                name="id-card"
                type="font-awesome"
                color="#000"
                iconStyle={{ marginRight: 10 }}
              />
            }
          />
          <Text style={{ marginLeft: 10, color: "#000", fontSize: 18 }}>
            Contact Number
          </Text>
          <Input
            placeholder="Enter Your Contact Number"
            placeholderTextColor="#000"
            inputStyle={{ color: "#000" }}
            onChangeText={setContact}
            leftIcon={
              <Icon
                name="phone"
                type="font-awesome"
                color="#000"
                iconStyle={{ marginRight: 10 }}
              />
            }
          />
          <Text style={{ marginLeft: 10, color: "#000", fontSize: 18 }}>
            Amount
          </Text>
          <Input
            placeholder="Enter Amount"
            placeholderTextColor="#000"
            inputStyle={{ color: "#000" }}
            onChangeText={setAmount}
            leftIcon={
              <Icon
                name="id-card"
                type="font-awesome"
                color="#000"
                iconStyle={{ marginRight: 10 }}
              />
            }
          />
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                fare > amount ? setRight(false) : fare < amount ? (setMore(amount - fare), setR(true)): setRight(true);
                setModalVisible(true);
              }}
              style={{
                backgroundColor: "green",
                padding: 10,
                borderRadius: 5,
                width: 130,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 20, color: "#fff" }}>
                <Icon
                  name="ticket"
                  type="font-awesome"
                  color="#fff"
                  iconStyle={{ marginRight: 10 }}
                />
                Pay
              </Text>
            </TouchableOpacity>
          </View>
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
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 24,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
