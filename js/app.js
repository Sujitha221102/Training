import { insertData } from "./modules/insertData.js";
// import{openPopup,closePopup} from "./modules/openPopup.js"
// import {showPopup} from "./modules/popUp.js"
// import {/*loading,*/weatherDetails} from "./modules/weather.js"

let cityFormContainer = document.getElementById("cityForm");
let addDataContainer = document.getElementById("addData");
let popUpContainer = document.getElementById("popUp");
let loaderContainer = document.getElementById("loader");
// let popupbgContainer=document.getElementById("popupbg")

fetch("./components/cityForm.html")
  .then((response) => response.text())
  .then((html) => {
    cityFormContainer.innerHTML = html;
  });

fetch("./components/addData.html")
  .then((response) => response.text())
  .then((html) => {
    addDataContainer.innerHTML = html;
  });

fetch("./components/popUp.html")
  .then((response) => response.text())
  .then((html) => {
    popUpContainer.innerHTML = html;
  });

fetch("./components/loader.html")
  .then((response) => response.text())
  .then((html) => {
    loaderContainer.innerHTML = html;
  });

// fetch('./components/popupbg.html').then((response) => response.text())
// .then((html) => {
//     popupbgContainer.innerHTML = html
// })

var selectedRow = null;
document.getElementById("myForm");
document.addEventListener("submit", (event) => {
  try {
    event.preventDefault();

    let loca = document.getElementById("locationName").value;
    if(selectedRow==null){
      insertData(loca);
    }
    if((loca=="")&&(loca!=location)){
      alert("error");
    }
  } catch (error) {
    alert(`cityForm Error: ${error.message}`);
  }
  document.getElementById("myForm").reset();
});
