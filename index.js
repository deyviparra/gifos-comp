//sección suggest

const suggest = async suggested => {
  const res = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=9X8PEK1e7Oc9ohaKYgLxIMdmu5LuGGyY&q=${suggested}&limit=10&offset=0&rating=G&lang=en`
  );
  const data = await res.json();
  return data;
};

const suggestpaint = async () => {
  const suggestTag = document.getElementsByClassName("suggest-tag");
  const suggestContainer = document.getElementsByClassName("suggest-gifbox");
  let suggestData = "";
  for (let i = 0; i < 4; i++) {
    let gif = document.createElement("img");
    suggestContainer[i].appendChild(gif);

    suggestData = await suggest(suggestTag[i].innerHTML);
    console.log(suggestData);
    gif.setAttribute("src", suggestData.data[0].images.preview_webp.url);
  }
};

suggestpaint();

//sección trending
const tendingGet = async () => {
  const res = await fetch(
    "https://api.giphy.com/v1/gifs/trending?api_key=9X8PEK1e7Oc9ohaKYgLxIMdmu5LuGGyY&limit=25&rating=G"
  );
  const data = await res.json();
  return data;
};
const trendPaint = trendData => {
  const trendsContainer = document.getElementById("trends-container");
  const gif = document.createElement("img");
  trendsContainer.appendChild(gif);
  gif.setAttribute("src", trendData.images.preview_webp.url);
};
const trending = async () => {
  const trendData = await tendingGet();
  let trendArray = await trendData.data;
  await trendArray.forEach(element => {
    trendPaint(element);
  });
};

trending();
