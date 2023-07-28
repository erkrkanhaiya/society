const CallApi = async (
  axios = null,
  method = null,
  url = null,
  dispatch = null,
  setter = null,
  reqData,
) => {
  try {
    if (method === 'get') {
      const { data } = await axios[method](`${url}`)
      if (dispatch) {
        dispatch(setter(data))
      }
      return data
    } else if (method === 'post') {
      const { data } = await axios[method](`${url}`, reqData)
      if (dispatch) {
        dispatch(setter(data))
      }
      return data
    }
  } catch (error) {
    return error
  } finally {
  }
}

export default CallApi
