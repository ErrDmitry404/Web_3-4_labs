const nameInput = document.getElementById("name_input");
const clientNumberInput = document.getElementById("client_number_input");
const creditNumberInput = document.getElementById("credit_number_input");
const itemsContainer = document.getElementById("items_container");


export const getInputValues = () => {
  return {
    name: nameInput.value,
    clientNumber: clientNumberInput.value,
    creditNumber: creditNumberInput.value,
  };
};

export const clearInputs = () => {
  nameInput.value = "";
  clientNumberInput.value = "";
  creditNumberInput.value = "";
};

export const clearInputForCredit = () => {
  creditNumberInput.value = "";
};

const getItemId = (id) => `item-${id}`;

export const addItemToPage = ({ id, name, clientNumber, creditNumber }) => {
      itemsContainer.insertAdjacentHTML(
       "afterbegin",
       itemTemplate({ id, name, clientNumber, creditNumber })
     );  
    };


const itemTemplate = ({ id, name, clientNumber, creditNumber }) => `
<li id="${getItemId(id)}" class="card mb-3 item-card">
   <img
    src="./assets/bank_image.png"
    class="item-container__image card-img-top" alt="card">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">
    <div>${clientNumber}</div>
    <div>${creditNumber}</div>
    <button onclick="window.location.href='/edit.html'" type="submit" class="btn btn-dark btn-lg" id="edit_button">Edit</button>
    </p>
  </div>
</li>`;

export const renderItemsList = (items) => {
  itemsContainer.innerHTML = "";
  for (const item of storedItems) {
    addItemToPage(item);
  }
};

