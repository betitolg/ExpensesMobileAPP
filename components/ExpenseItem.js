import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import ExpenseDate from "./ExpenseDate";
import React from "react";

const ExpenseItem = (props) => {
  return (
    <View style={styles.expenseItem}>
      <View style={styles.expenseDataContainer}>
        <Text style={styles.expenseitem__description}>{props.title}</Text>
        <ExpenseDate date={props.date} />
        <Text style={styles.amount}>$ {props.amount}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonDetail}>
          <Text style={styles.textDetail}> Ver Detalle</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.butonDelete}>
          <Text style={styles.textDetail}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  expenseItem: {
    marginTop: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 15,
    backgroundColor: "#fff",
    color: "#dedede",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    width: "92%",
    height: 80,
    justifyContent: "space-between",
    flexDirection: "column",
  },
  expenseDataContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonDetail: {
    backgroundColor: "#b2d1b2",
    borderRadius: 5,
    textAlign: "center",
    height:26,
    width:100
  },
  textDetail: {
    textAlign: "center",
  },
  butonDelete: {
    backgroundColor: "#db8190",
    borderRadius: 5,
    textAlign: "center",
    height:26,
    width:100
  },
  buttonContainer: {
    alignContent: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  expenseitem__description: {
    textAlign: "center",
    marginLeft: 10,
  },
  amount: {
    borderColor: "#000",
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#000",
    color: "#000",
    width: "20%",
    height: "100%",
    textAlign: "center",
    marginRight: 10,
  },
});

export default ExpenseItem;
