import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

let Register = data => {
  return new Promise((resolve, reject) => {
    console.log(data);

    axios
      .post("http://127.0.0.1:5000/users/register", data)

      .then(result => {
        console.log(result.data);

        if (result.data.error) {
          return resolve({ error: result.data.error });
        } else if (result.data.success) {
          return resolve({ success: result.data.success });
        }
      })
      .catch(err => {
        console.log(err);
      });
  });
};

let Login = data => {
  return new Promise((resolve, reject) => {
    axios.post("http://127.0.0.1:5000/users/login", data).then(result => {
      console.log(result);

      if (result.data.error) {
        return resolve(false);
      } else if (result.data.success) {
        console.log(result.data.auth);

        cookies.set("auth", result.data.auth);
        return resolve(true);
      }
    });
  });
};

let DAL = {
  Register: Register,
  Login: Login
};

export default DAL;
