import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screens/MapScreen';
import HikeEatsScreen from './screens/HikeEatsScreen';

// 1) Set Up Redux

export default function App() {
  
const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
        <Stack.Navigator>
          <Stack.Screen 
            name="HomeScreen" 
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen 
          name="MapScreen" 
          component={MapScreen}
          options={{
            headerShown: false,
          }}
        />
          <Stack.Screen 
          name="HikeEatsScreen" 
          component={HikeEatsScreen}
          options={{
            headerShown: false,
          }}
        />
        </Stack.Navigator>
        {/* <HomeScreen /> */}
        {/* <StatusBar style="auto" /> */}
        </SafeAreaProvider>
        </NavigationContainer>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});