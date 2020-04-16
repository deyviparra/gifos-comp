let inputSearch = document.getElementById("input-search");
let searchSuggestBox = document.querySelector(".search-suggest-container");
let buttonSearch = document.querySelector(".button-search");
inputSearch.onkeypress = async e => {
  const key = e.key;
  const found = await fetch(
    `https://api.giphy.com/v1/tags/related/${inputSearch.value}${key}?api_key=9X8PEK1e7Oc9ohaKYgLxIMdmu5LuGGyY&limit=3&rating=G`
  )
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      document.querySelector(".suggest1").innerHTML = data.data[0].name;
      document.querySelector(".suggest2").innerHTML = data.data[1].name;
      document.querySelector(".suggest3").innerHTML = data.data[2].name;
      return data;
    })
    .catch(error => {
      return error;
    });
  return found;
};
inputSearch.oninput = () => {
  searchSuggestBox.style.display = "flex";
  buttonSearch.classList.add("search-active")
};
inputSearch.onchange = () => {
  searchSuggestBox.style.display = "none";
  buttonSearch.classList.remove('search-active')
};
