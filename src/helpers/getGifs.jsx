export const getGifs = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=dA4djL66lIb6fP0gy4NTrBNcaKXl3rJk&q=${ category }&limit=5`
    const resp = await fetch( url );
    const { data } = await resp.json();
    const gifs = data.map( img => ({
        img: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs
}