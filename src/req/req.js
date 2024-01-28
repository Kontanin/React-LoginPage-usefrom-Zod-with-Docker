import axios from 'axios';

async function doPostRequest(payload,path) {
  console.log(payload,"payload")
  try{
    let res = await axios.post(path, payload);
    var body = res.data;
    console.log(body,"body");
    return body
  }
catch(e){
  console.log(e,e?.response?.data,"tes")
  return false
}


}

export default doPostRequest
