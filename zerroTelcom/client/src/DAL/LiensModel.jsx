import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

let getLiens = () => {
  return new Promise((resolve, reject) => {
    axios.get("http://127.0.0.1:5000/lines/getlines").then(result => {
      console.log(result.data);
      if (result.data.error) {
        console.log(result.data.error);
        return resolve({ error: "" });
      } else if (result.data.success == "") {
        return resolve({ success: true, lines: result.data.lines });
      }
    });
  });
};

let DAL = { getLiens: getLiens };

export default DAL;
