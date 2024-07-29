import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  
  params: {
    
    
    
    maxResults: '50',
  },
  headers: {
    'x-rapidapi-key': 'cece1995d2mshc5f866ada27daa2p1c1494jsn659829165314',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.error("Error fetching data from API:", error);
    throw error;
  }
};
