import { FlatList, StyleSheet, Text, View } from "react-native";

import ExpenseItem from "./ExpenseItem";
import React from "react";

const ExpensesList = (props) => {


  const OnDeleteItem =(id)=>{
   
props.OnDeleteItem(id);

  }
  return (
    <View style={styles.expensesList}>
      <FlatList
        data={props.items}
        renderItem={(data) => <ExpenseItem title={data.item.title} amount={data.item.amount} date={data.item.date} id={data.item.id} OnDeleteItem={OnDeleteItem}/>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  expensesList: {


  },
});
export default ExpensesList;
