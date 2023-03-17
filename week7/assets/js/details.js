let prodId = new URLSearchParams(window.location.search).get("prodId");
const PRODUCTS_URL = "https://striveschool-api.herokuapp.com/api/product/";

let rowToFill = document.querySelector("#maxContainer .row");

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
  prodDetail.innerHTML = `<div class="card mb-3 border-0" style="width: 100%">
  <div class="row g-0">
  <div class="col-md-4">
  <img src="${prodData.imageUrl}" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
  <div class="card-body">
  <h2 class="card-title">${prodData.name}</h2>
  <p class="card-text">${prodData.description}</p>
  <p class="card-text">
  <small class="text-muted">${prodData.brand}</small>
  </p>
  <p>Prezzo: ${prodData.price}$</p>
  </div></div></div></div>`;
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
