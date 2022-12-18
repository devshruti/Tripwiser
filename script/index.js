let pictures = document.getElementById("NewYear");
// let fetchedData = [];
console.log("hey hahjakvb");
fetch("https://6398c193fe03352a94dd78c2.mockapi.io/images")
.then((responseObject) => {
    return responseObject.json();
  })
  .then((actualData) => { 
    console.log(actualData.data);
    // displayPlaces(actualData.data) 
    // testData(actualData.data)
  })
  .catch((error) => {
    console.log(error);
  })

// async function testData(){
// const responseObject = await fetch("https://6398c193fe03352a94dd78c2.mockapi.io/images")
// const data = await responseObject.json()
// data.forEach(obj => {
//   Object.entries(obj).forEach(([image,name]) => {
//     console.log(image+' '+name )

//   })
//   console.log('...............................................')
// });
// }
function displayPlaces(data){
     pictures.innerHTML = null;
    data.forEach(element => {
   let division = document.createElement("div");

   let image = document.createElement("img");
   image.setAttribute("src",element.image);
  
   let name = document.createElement("h2");
   name.innerText = element.name;
    
   division.append(image, name);
  //  console.log(division);
   pictures.append(division);

    })
  }



  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  myFunction();

  // let flag = 0;

  // function controller(x){
  //   flag = flag + x;
  //   slideshow(flag);
  // }

  // slideshow(flag);
   
  // function slideshow(num){
  //   let slides = document.getElementsByClassName("card");

  //   if(num == slides.length){
  //     flag = 0;
  //     num=0;
  //   }
  //   if(num < 0){ 
  //    flag = 0;
  //   }
    
  //   for(let y of slides){
  //     y.style.display = "none";
  //   }
  //   slides[num].style.display = "flex";
  // }
