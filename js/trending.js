const tendingGet = async () => {
  const found = await fetch(
    "https://api.giphy.com/v1/gifs/trending?api_key=9X8PEK1e7Oc9ohaKYgLxIMdmu5LuGGyY&limit=24&rating=G"
  )
    .then(response => {
      return response.json();
    })
    .catch(error => {
      return console.log('Error: '+ error);
    });
  return found;
};
const trendPaint = trendData => {
  const trendsContainer = document.getElementById("trends-container");
  const gif = document.createElement("img");
  trendsContainer.appendChild(gif);
  gif.setAttribute("src", trendData.images.fixed_height.webp);
};
const trending = async () => {
  const trendData = await tendingGet();
  let trendArray = await trendData.data;
  await trendArray.forEach(element => {
    trendPaint(element);
  });
};
trending();
