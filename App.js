import React from "react";
import {View,Text} from 'react-native';

const viewStyles = {

};

const HelloWorldComponent = () => {
  return (
    <View style={{
      backgroundColor:'pink',
      flex:0.5,
      justifyContent:'center',
      alignItems:'center'
     }} > 
      <Text>Hello World</Text>
    </View>
  );
}

//Default export Sadece 1 tane olabilir..
export default HelloWorldComponent;

export const age = 25;

export const func = () => {

}

