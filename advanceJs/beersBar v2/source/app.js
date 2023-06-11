//pages

//nav links

const beersLink = document.getElementById("beersLink");
const randomBeer = document.getElementById("randomBeer");

//page elements

const beersContainer = document.getElementById("beersPage");
const banner = document.getElementById("banner");
const randomPage = document.getElementById("randomPage");
const moreInfoPage = document.getElementById("moreInfoPage");

//data

const url = "https://api.punkapi.com/v2/beers";
const randomUrl = "https://api.punkapi.com/v2/beers/random";
// let moreInfoLink = "";
let beers = [];
let randomB = [];
let moreInfo = [];
//test

beersContainer.style.display = "none";
randomPage.style.display = "none";
moreInfoPage.style.display = "none";

//functions

const getBeers = async () => {
  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      beers = data.map(
        (beer) =>
          new BeersPage(
            beer.id,
            beer.name,
            beer.tagline,
            beer.image_url,
            beer.description,
            beer.first_brewed,
            beer.ibu,
            beer.abv,
            beer.food_pairing
          )
      );
      //   moreInfoLink = `${url}/${data.id}`;
      //   console.log(moreInfoLink);
    });
};

const createBeersPage = () => {
  beersContainer.innerHTML = "";
  beers.forEach((beer) => {
    beersContainer.innerHTML += `
        
        
        
        <div class = "col-12 col-md-6 col-lg-4 mt-4 mb-3">
        <div class="card">
        <h5 class="card-header">${beer.name}</h5>
        <div class="card-body">
        <img src="${beer.image}" class= "card-img-top mb-3" alt="..." height = "700px">
        <p class="card-text">
        ${beer.tagline}
        </p>
        <a class="btn btn-primary" id="moreInfoBtn" href="#" data-beer-id="${beer.id}">
  More details
</a>

        </div>
        </div>
        </div>

        `;
    // moreInfoLink = `${url}/${beer.id}`;
    // console.log(moreInfoLink);
  });
};

const moreInfoData = async (beerId) => {
  const url = `https://api.punkapi.com/v2/beers/${beerId}`;
  console.log(url);
  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      moreInfo = data.map(
        (x) =>
          new BeersPage(
            x.id,
            x.name,
            x.tagline,
            x.image_url,
            x.description,
            x.first_brewed,
            x.ibu,
            x.abv,
            x.food_pairing
          )
      );
    });
};

const createMoreInfoPage = (moreInfo) => {
  console.log(moreInfo);
  moreInfoPage.innerHTML = "";
  moreInfoPage.innerHTML = `
          <div class="d-flex justify-content-evenly">
              <div class="container mt-4 ">
              <img src="${moreInfo[0].image}" alt="some text" />
            </div>
            <div class="container mt-5">
              <ul class="list-group">
                  <h1>${moreInfo[0].name}</h1>
                  <p>${moreInfo[0].description}</p>
                <li class="list-group-item">${moreInfo[0].tagline}</li>
                <li class="list-group-item">Brewed: ${moreInfo[0].first_brewed}</li>
                <li class="list-group-item">Alcohol: ${moreInfo[0].abv}%</li>
                <li class="list-group-item">Biternnes: ${moreInfo[0].ibu} IBU</li>
                <h4 class ="mt-3 ms-3">Food pairing</h4>
                <li class="list-group-item">${moreInfo[0].food_pairing}</li>
              </ul>
            </div>
          </div>`;
};

const getRandomBeer = async () => {
  await fetch(randomUrl)
    .then((res) => res.json())
    .then((random) => {
      // console.log(random);
      randomB = random.map(
        (rb) =>
          new BeersPage(
            rb.id,
            rb.name,
            rb.tagline,
            rb.image_url,
            rb.description,
            rb.first_brewed,
            rb.ibu,
            rb.abv,
            rb.food_pairing
          )
      );
    });
  // console.log(randomB);
};

const randomBeerPage = () => {
  //   const name = randomB[0].name;
  //   console.log(name);
  randomPage.innerHTML = `
        <div class="d-flex justify-content-evenly">
            <div class="container mt-4 ">
            <img src="${randomB[0].image}" alt="some text" />
          </div>
          <div class="container mt-5">
            <ul class="list-group">
                <h1>${randomB[0].name}</h1>
                <p>${randomB[0].description}</p>
              <li class="list-group-item">${randomB[0].tagline}</li>
              <li class="list-group-item">Brewed: ${randomB[0].first_brewed}</li>
              <li class="list-group-item">Alcohol: ${randomB[0].abv}%</li>
              <li class="list-group-item">Biternnes: ${randomB[0].ibu} IBU</li>
              <h4 class ="mt-3 ms-3">Food pairing</h4>
              <li class="list-group-item">${randomB[0].food_pairing}</li>
            </ul>
          </div>
        </div>`;
};

//events

document.addEventListener("click", async (event) => {
  event.preventDefault();
  if (event.target.id === "moreInfoBtn") {
    const beerId = event.target.dataset.beerId;
    // console.log(beerId);
    moreInfoData(beerId);
    createMoreInfoPage(moreInfo);
    beersContainer.style.display = "none";
    banner.style.display = "none";
    randomPage.style.display = "none";
    moreInfoPage.style.display = "block";
  }
});

beersLink.addEventListener("click", function () {
  beersContainer.style.display = "inline-flex";
  banner.style.display = "none";
  randomPage.style.display = "none";
  moreInfoPage.style.display = "none";
});

randomBeer.addEventListener("click", function () {
  beersContainer.style.display = "none";
  banner.style.display = "none";
  randomPage.style.display = "block";
  moreInfoPage.style.display = "none";
});

// models
class BeersPage {
  constructor(
    id,
    name,
    tagline,
    image,
    description,
    first_brewed,
    ibu,
    abv,
    food_pairing
  ) {
    this.id = id;
    this.name = name;
    this.tagline = tagline;
    this.image = image;
    this.description = description;
    this.first_brewed = first_brewed;
    this.ibu = ibu;
    this.abv = abv;
    this.food_pairing = food_pairing;
  }
}

//init

(async () => {
  await getBeers();
  createBeersPage();
  await getRandomBeer();
  randomBeerPage();
  // await moreInfoData();
  // createMoreInfoPage();
})();
