import type { GiphyResponse } from '../data/giphy.response';

const API_KEY = 'Ho6eV50dSTpQY2DjKKcBpcLgDWqimQCI';



const getGif = async () => {

    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
    const data:GiphyResponse = await response.json();

    console.log(data);
    
    
}

getGif();