import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
import { fetchData } from './redux/Actions'

const Screen2 = (props) => {
  const { navigation, route } = props
  const { navigate, goBack } = navigation
  const [name, setName] = useState('')
  const handleAdd = async () => {
    const newData = {
      name: name,
    }

    try {
      await axios.post(
        'https://653f48f29e8bd3be29e029cd.mockapi.io/fake',
        newData
      )
      navigate('Screen1')
    } catch (error) {
      console.error('Error adding new entry:', error)
    }
  }
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Text>Screen2</Text>
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
        onPress={handleAdd}
        style={{
          height: 45,
          width: 200,
          backgroundColor: 'pink',
        }}
      >
        <Text>Thêm</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Screen2

const styles = StyleSheet.create({})
