import axios from "axios";

const KEY = "AIzaSyDJ8HL36g9TXHS95GtnldmvgmQeKQbOj9I";    //YoutubeAPI key
 
export default axios.create({                             // Creating the axios instance
  baseURL: "https://www.googleapis.com/youtube/v3",        
  params: {                                               
      part: 'snippet', 
      maxResults: 5,
      key: KEY
  }
});