import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Title } from './TItle';

export const Home = () => {
  return (
    <View style={styles.component}>
      <Title />
      <Text style={styles.homeText}>
        Experience your menu from a different reality
      </Text>

      <Text style={styles.instruction}>Start by Scanning a MENU QRCODE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    alignItems: 'center',
    backgroundColor: '#FDD2BF',
    flex: 1,
    justifyContent: 'center',
  },
  homeText: {
    fontWeight: 'bold',
    color: '#FF6B6B',
    padding: 30,
    textAlign: 'center',
    fontSize: 30,
  },
  instruction: {
    color: '#012443',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});
