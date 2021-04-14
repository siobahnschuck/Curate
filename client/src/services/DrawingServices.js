import Client from '.'

export const GetDrawings = async () => {
  try {
    const res = await Client.get('/drawings')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetUserDrawings = async (id) => {
  try {
    const res = await Client.get(`/auth/profile/${id}`)
    return res.data.drawings
  } catch (error) {
    throw error
  }
}

export const CreateDrawing = async (body) => {
  try {
    const res = await Client.post('/drawings', body)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteDrawing = async (filename, id) => {
  try {
    await Client.delete(`/drawings/delete/${filename}/${id}`)
    await GetUserDrawings()
  } catch (error) {
    throw error
  }
}