import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Title = () => {
  return (
    <View style={styles.titleWrapper}>
      <Text style={styles.title}>MENU AR</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleWrapper: {
    width: 300,
    height: 300,
    backgroundColor: '#012443',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginBottom: 30,
  },
  title: {
    fontWeight: 'bold',
    color: '#B61919',
    fontSize: 50,
    fontStyle: 'italic',
  },
});
