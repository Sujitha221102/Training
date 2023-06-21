let S_no=1;

export function insertData(loca){

  try{
  let table = document.getElementById("table");
  let row = table.insertRow(-1);
  let cell1 = row.insertCell(0);
  cell1.innerHTML = S_no;
  ++S_no;
  let cell2 = row.insertCell(1);
  cell2.innerHTML = loca;
  let cell3= row.insertCell(2)
  cell3.innerHTML = `<input type="button" value="show">`
  cell3.addEventListener("click",function(){
   
    const loader = (isLoading) => {
      let loaderData = document.getElementById("loader");
  if(isLoading) {
      loaderData.style.display = "block";
  }else{
      loaderData.style.display = "none";
  }
}
    
    try {
      
      const API_KEY = "c7a9299a3d8da1d910da08bcffb48a3b"
  
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${loca}&appid=${API_KEY}`
    loader(true)
      fetch(url).then(response => response.json()).then(response => {
        loader(false)
          if(response.cod == 200){
              let temperature = response.main.temp - 273.15
  
              let humidity = response.main.humidity
  
              let location = response.name

              showPopup(temperature, humidity, location)
  
          }else{
              alert("No Location found")
          }
  
      }).catch(error => {
        loader(false)
          alert(`API Error: ${error.message}`)
      });
  
  
  } catch (error) {
      alert(`weatherDetails Error: ${error.message}`)
  }
  });
  
  let cell4 =row.insertCell(3);
  cell4.innerHTML = `<input type="button" value="Delete">`
  cell4.addEventListener("click",function(){
  row.remove(cell1)
  updateSnum();
  });
  
  }catch(error){ 
  alert(`deleteData Error:${error.messsage}`)
}
} 
function updateSnum(){
  let rows=document.getElementsByTagName("tr")
  for(let i=1;i<rows.length;i++){
    let row =rows[i];
    let sCell=row.cells[0];
    sCell.innerHTML=i;
  }
  S_no=rows.length-1;
}

export const showPopup=(temperature,humidity,locationName)=> {
    
   let locations = document.getElementById("location")
   let temperatures = document.getElementById("temperature")
   let humidities = document.getElementById("humidity")
   
   locations .innerHTML = locationName
   temperatures.innerHTML = `Temperature: ${temperature.toFixed(2)}°C`
   humidities.innerHTML = `Humidity: ${humidity}%`
   openPopup();
}
 
export function openPopup(){
  popup.style.display = "block";
  // popupbg.style.display = "block"; 
  
}
export function closePopup(){
  popup.style.display = "none";
  // popupbg.style.display = "none";
  
}
document.addEventListener("click",myFunction);
    function myFunction() {
        popup.style.display="none";
    }

    