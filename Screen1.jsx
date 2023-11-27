import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { fetchData } from './redux/Actions'

const Screen1 = (props) => {
  const [reload, setReload] = useState(false)
  const data = useSelector((state) => state.result)

  fetchData()

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData()
      setReload(!reload)
    }, 2000)
    return () => clearInterval(interval)
  })

  const deleteK = async (id) => {
    try {
      await axios.delete(
        `https://653f48f29e8bd3be29e029cd.mockapi.io/fake/${id}`
      )
    } catch (error) {
      console.error(error)
    }
  }

  const { navigation, route } = props
  const { navigate, goBack } = navigation
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Screen1</Text>
      {data.map((item, index) => (
        <View
          style={{
            height: 100,
            width: 300,
            backgroundColor: 'pink',
            marginTop: 10,
            flexDirection: 'row',
          }}
        >
          <Text key={index}>Name:{item.name}</Text>
          <TouchableOpacity
            style={{
              backgroundColor: 'yellow',
              height: 50,
              width: 50,
            }}
            onPress={() => navigate('Screen2')}
          >
            <Text>Add</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: 'blue',
              height: 50,
              width: 50,
            }}
            onPress={() => deleteK(item.id)}
          >
            <Text>Xóa</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: 'red',
              height: 50,
              width: 50,
            }}
            onPress={() =>
              navigate('ScreenSua', {
                idK: item.id,
              })
            }
          >
            <Text>Sửa</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  )
}

export default Screen1

const styles = StyleSheet.create({})
