import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import db from "../db/firestore";
import { Input, Icon, Card } from "react-native-elements";
import { DataTable } from "react-native-paper";

export default ({ navigation }) => {
  const [task1, setTask] = React.useState([]);

  React.useEffect(async() => {
    db.collection("Ticket").onSnapshot({
      next: (querySnapshot) => {
        const tasks = querySnapshot.docs.map((docSnapshot) => ({
          id: docSnapshot.id,
          source: docSnapshot.data().source,
          destination: docSnapshot.data().destination,
          date: docSnapshot.data().date,
          name: docSnapshot.data().name,
          cnic: docSnapshot.data().cnic,
        }));
        setTask(tasks);
      },
      error: (err) => console.log(err),
    });
  }, []);

  const deleteData = (id) => {
    db.collection("Ticket")
      .doc(id)
      .delete()
      .then((result) => console.log("Deleted"));
  };
  return (
    <View style={{ marginTop: 30 }}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title numeric>Passenger Name</DataTable.Title>
          <DataTable.Title numeric>Update</DataTable.Title>
          <DataTable.Title numeric>Delete</DataTable.Title>
        </DataTable.Header>

        {task1.map((task) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Ticket Detail", {
                item: {
                  source: task.source,
                  destination: task.destination,
                  date: task.date,
                  name: task.name,
                  cnic: task.cnic,
                },
              });
            }}
          >
            <DataTable.Row>
              <DataTable.Cell numeric>{task.name}</DataTable.Cell>
              <DataTable.Cell numeric>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Update Ticket", { item: task.id });
                  }}
                >
                  <Ionicons name="create-outline" size={24} color="black" />
                </TouchableOpacity>
              </DataTable.Cell>
              <DataTable.Cell numeric>
                <TouchableOpacity
                  onPress={() => {
                    deleteData(task.id);
                  }}
                >
                  <Ionicons name="trash" size={24} color="red" />
                </TouchableOpacity>
              </DataTable.Cell>
            </DataTable.Row>
          </TouchableOpacity>
        ))}
      </DataTable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
