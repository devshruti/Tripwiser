let container = document.getElementById("BestTours");

fetch("https://6398c193fe03352a94dd78c2.mockapi.io/place")
.then((responseObject) => {
    return responseObject.json();
  })
  .then((actualData) => {
    fetchedData = actualData.data;
    displayProducts(actualData.data)
  })
  .catch((error) => {
    console.log(error);
  })


function displayProducts(data){
    container.innerHTML = null;
    data.forEach((element) => {
   let card = document.createElement("div");

   let avatar = document.createElement("img");
   avatar.setAttribute("src",element.avatar);
  
   let description = document.createElement("h2");
   description.innerText = element.description;

   let rating = document.createElement("h3");
   rating.innerText = element.rating;

   let price = document.createElement("h3");
   price.innerText = element.price;
    
   card.append(avatar, description, rating, price)
   container.append(card);

    })
  };
