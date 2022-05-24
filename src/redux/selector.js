export const firstName = (state) => {
  return (state) => state.user.firstName
}

export const getToken = (state) => {
  return (state) => state.user.token
}
