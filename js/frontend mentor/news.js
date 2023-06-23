function checkemail(input) {
  const form=document.querySelector("form");
    var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    form.addEventListener("submit", (e) =>{
      
      e.preventDefault();
    
});
    if (input.value.match(pattern)) {
      
      const card_1 =document.querySelector(".card");
      const card_2 =document.querySelector(".card-2");
      card_1.classList.add("hide");
      card_2.classList.remove("hide");
      return true;
  
    } else {
      //alert("Invalid email address!");
      // document.form1.email()
      // return false;
      var mail=document.getElementById("email");
      var mis=document.getElementById("mistake");
      mail.style.color="red";
      mail.style.background="pink";
      mail.style.borderColor="red";
      mis.style.display="inline"
  
    } 
  
  }