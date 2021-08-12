import { StyleSheet, Text, View } from "react-native";

import Expenses from "./components/Expenses";
import React from "react";

const App = () => {

  const expenses_demo = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e5",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e6",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e7",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e8",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e9",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e10",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expenses App</Text>
      <Expenses items={expenses_demo}/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 25,
    backgroundColor: "#eaeaea",
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    width:'92%'
  }
});

export default App;
