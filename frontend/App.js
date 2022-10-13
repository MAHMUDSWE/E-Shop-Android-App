import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ProductContainer from './screens/products/productContainer';
import HeaderBar from './shared/header';

export default function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <HeaderBar />
          <ProductContainer />
        </SafeAreaView>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  }
});
