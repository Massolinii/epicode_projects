let prodId = new URLSearchParams(window.location.search).get("prodId");
const PRODUCTS_URL = "https://striveschool-api.herokuapp.com/api/product/";

let rowToFill = document.getElementById("here");
console.log(prodId);

const showDetails = async () => {
  let response = await fetch(PRODUCTS_URL + prodId, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzZkNWY4MWI0MjAwMTM5YjI4MTgiLCJpYXQiOjE2NzkwNDYzNTgsImV4cCI6MTY4MDI1NTk1OH0.EqBKFRGf984_UZ9sfQfkWVXYQ_oRZ3bReBpFutHxaIY",
    },
  });

  let prodData = await response.json();
  let prodDetail = document.createElement("div");

  prodDetail.classList.add("col-auto");
  prodDetail.innerHTML = `<div class="card mt-5 w-100 border-1 cardBorder">
  <div class="row g-0">
    <div class="col-8">
      <img src="${prodData.imageUrl}" class="imgDetails" alt="foto_${prodData.name}">
    </div>
    <div class="col-4 cardBackground">
      <div class="card-body">
        <p class="m-0 smallText mark">Nome</p>
        <h2 class="card-title mark">${prodData.name}</h2>
        <p class="m-0 smallText">Descrizione</p>
        <p class="card-text">${prodData.description}</p>
        <p class="m-0 smallText ">Brand</p>
        <div class="card-text">
          <p class="text-muted">${prodData.brand}</p>
        </div>
        <p class="m-0 smallText ">Prezzo</p>
        <p>Prezzo: ${prodData.price}$</p>
      </div>
    </div>
  </div>
</div>`;
  rowToFill.appendChild(prodDetail);
};

showDetails();

/* AUTHORIZATION :
fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzZkNWY4MWI0MjAwMTM5YjI4MTgiLCJpYXQiOjE2NzkwNDYzNTgsImV4cCI6MTY4MDI1NTk1OH0.EqBKFRGf984_UZ9sfQfkWVXYQ_oRZ3bReBpFutHxaIY"
}
}) 
*/
