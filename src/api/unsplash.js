import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 9805a0db851e4a2ce384dc78e3b623de3e52de456e502fc3af7639a11fcdcf2c"
  }
});
