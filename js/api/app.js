function displayCard(response){
    let display = document.getElementById("display")
    display.innerHTML = ""
    for (let i = 0; i < response.length; i++) {
        let divContent = document.createElement("div");
        let divContent2 = document.createElement("div");
        let image = document.createElement("img");
        let name = document.createElement("p");
        let source = (response[i]?.flags?.png ? response[i].flags.png : "");
        name.innerHTML = (response[i]?.name?.common ? response[i].name.common : "Error");
        image.width = 250;
        image.height = 200;
        image.src = source;
        image.style.margin = "5px";
        divContent2.appendChild(image);
        divContent2.appendChild(name);
        divContent.appendChild(divContent2);
        display.appendChild(divContent);

        divContent2.style.textAlign = "center";
        divContent2.style.fontSize = "30px";

        function showDetailss() {
            console.log("hi")
            let imageDisplay = document.getElementById("imgg");
            let contentDisplay = document.getElementById("content");
            imageDisplay.src = source;
            contentDisplay.innerHTML = JSON.stringify(response[i].flags.alt);
            openPopup();
        }
        image.onclick = () => {
            showDetailss();
        }


        

    }
}
export const submitData = async () => {
    try {
        let responseData = await fetch("https://restcountries.com/v3.1/all")
        let response = await responseData.json()
        displayCard(response)
        return response

    } catch (error) {
        console.log(error)
    }
}
document.getElementById("myForm").addEventListener("submit", (event) => {
    event.preventDefault();
    submitData();
})

window.addEventListener("input", (event) => {
    if (event.target == search) {
        displayUsers();
    }
})



let popup1 = document.getElementById("closeIcon")
popup1.addEventListener("click", () => {
    closePopup();
})

let popup = document.getElementById("popup");
let popupbg = document.getElementById("popupbg");
export const openPopup = () => {
    popup.style.display = "block";
    popupbg.style.display = "block";
}

export const closePopup = () => {
    let popup = document.getElementById("popup");
    let popupbg = document.getElementById("popupbg");
    popup.style.display = "none";
    popupbg.style.display = "none";

}
window.addEventListener("click", (event) => {
    if (event.target == popupbg) {
        closePopup();
    }
})
const displayUsers = async () => {
    let search = document.getElementById("search")

    let query = search.value;
    const payload = await submitData();
    let datadisplay = payload.filter((eventdata) => {
            if (eventdata.name.common.toLowerCase().includes(query.toLowerCase())) {
                return eventdata
            }
    })
    displayCard(datadisplay)

}