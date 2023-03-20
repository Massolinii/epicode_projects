const PRODUCTS_URL = "https://striveschool-api.herokuapp.com/api/product/";

let rowToFill = document.querySelector("#maxContainer .row");

/* Nasconde lo Spinner al caricamento */
const hideSpinner = () => {
  let spinnerEl = document.getElementById("spinner");
  spinnerEl.classList.add("d-none");
};

const getProducts = async function () {
  try {
    let response = await fetch(PRODUCTS_URL, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzZkNWY4MWI0MjAwMTM5YjI4MTgiLCJpYXQiOjE2NzkwNDYzNTgsImV4cCI6MTY4MDI1NTk1OH0.EqBKFRGf984_UZ9sfQfkWVXYQ_oRZ3bReBpFutHxaIY",
      },
    });
    console.log(response);
    if (response.ok) {
      let products = await response.json();
      hideSpinner();
      products.forEach((el) => {
        createCard(el.imageUrl, el.name, el.description, el.price, el._id, el.brand);
      });

      console.log(products);
    } else {
    }
  } catch (error) {
    console.log(error);
  }
};
getProducts();


/* Generazione delle Card */
let createCard = (prodImg, prodName, prodDesc, prodPrice, prodId, prodBrand) => {
  let newCol = document.createElement("div");
  newCol.classList.add("col-6", "col-md-4", "col-lg-3");
  newCol.innerHTML = `
    <div class="card mb-3 mx-auto">
      <img src="${prodImg}" class="card-img-top" alt="foto_${prodName}">
      <div class="card-body position-relative">
        <h5 class="card-title fs-5 mark">${prodName}</h5>
        <p class="card-text my-1">${prodDesc}</p>
        <p class="card-text my-1 text-muted">${prodBrand}</p>
        <p class="card-text my-1">${prodPrice} €</p>
        <div class="d-flex justify-content-between pt-3 ">
          <a href="./details.html?prodId=${prodId}" id="btnMore" class="btn btn-light border border-dark btn-sm">Scopri di più</a>
          <a href="./backoffice.html?prodId=${prodId}" id="btnModify" class="btn btn-secondary border btn-sm">Modifica</a>
        </div>
      </div>
    </div>`;
  rowToFill.classList.add("justify-content-between");
  rowToFill.appendChild(newCol);
};


/* AUTHORIZATION :
fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzZkNWY4MWI0MjAwMTM5YjI4MTgiLCJpYXQiOjE2NzkwNDYzNTgsImV4cCI6MTY4MDI1NTk1OH0.EqBKFRGf984_UZ9sfQfkWVXYQ_oRZ3bReBpFutHxaIY"
}
}) 
*/
