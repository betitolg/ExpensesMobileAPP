import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

const ExpenseDate = (props) => {
    return (
        <View>
            <Text>{props.date.getFullYear().toString()}</Text>
            <Text></Text>
            <Text></Text>

        </View>
    )
}
const styles = StyleSheet.create({

date:{
    
}

});
export default ExpenseDate
