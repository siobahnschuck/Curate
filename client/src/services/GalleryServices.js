import Client from '.'

export const GetAllGallery = async () => {
  try {
    const res = await Client.get('/gallery')
    return res.data
  } catch (error) {
    throw error
  }
}


export const GetUserGallery = async (id) => {
  try {
    const res = await Client.get(`/profile/${id}`)
    return res.data.galleries
  } catch (error) {
    throw error
  }
}

export const GetGalleryDrawings = async (id) => {
  try {
    const res = await Client.get(`/gallery/${id}`)
    return res.data.drawings
  } catch (error) {
    throw error
  }
}

export const CreateGallery = async (body) => {
  try {
    const res = await Client.post('/gallery', body)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteGallery = async (id) => {
  try {
    await Client.delete(`/gallery/${id}`)
  } catch (error) {
    throw error
  }
}

export const UpdateGallery = async (id) => {
  try {
    await Client.put(`/gallery/${id}`)
  } catch (error) {
    throw error
  }
}