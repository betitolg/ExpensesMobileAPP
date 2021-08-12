import { StyleSheet, Text, View } from 'react-native'

import React from 'react';

function Expenses() {
    return (
        <View styles={styles.expenses}>
            <Text>Expenses</Text>
        </View>
    )


   

}

const styles = StyleSheet.create({
    expenses:{
     padding: 50,
     backgroundColor: '#dedede',
     margin: 2,
     width: 50,
     maxWidth: '95%',
 }}
 );

export default Expenses;