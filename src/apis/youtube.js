import axios from "axios";

const KEY = "AIzaSyB9Q7y17fTP705XldWG4EYAGQ3hcvsePls";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
