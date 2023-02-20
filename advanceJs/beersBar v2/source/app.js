const beersLink = document.getElementById("beersLink");
// console.log(beersLink);
const randomBeer = document.getElementById("randomBeer");
// console.log(randomBeer);
const next = document.getElementById("next");
const previous = document.getElementById("previous");

const beersContainer = document.getElementById("beersPage");
const banner = document.getElementById("banner");
const randomPage = document.getElementById("randomPage");
const moreInfoPage = document.getElementById("moreInfoPage");
const pagination = document.getElementById("pag");

const url = "https://api.punkapi.com/v2/beers";
const randomUrl = "https://api.punkapi.com/v2/beers/random";
let nextpage = page2;
let nextUrl = `${url}/${nextpage}`;
let previousLink;
let moreInfoLink = "";
let beers = [];
let randomB = [];

beersContainer.style.display = "none";
randomPage.style.display = "none";
moreInfoPage.style.display = "none";
pagination.style.display = "none";

const getBeers = async () => {
  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
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
    <a href="#" class="btn btn-primary" id = "btn">More info</a>

    </div>
    </div>
    </div>
    
    `;

    moreInfoLink = `${url}/${beer.id}`;
    // console.log(moreInfoLink);
  });
};

// const moreInfoData = async () => {
//   await fetch(moreInfoLink)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       moreInfo = data.map(
//         (x) =>
//           new BeersPage(
//             x.id,
//             x.name,
//             x.tagline,
//             x.image_url,
//             x.description,
//             x.first_brewed,
//             x.ibu,
//             x.abv,
//             x.food_pairing
//           )
//       );
//     });
// };

const createMoreInfoPage = () => {
  beers.forEach((beer, index) => {
    //   moreInfoPage.innerHTML = "";
    // console.log(beers, index);
    let i = index;
    moreInfoPage.innerHTML = `
          <div class="d-flex justify-content-evenly">
              <div class="container mt-4 ">
              <img src="${beers[i].image}" alt="some text" />
            </div>
            <div class="container mt-5">
              <ul class="list-group">
                  <h1>${beers[i].name}</h1>
                  <p>${beers[i].description}</p>
                <li class="list-group-item">${beers[i].tagline}</li>
                <li class="list-group-item">Brewed: ${beers[i].first_brewed}</li>
                <li class="list-group-item">Alcohol: ${beers[i].abv}%</li>
                <li class="list-group-item">Biternnes: ${beers[i].ibu} IBU</li>
                <h4 class ="mt-3 ms-3">Food pairing</h4>
                <li class="list-group-item">${beers[i].food_pairing}</li>
              </ul>
            </div>
          </div>`;
  });
};

const getRandomBeer = async () => {
  await fetch(randomUrl)
    .then((res) => res.json())
    .then((random) => {
      console.log(random);
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
  console.log(randomB);
};

const randomBeerPage = () => {
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

beersLink.addEventListener("click", function (e) {
  e.preventDefault();
  beersContainer.style.display = "inline-flex";
  pagination.style.display = "block";
  banner.style.display = "none";
  randomPage.style.display = "none";
  moreInfoPage.style.display = "none";
});

randomBeer.addEventListener("click", function (e) {
  e.preventDefault();
  beersContainer.style.display = "none";
  banner.style.display = "none";
  randomPage.style.display = "block";
  moreInfoPage.style.display = "none";
});

function BeersPage(
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

//init

(async () => {
  await getBeers();
  createBeersPage();
  await getRandomBeer();
  randomBeerPage();
  //   await moreInfoData();
  createMoreInfoPage();
})();
