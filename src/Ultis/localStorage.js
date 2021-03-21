export const setUSerToLocaStorage = user => {
  const userJson = JSON.stringify(user)

  localStorage.setItem( 'user', userJson)
}

export const getUserFormLocalStorage = () => {
  const user = localStorage.getItem('user')
  const userObj = JSON.parse(user)

  return userObj
}
