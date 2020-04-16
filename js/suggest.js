const suggest = async suggested => {
  const found = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=9X8PEK1e7Oc9ohaKYgLxIMdmu5LuGGyY&q=${suggested}&limit=10&offset=0&rating=G&lang=en`
  )
    .then(response => {
      return response.json();
    })
    .catch(error => {
      return console.log('Error: '+ error);
    });
  return found; 
};
const suggestPaint = async () => {
  const suggestTag = document.getElementsByClassName("suggest-tag");
  const suggestContainer = document.getElementsByClassName("suggest-gifbox");
  let suggestData;
  for (let i = 0; i < 4; i++) {
    let gif = document.createElement("img");
    suggestContainer[i].appendChild(gif);
    suggestData = await suggest(suggestTag[i].innerHTML);
    gif.setAttribute("src", suggestData.data[0].images.fixed_height.webp);
  }
};
suggestPaint();
