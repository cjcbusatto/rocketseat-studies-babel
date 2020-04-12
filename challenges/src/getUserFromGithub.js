import axios from 'axios';

export default async function getUserFromGithub(user) {
    try {
      const response = await axios.get(`https://api.github.com/users/${user}`)
      console.log(response.data)
    } catch (err) {
      console.warn('Not a valid Github username')
    }
  }