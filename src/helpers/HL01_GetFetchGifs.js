//
// FETCH GIPHY
//
export const HL01_GetFetchGifs = async (category) => {
  //
  const wURL = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=wBU7I2BIV3XAmXvd1Ct1J7qi7xr4KHMP`;
  //
  const wResp = await fetch(wURL);
  //
  const { data } = await wResp.json();
  //
  const wArr_Gifs = data.map((xImg) => {
    return {
      id: xImg.id,
      title: xImg.title,
      url: xImg.images?.downsized_medium.url,
    };
  });
  // console.log(wArr_Gifs);
  // setImages(wArr_Gifs);

  return wArr_Gifs;
};
