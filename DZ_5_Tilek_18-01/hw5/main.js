const som = document.querySelector("#som"); 
const usd = document.querySelector("#usd");
const euro = document.querySelector('#euro') 

 
const handleConvert = (elem, target, target2) => { 
  elem.addEventListener("input", () => { 
    const request = new XMLHttpRequest();
    request.open("GET", "main.json");
    request.setRequestHeader("Content-type", "application/json"); 
    request.send(); 
    request.addEventListener("load", () => { 
      const response = JSON.parse(request.response); 
      if(elem === som){
        (target.value = (elem.value / response.usd).toFixed(2))
        (target2.value = (elem.value / response.euro).toFixed(2))
      }else if(elem === euro){
        (target.value = (elem.value * response.euro).toFixed(2))
        (target2.value = (elem.value * response.euro / response.usd).toFixed(2))
      }else if(elem === usd){
        (target.value = (elem.value * response.usd).toFixed(2)) 
        (target2.value = (elem.value * response.usd / response.euro).toFixed(2)) 
      }
        elem.value === "" ? (target.value = "") : null;
        elem.value === "" ? (target2.value = "") : null;
      });
  }); 
}; 
handleConvert(som, usd, euro); 
handleConvert(euro, som , usd)
handleConvert(usd, som, euro); 


