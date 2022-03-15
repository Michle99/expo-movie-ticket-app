import React from 'react';
import { TouchableOpacity, Text,StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    touchOpacity: {
        borderRadius: 8,
        height: 50,
        width: 245,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e94832'
    },
    text:{
        fontSize: 18, 
        color: 'white', 
        textTransform: 'uppercase'
    }
});

export default function Button({ label, onPress }) {
  return (
    <TouchableOpacity
      style={styles.touchOpacity}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text
        style={styles.text}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}