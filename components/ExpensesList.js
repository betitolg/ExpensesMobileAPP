import { FlatList, Text, View } from "react-native";

import ExpenseItem from "./ExpenseItem";
import React from "react";

const ExpensesList = (props) => {
  return (
    <View>
      <FlatList
        data={props.items}
        renderItem={(data) => <ExpenseItem title={data.item.title} amount={data.item.amount} date={data.item.date} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ExpensesList;
