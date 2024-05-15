import { StatusBar, Image, StyleSheet, Platform, View, Text } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import { Colors } from '@/constants/Colors';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChatScreen from '../screens/ChatScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <StatusBar backgroundColor={Colors.primaryColor} />
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
    </Stack.Navigator>
      {/* <HomeScreen /> */}
    </NavigationContainer>


  );
}

{/* const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
}); */}
