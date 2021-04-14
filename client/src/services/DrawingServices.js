import Client from '.'

export const GetDrawings = async () => {
  try {
    const res = await Client.get('/drawings')
    console.log(res)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetUserDrawings = async (id) => {
  try {
    const res = await Client.get(`/auth/profile/${id}`)
    console.log(res)
    return res.data.drawings
  } catch (error) {
    throw error
  }
}

export const CreateDrawing = async (body) => {
  try {
    const res = await Client.post('/drawings', body)
    console.log(res)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteDrawing = async (id) => {
  try {
    await Client.delete(`/drawings/${id}`)
  } catch (error) {
    throw error
  }
}