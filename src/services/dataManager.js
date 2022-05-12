import loginSucceed from '../redux/actions.js'

const serverBaseUrl = 'http://localhost:3001/api/v1'
/**
 * [async description]
 *
 * @param   {Object}  data  [data description]
 *
 * @return  {Promise.<Boolean|Object>} - false or {token: ""}
 */
async function loginSendData(data) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }
  const response = await fetch(serverBaseUrl + '/user/login', requestOptions)
  const dataJson = await response.json()
  if (dataJson.status === 200) {
    console.log(dataJson)
    return { token: dataJson.body.token }
  } else {
    return false
  }
}

export { loginSendData }
