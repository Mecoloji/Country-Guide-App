const searchBtn = document.getElementById("search-btn");
const countryInp = document.getElementById("country-inp");

searchBtn.addEventListener("click", () => {
  const countryName = countryInp.value;
  const finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  // console.log(finalURL);
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data[0]);
      // console.log(data[0].capital[0]);
      // console.log(data[0].flags.svg);
      // console.log(data[0].name.common);
      // console.log(data[0].continents[0]);
      // console.log(Object.keys(data[0].currencies)[0]);
      // console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
      // console.log(Object.values(data[0].languages).toString().split(",").join(", "));
      result.innerHTML = `

            <div>
              <img src="${data[0].flags.svg}"class="flag-img">
              <h2>${data[0].name.common}</h2>
            </div>

            <div class="wrapper">
                <div class="data-wrapper">
                    <h4><i class="fa-solid fa-file-signature"></i> Official Name:</h4>
                    <span>${data[0].name.official}</span>
                </div>
            </div>

            <div class="wrapper">
                <div class="data-wrapper">
                    <h4><i class="fa-solid fa-landmark-flag"></i> Capital:</h4>
                    <span>${data[0].capital[0]}</span>
                </div>
            </div>
            

            <div class="wrapper">
                <div class="data-wrapper">
                    <h4><i class="fa-solid fa-globe"></i> Continent:</h4>
                    <span>${data[0].continents[0]}</span>
                </div>
            </div>

            <div class="wrapper">
                <div class="data-wrapper">
                    <h4><i class="fa-solid fa-people-group"></i> Population:</h4>
                    <span>${[data[0].population].toLocaleString()}</span>
                </div>
            </div>

            <div class="wrapper">
                <div class="data-wrapper">
                    <h4><i class="fa-solid fa-wallet"></i> Currency:</h4>
                    <span>${
                      data[0].currencies[Object.keys(data[0].currencies)].name
                    } - ${Object.keys(data[0].currencies)[0]} - ${
        data[0].currencies[Object.keys(data[0].currencies)].symbol
      }</span>
                </div>
            </div>

            <div class="wrapper">
                <div class="data-wrapper">
                    <h4><i class="fa-solid fa-language"></i> Common Languages:</h4>
                    <span>${Object.values(data[0].languages)
                      .toString()
                      .split(",")
                      .join(", ")}
                    </span>
                </div>
            </div>
            
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4><i class="fa-solid fa-map-location-dot"></i> Maps:</h4>
                    <span><a href="${
                      data[0].maps.googleMaps
                    }"target="_blank rel="noopener noreferrer" ">${[
        data[0].name.common,
      ]}'s Location on the Map</a></span> 
                </div>
            </div>
        `;
    })
    .catch(() => {
      // It gives an error when the input is empty or the wrong country name is entered.
      if (countryName.length == 0) {
        result.innerHTML = `<h3>The input field cannot be empty.</h3>`;
      } else {
        result.innerHTML = `<h3>Please enter a valid country name.</h3>`;
      }
    });
});

countryInp.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("search-btn").click();
  }
});
