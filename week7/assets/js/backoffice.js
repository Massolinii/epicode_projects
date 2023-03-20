const PRODUCTS_URL = "https://striveschool-api.herokuapp.com/api/product/";

let prodId = new URLSearchParams(window.location.search).get("prodId");

const backDel = async () => {
  if (confirm("Sei sicuro di voler eliminare il prodotto?")) {
    let response = await fetch(PRODUCTS_URL + prodId, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzZkNWY4MWI0MjAwMTM5YjI4MTgiLCJpYXQiOjE2NzkwNDYzNTgsImV4cCI6MTY4MDI1NTk1OH0.EqBKFRGf984_UZ9sfQfkWVXYQ_oRZ3bReBpFutHxaIY",
        "Content-Type": "application/json"
      },
    });
    if (response.ok) {
      alert("Hai eliminato il prodotto.");
      window.location.replace("./index.html"); // Reindirizza a index.html
    } else {
      alert("ERRORE: Non è stato possibile eliminare il prodotto");
    }
  }
};

if (prodId) {
  fetch(PRODUCTS_URL + prodId, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzZkNWY4MWI0MjAwMTM5YjI4MTgiLCJpYXQiOjE2NzkwNDYzNTgsImV4cCI6MTY4MDI1NTk1OH0.EqBKFRGf984_UZ9sfQfkWVXYQ_oRZ3bReBpFutHxaIY",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return new Error("Error!");
      }
    })
    .then((prodData) => {
      console.log(prodData);

      document.getElementById("prodName").value = prodData.name;
      document.getElementById("prodImg").value = prodData.imageUrl;
      document.getElementById("prodBrand").value = prodData.brand;
      document.getElementById("prodDesc").value = prodData.description;
      document.getElementById("prodPrice").value = prodData.price;

      // SE IL PRODOTTO E' GIA ESISTENTE, MODIFICA IL TESTO AGGIUNGI PRODOTTO CON MODIFICA PRODOTTO
      document.getElementById("submit").innerHTML = "Modifica Prodotto";
      document.getElementById("modificaProdotti").innerHTML = "Modifica Prodotto esistente";
      
      let deleteBtn = document.getElementById("delete");
      deleteBtn.classList.remove("invisible");
      deleteBtn.addEventListener("click", backDel);
    })
    .catch((error) => {
      console.log(error);
    });
}

const queryProd = async function (newProd) {
  try {
    let url = prodId ? PRODUCTS_URL + prodId : PRODUCTS_URL;

    let response = await fetch(url, {
      method: prodId ? "PUT" : "POST",
      body: JSON.stringify(newProd),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzZkNWY4MWI0MjAwMTM5YjI4MTgiLCJpYXQiOjE2NzkwNDYzNTgsImV4cCI6MTY4MDI1NTk1OH0.EqBKFRGf984_UZ9sfQfkWVXYQ_oRZ3bReBpFutHxaIY",
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      alert("Hai aggiunto il prodotto con successo.");
    } else {
      alert("Non è stato possibile aggiungere il prodotto.");
    }
  } catch (error) {
    console.log(error);
  }
};

const formReference = document.getElementsByTagName("form")[0];
formReference.addEventListener("submit", (e) => {
  e.preventDefault();
  let newProd = {
    name: document.getElementById("prodName").value,
    imageUrl: document.getElementById("prodImg").value,
    description: document.getElementById("prodDesc").value,
    brand: document.getElementById("prodBrand").value,
    price: document.getElementById("prodPrice").value,
  };
  queryProd(newProd);
});

const resetForm = () => {
  if (confirm("Sei sicuro di voler cancellare tutti i dati inseriti nel form?")) {
    document.getElementById("prodName").value = "";
    document.getElementById("prodDesc").value = "";
    document.getElementById("prodBrand").value = "";
    document.getElementById("prodImg").value = "";
    document.getElementById("prodPrice").value = "";
  }
};

document.getElementById("reset").addEventListener("click", resetForm);


/* AUTHORIZATION :
fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzZkNWY4MWI0MjAwMTM5YjI4MTgiLCJpYXQiOjE2NzkwNDYzNTgsImV4cCI6MTY4MDI1NTk1OH0.EqBKFRGf984_UZ9sfQfkWVXYQ_oRZ3bReBpFutHxaIY"
}
}) 
*/
