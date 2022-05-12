const loginSucceed = (token) => ({
  type: 'loginSucceed',
  payload: { token: token },
})

export default loginSucceed
