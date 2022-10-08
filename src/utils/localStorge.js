export const isUserLoggedIn = () => {
  if (localStorage.getItem("userData") && localStorage.getItem("accessToken"))
    return true;
  return false;
};

export const clearCredentials = () => {
  localStorage.removeItem("userData") && localStorage.removeItem("accessToken");
};

export const getAuthToken = () => {
  const token = localStorage.getItem("accessToken")
  if (token) {
    return "Bearer " + localStorage.getItem("accessToken");
  }
  console.warn('No Token Available');
  return null;
}

export const getUser = () => {
  return JSON.parse(localStorage.getItem("userData"));
}
