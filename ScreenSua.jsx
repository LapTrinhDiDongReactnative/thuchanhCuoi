import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
import { fetchData } from './redux/Actions'

const ScreenSua = (props) => {
  const { navigation, route } = props
  const { navigate, goBack } = navigation
  const [name, setName] = useState('')
  const { idK } = route.params
  const hamSua = async () => {
    try {
      const updated = {
        name: name,
      }
      await axios.put(
        `https://653f48f29e8bd3be29e029cd.mockapi.io/fake/${idK}`,
        updated
      )
      navigate('Screen1')
    } catch (error) {
      console.error('Error updating data:', error)
    }
  }
  return (
    <View>
      <Text>ScreenSua</Text>
      <TextInput
        onChangeText={(text) => {
          setName(text)
        }}
        style={{
          width: 400,
          height: 60,
          borderWidth: 1,
          backgroundColor: '#fff',
          borderRadius: 3,
          paddingLeft: 13,
        }}
        placeholder="Nhập name"
        placeholderTextColor="#111"
      />

      <TouchableOpacity
        onPress={hamSua}
        style={{
          height: 45,
          width: 200,
          backgroundColor: 'pink',
        }}
      >
        <Text>sUA</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ScreenSua

const styles = StyleSheet.create({})
