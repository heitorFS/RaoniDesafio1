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
      fetch("https://cataas.com/cat?json=true").then((response) => {
        response.json().then((result) => {
          renderContent("CATAAS", 'https://cataas.com' + result.url);
          console.log(result)
        });
      });
      break;
    case 2:
      fetch("https://randomfox.ca/floof/").then((response) => {
        response.json().then((result) => {
          renderContent("RandomFox", result.image);
        });
      });
      break;
    case 3:
      fetch("http://shibe.online/api/shibes").then((response) => {
        response.json().then((result) => {
          renderContent("Shibe.online", result[0]);
          console.log(result)
        });
      });
      break;
    case 4:      
      fetch("https://random.dog/woof.json").then((response) => {
        response.json().then((result) => {
          renderContent("RandomDog", result.url);
          console.log(result)
        });
      });
      break;
  }
}

function closeModal() {
  let modalBody = modal.children[0].children[1];
  modalBody.innerHTML = "";
  modal.style.display = 'none';
}