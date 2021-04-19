import Client from '.'

export const Login = async (formData) => {
  try {
    const res = await Client.post(`/auth/login`, formData)
    localStorage.setItem('token', res.data.token)
    return res.data.payload
  } catch (error) {
    throw error
  }
}

export const DeleteProfile = async (id) => {
  try {
    await Client.delete(`/auth/profile/${id}`)
  } catch (error) {
    throw error
  }
}

export const UpdateProfile = async (id, body) => {
  try {
    await Client.put(`/auth/profile/${id}`, body)
  } catch (error) {
    throw error
  }
}

export const Verify = async () => {
  try {
    const res = await Client.get(`/auth/login`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const Register = async (formData) => {
  try {
    const res = await Client.post(`/auth/register`, formData)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetProfileData = async (id) => {
  try {
    const res = await Client.get(`/profile/info/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}