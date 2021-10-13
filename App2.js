import React from "react";
import { View,StyleSheet } from "react-native";

const App =() => {

    const whiteBoxStyles = [
        styles.square,
        {
            backgroundColor:'white',
        }
    ];
    const greenBoxStyles = [
        styles.square,
        {
            backgroundColor:'green',
        }
    ];

    return (
        <View style={styles.container}>
            <View style={styles.square}></View>
            <View style={[
                styles.square,
                {
                    backgroundColor:'yellow'
                }
            ]}/>
            <View style={whiteBoxStyles}/>
            <View style={greenBoxStyles}/>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink',
        // width: 100,
        // height:200,
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems: 'center',
        padding:20,
    },
    square: {
        backgroundColor: 'lightblue',
        width: 20,
        height:20,
        justifyContent:'center',
        alignItems: 'center',
        borderColor:'grey',
        borderWidth: 2,
        borderRadius: 5,
        margin:10,
    },
});

export default App;