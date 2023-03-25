import axios from "axios";

axios.post('http://localhost:8080/api/chat-process', {})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
