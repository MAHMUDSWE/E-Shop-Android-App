import { NativeBaseProvider, extendTheme } from 'native-base';
import React from 'react';
import { LogBox } from 'react-native';
import { SafeAreaProvider, View } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import Main from './Navigators/Main';
import ProductContainer from './screens/products/productContainer';
import HeaderBar from './shared/header';

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
            <HeaderBar />
            <Main />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}


// export default function App() {
//   return (
//     <NativeBaseConfigProvider>

//       <NavigationContainer>
//       <HeaderBar />
//       <Main />
//     </NavigationContainer>
//     </NativeBaseConfigProvider>


//   //  <NavigationContainer>
//   //    <NativeBaseProvider>
//   //     <SafeAreaProvider>

//   //           <HeaderBar />
//   //           <Main />

//   //     </SafeAreaProvider>
//   //   </NativeBaseProvider>
//   //  </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',

//   }
// });

const newColorTheme = {
  brand: {
    900: '#5B8DF6',
    800: '#ffffff',
    700: '#cccccc',
  },
};

const theme = extendTheme({
  colors: newColorTheme,
});
