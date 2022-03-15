import React from 'react';
import { TextInput as RNTextInput, View, StyleSheet } from 'react-native';
import { Entypo as Icon } from '@expo/vector-icons';

const validationColor = '#223e4b';
const style = StyleSheet.create({
    view:{
        flexDirection: 'row',
        alignItems: 'center',
        height: 48,
        borderRadius: 8,
        borderColor: validationColor,
        borderWidth: StyleSheet.hairlineWidth,
        padding: 8
    }
});

export default function TextInput({ icon, ...otherProps }) {
 
  return (
    <View style={style.view}>
      <View style={{ padding: 8 }}>
        <Icon name={icon} color={{validationColor}} size={16} />
      </View>
      <View style={{ flex: 1 }}>
        <RNTextInput
          underlineColorAndroid='transparent'
          placeholderTextColor='rgba(34, 62, 75, 0.7)'
          {...otherProps}
        />
      </View>
    </View>
  );
}