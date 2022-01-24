import {
  addItemToPage,
  clearInputs,
  clearInputForCredit,
  renderItemsList,
  getInputValues,
} from "./dom_util.js";

const submitButton = document.getElementById("submit_button");
const findButton = document.getElementById("find_button");
const cancelFindButton = document.getElementById("cancel_find_button");
const findInput = document.getElementById("find_input");
const findTotal = document.getElementById("find_total");
const sortButton = document.getElementById("sort_button")




let banks = [];

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  //destructurization
  const { name, clientNumber, creditNumber } = getInputValues();
  if(Number.isInteger(parseInt(creditNumber))){
    clearInputs();
    addItem({
      name, 
      clientNumber,
      creditNumber});
   }
    else {
    clearInputForCredit();
    alertNotNumerical();
  }

  
});

const addItem = ({ name, clientNumber, creditNumber}) => {
  const generatedId = uuid.v1();

  const newItem = {id: generatedId, name, clientNumber, creditNumber};

  banks.push(newItem);

  addItemToPage(newItem);

};

findButton.addEventListener("click", () => {
  const foundBanks = banks.filter(bank => bank.name.search(findInput.value) !== -1);

  renderItemsList(foundBanks);
});

sortButton.addEventListener("click", () => {
  const sortedBanks = banks.sort(compare);

  renderItemsList(sortedBanks);
});

cancelFindButton.addEventListener("click", () => {
  renderItemsList(banks);

  findInput.value = "";
});

findTotal.addEventListener("click", () =>{
  let credits = banks.map(bank => parseInt(bank.creditNumber));
  document.getElementById("demo").innerHTML = credits.reduce((total, amount) => parseInt(total) + parseInt(amount));
});
function compare(a, b) {
  if (a.clientNumber < b.clientNumber) return 1;
  if (b.clientNumber > a.clientNumber) return -1;
  return 0;
};

function alertNotNumerical(){
  alert("Enter some number in credit number field");
}


renderItemsList(banks);

