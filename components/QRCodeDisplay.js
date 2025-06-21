import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import Button from './Button';

const QRCodeDisplay = ({ data }) => {
  const isUrl = data && (data.startsWith('http://') || data.startsWith('https://'));

  const handlePress = () => {
    if (isUrl) {
      Linking.openURL(data);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.dataText}>{data}</Text>
      {isUrl && <Button title="Open Link" onPress={handlePress} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    alignItems: 'center',
  },
  dataText: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default QRCodeDisplay;
