// A mock function to mimic making an async request for data
// async (2)
import axios from "axios";
const URL = "http://127.0.0.1:8000/token/"
const URLreg="http://127.0.0.1:8000/register/"

export function signIn(cred) {
  
  return new Promise((resolve) =>
    axios.post(URL,cred).then((res) => resolve({ data: res.data }))
      // localStorage.setItem('token', res.data.access)))
    
  );
}
// export function signOut() {
  
//   return new Promise((resolve) =>
//     axios.post(URL,{username: "eyal", password: "123"}).then((res) => resolve({ data: res.data }))
//   );
// }
export function signUp(cred) {
  
  return new Promise((resolve) =>
    axios.post(URLreg,cred).then((res) => resolve({ data: res.data }))
  );
}

