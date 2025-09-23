
import type { GiphyResponse } from '../data/giphy.response';

const API_KEY = 'Ho6eV50dSTpQY2DjKKcBpcLgDWqimQCI';

const request = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

const createImg = (url:string): void => {
    const imgEl = document.createElement('img');
    imgEl.src = url;

    document.body.append( imgEl );
}

request
    .then( resp => resp.json())
    .then( ({ data }: GiphyResponse) => {

        const { images } = data;
        const { original } = images;
        const { url } = original;

        createImg(url);
    })
    .catch( err => console.log( err ))
