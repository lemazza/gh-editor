const workingLocally = true
export const API_URL = (workingLocally) ? 'http://localhost:1800' : process.env.REACT_APP_API_URL;