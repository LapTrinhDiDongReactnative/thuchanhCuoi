import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Screen1 from './Screen1'
import { Provider } from 'react-redux'
import store from './redux/store'
import Screen2 from './Screen2'
import ScreenSua from './ScreenSua'

const App = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator
          initialRouteName="Screen1"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Screen1" component={Screen1} />
          <Stack.Screen name="Screen2" component={Screen2} />
          <Stack.Screen name="ScreenSua" component={ScreenSua} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
