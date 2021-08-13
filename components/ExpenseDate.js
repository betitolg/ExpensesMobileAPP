import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

const ExpenseDate = (props) => {
    const date = props.date.toLocaleDateString('es-ES',{month:'long'});
  

    return (
        <View style={styles.date}>
          
            <Text style={styles.dateItem}>{date}</Text>
           

        </View>
    )
}
const styles = StyleSheet.create({

date:{
    borderColor:'#000',
    borderWidth:2,
    borderRadius:12,
    backgroundColor:'#fce',
    width:80,
    height:23,
    textAlign:'center'
},
dateItem:{

textAlign:'center'

}

});
export default ExpenseDate
