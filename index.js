const modal = document.getElementById("modal-container");
const xhttp = new XMLHttpRequest();

function renderContent(apiName, apiImageURL) {
  let modalBody = modal.children[0].children[1];
  console.log(modalBody.innerHtml);
  modalBody.innerHTML = `<h2>Obrigado por utilizar a API "${apiName}" comigo!</h2><img class="api-response" src="${apiImageURL}" />`;
}

function openModal(button) {
  modal.style.display = 'flex';
  switch(button) {
    case 1:
      xhttp.onload = function() {
let obj = JSON.parse(this.responseText);
renderContent("CATAAS", 'https://cataas.com' + obj.url);
      };

      xhttp.open("GET", "https://cataas.com/cat?json=true");
      xhttp.send();
      break;
    case 2:
      xhttp.onload = function() {
let obj = JSON.parse(this.responseText);
renderContent("RandomFox", obj.image);
      };

      xhttp.open("GET", "https://randomfox.ca/floof/");
      xhttp.send();
      break;
    case 3:
      xhttp.onload = function() {
let obj = JSON.parse(this.responseText);
console.log(obj);
console.log(this.responseText);
renderContent("Shibe.online", obj[0]);
      };

      xhttp.open("GET", "http://shibe.online/api/shibes");
      xhttp.send();
      break;
    case 4:
      xhttp.onload = function() {
let obj = JSON.parse(this.responseText);
renderContent("RandomDog", obj.url);
      };

      xhttp.open("GET", "https://random.dog/woof.json");
      xhttp.send();
      break;
  }
}

function closeModal() {
  let modalBody = modal.children[0].children[1];
  modalBody.innerHTML = "";
  modal.style.display = 'none';
}