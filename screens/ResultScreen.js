import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import QRCodeDisplay from '../components/QRCodeDisplay';
import Button from '../components/Button';

export default function ResultScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { scannedData } = route.params;

  return (
    <View style={styles.container}>
      <QRCodeDisplay data={scannedData} />
      <Button title="Scan Again" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
