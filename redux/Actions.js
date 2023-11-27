import axios from 'axios'
import { useDispatch } from 'react-redux'

export const fetchData = async () => {
  const dispatch = useDispatch()
  try {
    const response = await axios.get(
      'https://653f48f29e8bd3be29e029cd.mockapi.io/fake'
    )
    dispatch({ type: 'ACTION1', payload: response.data })
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
