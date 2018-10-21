/*
player1 = 0; player2 = 1; player3 = 2; player4 = 3
console.log([playerList[playerTurn].name]); //playerName
console.log(playerList[playerTurn].location); //playerLocation
console.log(boardSpaceList[playerList[playerTurn].location].name); //Name of player location
*/

//WORKING ON CHANCE CARDS
//updatePlayerDisplay function results need to look pretty. later.

let playerTurn = 0;
let duration = 0;
let total;
let moving;
let amount;
let newLine = '\r\n';
let chanceCards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

rollButton = document.getElementById('rollButton');
yesButton = document.getElementById('yesButton');
noButton = document.getElementById('noButton');
confirmButton = document.getElementById('confirmButton');
onGoConfirmButton = document.getElementById('onGoConfirmButton');
payRentButton = document.getElementById('payRentButton');
payUtilityButton = document.getElementById('payUtilityButton');
payFlatTaxButton = document.getElementById('payFlatTaxButton');
payRateTaxButton = document.getElementById('payRateTaxButton');
testDisplay = document.getElementById('testDisplay');

yesButton.onclick = function() {
  yes();
};

noButton.onclick = function() {
  endTurn();
};

confirmButton.onclick = function() {
  endTurn();
};

onGoConfirmButton.onclick = function() {
  onGoConfirmButton.style.display = 'none';
  updatePlayerDisplay();
  turnAction();
};

payRentButton.onclick = function() {
  payPropertyRent();
};

payUtilityButton.onclick = function() {
  payUtility();
};

payFlatTaxButton.onclick = function() {
  payTax(true);
};

payRateTaxButton.onclick = function() {
  payTax(false);
};

//MAIN
//GAME
//FUNCTION
//STARTS
//HERE
function start() {
  //Gets player info
  playerCount = getPlayerCount();
  getPlayerNames(playerCount);
  showPlayerDisplay(playerCount);
  updatePlayerDisplay();

  //show player pieces on go
  for(let i=0; i<playerCount; i++) {
    pieceDisplayList[playerList[i].location][i].style.display = 'inline-block';
  };

  testDisplay.textContent = `${playerList[0].name}'s turn. Click to roll!`;
};

window.onload = start();

rollButton.onclick = function() {
  turn();
};

//Initiates turn on Roll button click
function turn() {
  rollButton.style.display = 'none';
  name = playerList[playerTurn].name;

  roll1 = roll();
  roll2 = roll();
  total = roll1 + roll2;
  //total = 7;

  testDisplay.textContent = `${name} rolled a ${roll1} and a ${roll2}, moving ${total} spaces.`;

  moving = setInterval(move1, 500);

  //Place at end of turn
  //playerTurn = nextTurn(playerTurn);
};

//moves player piece 1 space
function move1() {
  let onGo;

  //hides player piece
  pieceDisplayList[playerList[playerTurn].location][playerTurn].style.display = 'none';

  //changes player forward 1
  playerList[playerTurn].location += 1;

  //If landed on go
  if(playerList[playerTurn].location == 40) {
    playerList[playerTurn].location = 0;
    onGo = true;
  }

  //shows player piece in new space
  pieceDisplayList[playerList[playerTurn].location][playerTurn].style.display = 'inline-block';

  //Check if at destination based on dice roll
  duration++;
  if(duration == total) {
    clearInterval(moving);
    duration = 0;
    //if landed on go show message + add money + show confirm button
    if(onGo == true) {
      testDisplay.textContent += newLine + newLine + `${playerList[playerTurn].name} has collected $200 for landing on GO.`;
      gainMoney(200, playerTurn);
      onGoConfirmButton.style.display = 'block';
      onGo = false;
      return;
    };
    updatePlayerDisplay();
    turnAction();
  };
  //show message + add money if passing go
  if(onGo == true) {
    testDisplay.textContent += newLine + newLine + `${playerList[playerTurn].name} has collected $200 for passing GO.`;
    gainMoney(200, playerTurn);
  };
};

//move to specific location
function moveSpecific(destination) {
  let onGo;
  //hides player piece
  pieceDisplayList[playerList[playerTurn].location][playerTurn].style.display = 'none';
  //changes player forward 1
  playerList[playerTurn].location += 1;
  //If landed on go
  if(playerList[playerTurn].location == 40) {
    playerList[playerTurn].location = 0;
    onGo = true;
  }
  //shows player piece in new space
  pieceDisplayList[playerList[playerTurn].location][playerTurn].style.display = 'inline-block';

  //Check if at destination
  if(playerList[playerTurn].location == destination) {
    clearInterval(moving);
    duration = 0;
    //if landed on go show message + add money + show confirm button
    if(onGo == true) {
      testDisplay.textContent += newLine + newLine + `${playerList[playerTurn].name} has collected $200 for landing on GO.`;
      gainMoney(200, playerTurn);
      onGoConfirmButton.style.display = 'block';
      onGo = false;
      return;
    };
    updatePlayerDisplay();
    turnAction();
  };
  //show message + add money if passing go
  if(onGo == true) {
    testDisplay.textContent += newLine + newLine + `${playerList[playerTurn].name} has collected $200 for passing GO.`;
    gainMoney(200, playerTurn);
  };
};

//turn action
function turnAction() {
  let space = boardSpaceList[playerList[playerTurn].location];
  let spaceOwner = boardSpaceList[playerList[playerTurn].location].owner;

  //if landing on tax space
  if(space.type == 'tax') {
    getTaxAmount();
  } else if(space.type == 'go') {
    endTurn();
  } else if(space.type == 'chance') {
    chanceCard();
    endTurn();
  } else if(space.type == 'chest') {
    chestCard();
    endTurn();
  } else if(spaceOwner == undefined) {
    endTurn();
  }
  //purchase prompt if property currently owned by the bank
  else if(spaceOwner == 'bank') {
    testDisplay.textContent += newLine + newLine + `${boardSpaceList[playerList[playerTurn].location].name} is owned by the bank.` + newLine + `Would you like to purchase it for $${boardSpaceList[playerList[playerTurn].location].price}?`;
    yesButton.style.display = 'inline-block';
    noButton.style.display = 'inline-block';
  }
  //if owned by another player determine rent type
  else if(spaceOwner != 'bank' && spaceOwner != playerTurn) {
    if(space.type == 'property') {
      getRentProperty(spaceOwner, space);
    } else if(space.type == 'rr') {
      getRentRR(spaceOwner, space);
    } else if(space.type = 'utility') {
      getRentUtility(spaceOwner);
    };
  }
  //end turn if nothing happens
  //change later for other spaces
  else {
    endTurn();
  };
};

//draw chance card
function chanceCard() {
  //chooses random position from chance card array
  let cardPosition = chanceCards[Math.floor(Math.random() * chanceCards.length)];
  //accesses card at chosen position
  let card = chanceCards[cardPosition];
  //removes chosen card from array
  chanceCards.splice(cardPosition, 1);

  /*
  card = 1;
  if(card == 1) {
    moving = setInterval(function() {
      moveSpecific(0);
    }, 500);
  };
  */
  
  console.log(chanceCards);
  console.log(cardPosition, card);
};

//draw chest card
function chestCard() {
  console.log('chest card');
};

//determine and show tax owned
function getTaxAmount() {
  if(playerList[playerTurn].location == 4) {
    testDisplay.textContent += newLine + newLine +
    `You must pay an income tax of 10% or $200.`;
    payFlatTaxButton.textContent = 'Pay $200';
    payRateTaxButton.textContent = 'Pay 10%';
    payFlatTaxButton.style = 'block';
    payRateTaxButton.style = 'block';
  } else if(playerList[playerTurn].location == 38) {
    testDisplay.textContent += newLine + newLine +
    `You must pay a luxury tax of $75.`;
    payFlatTaxButton.textContent = 'Pay Tax';
    payFlatTaxButton.style = 'block';
  };
};

//make tax payment
function payTax(flat) {
  payRateTaxButton.style.display = 'none';
  payFlatTaxButton.style.display = 'none';
  let playerMoney = playerList[playerTurn].money;
  if(flat == true) {
    if(playerList[playerTurn].location == 4) {
      amount = 200;
    } else {
      amount = 75;
    };
    testDisplay.textContent = `${playerList[playerTurn].name} has paid $${amount} in taxes.`;
    confirmButton.style.display = 'block';
  } else {
    //amount = 10% of player money
    amount = Math.floor((10 / 100) * playerMoney);
    testDisplay.textContent = `${playerList[playerTurn].name} has paid $${amount} in taxes.`;
    confirmButton.style.display = 'block';
  };

  if(playerList[playerTurn].money >= amount) {
    loseMoney(amount, playerTurn);
  } else {
    console.log('You broke bitch');
  };
  updatePlayerDisplay();
};

//determine and show amount of rent owed for normal property
function getRentProperty(spaceOwner, space) {
  //determine rent based on housed + hotels
  if(space.houses == 0 && space.hotel == false) {
    amount = 0;
  } else if(space.houses == 1) {
    amount = 1;
  } else if(space.houses == 2) {
    amount = 2;
  } else if(space.houses == 3) {
    amount = 3;
  } else if(space.houses == 4) {
    amount = 4;
  } else if(space.hotel == true) {
    amount = 5;
  };
  //show amount owed and to who
  testDisplay.textContent += newLine + newLine + `${boardSpaceList[playerList[playerTurn].location].name} is owned by ${playerList[spaceOwner].name}.` + newLine + `${playerList[playerTurn].name} must pay ${playerList[spaceOwner].name} $${space.rent[amount]} for rent.`;
  //pay rent when player clicks button
  payRentButton.style.display = 'block';
};

//determine and show amount of rent owed for railroads
function getRentRR(spaceOwner, space) {
  //determines how many railroads the owner has
  amount = -1;
  for(let i = 0; i<railroads.length; i++) {
    if(railroads[i].owner == spaceOwner) {
      amount++;
    };
  };
  //show amount owed and to who based on # of rr's owned
  let other = amount + 1;
  if(amount == 0) {
    testDisplay.textContent += newLine + newLine + `${boardSpaceList[playerList[playerTurn].location].name} is owned by ${playerList[spaceOwner].name}.` + newLine + `You must pay ${playerList[spaceOwner].name} $${space.rent[amount]} in rent.`;
  } else {
    testDisplay.textContent += newLine + newLine + `${boardSpaceList[playerList[playerTurn].location].name} and ${other} other railroads` + newLine + `are owned by ${playerList[spaceOwner].name}.` + newLine + `You must pay ${playerList[spaceOwner].name} $${space.rent[amount]} in rent.`;
  };
  //pay rent when player clicks button
  payRentButton.style.display = 'block';
};

//determine and show amount of rent owed for utilities
function getRentUtility(spaceOwner) {
  if(playerList[spaceOwner].property.includes(12) && playerList[spaceOwner].property.includes(28)) {
    amount = total * 10;
    testDisplay.textContent += newLine + newLine + `Both utilities are owned by ${playerList[spaceOwner].name}.` + newLine + `You must pay ${playerList[spaceOwner].name} $${amount} for utilities.`;
    payUtilityButton.textContent = 'Pay Utilities';
  } else {
    amount = total * 4;
    testDisplay.textContent += newLine + newLine + `${boardSpaceList[playerList[playerTurn].location].name} is owned by ${playerList[spaceOwner].name}.` + newLine + `You must pay ${playerList[spaceOwner].name} $${amount} for utility.`;
    payUtilityButton.textContent = 'Pay Utility';
  };
  payUtilityButton.style.display = 'block';
};

//make rent payment
function payPropertyRent() {
  payRentButton.style.display = 'none';
  let space = boardSpaceList[playerList[playerTurn].location];
  let spaceOwner = boardSpaceList[playerList[playerTurn].location].owner;
  //money exchange
  if(playerList[playerTurn].money >= space.rent[amount]) {
    gainMoney(space.rent[amount], spaceOwner);
    loseMoney(space.rent[amount], playerTurn);
    testDisplay.textContent = `${playerList[playerTurn].name} has paid ${playerList[spaceOwner].name} $${space.rent[amount]} for rent.`;
    confirmButton.style.display = 'block';
  } else {
    //Ask if rent payer would like to mortgage properties or sell back houses etc
    console.log('You broke bitch');
  };
};

//make utility payment
function payUtility() {
  payUtilityButton.style.display = 'none';
  let spaceOwner = boardSpaceList[playerList[playerTurn].location].owner;
  //money exchange
  if(playerList[playerTurn].money >= amount) {
    gainMoney(amount, spaceOwner);
    loseMoney(amount, playerTurn);
    playerList[spaceOwner].money += amount;
    playerList[playerTurn].money -= amount;
    testDisplay.textContent = `${playerList[playerTurn].name} has paid ${playerList[spaceOwner].name} $${amount} for utilities.`;
    confirmButton.style.display = 'block';
  } else {
    //Ask if rent payer would like to mortgage properties or sell back houses etc
    console.log('You broke bitch');
  };
  updatePlayerDisplay();
};

//buys property on yes click
function yes() {
  yesButton.style.display = 'none';
  noButton.style.display = 'none';

  let property = boardSpaceList[playerList[playerTurn].location];
  let propertyPrice = boardSpaceList[playerList[playerTurn].location].price;

  //if player has enough money
  if(playerList[playerTurn].money >= propertyPrice) {
    loseMoney(propertyPrice, playerTurn);

    //change property owner to player
    boardSpaceList[playerList[playerTurn].location].owner = playerTurn;

    //add property to players owned property list with integer representing board space location
    playerList[playerTurn].property.push(playerList[playerTurn].location);
    testDisplay.textContent =  `${playerList[playerTurn].name} has bought ${boardSpaceList[playerList[playerTurn].location].name} for $${propertyPrice}.`;

  } else {
    testDisplay.textContent = 'You have insufficient funds!';
  };

  updatePlayerDisplay();
  confirmButton.style.display = 'block';
};

//add to player money
function gainMoney(amount, player) {
  playerList[player].money += amount;
  //change money display color to green for 1.5sec
  moneyColor(player, 'green');
  setTimeout(function() {
    moneyColor(player)
  }, 1500);

  updatePlayerDisplay();
};

//remove from player money
function loseMoney(amount, player) {
  playerList[player].money -= amount;
  //change money display color to red for 1.5sec
  moneyColor(player, 'red');
  setTimeout(function() {
    moneyColor(player)
  }, 1500);

  updatePlayerDisplay();
};

//change color of money display
function moneyColor(player, color) {
  if(!color) {
    moneyDisplayList[player].style.color = 'black';
  };
  moneyDisplayList[player].style.color = color;
};

//starts next player turn and resets display stuff
function endTurn() {
  playerTurn = nextTurn(playerTurn);
  yesButton.style.display = 'none';
  noButton.style.display = 'none';
  confirmButton.style.display = 'none';
  rollButton.style.display = 'block';
  testDisplay.textContent = `${playerList[playerTurn].name}'s turn. Click to roll!`;
};

//changes player turn
function nextTurn(playerTurn) {
  playerTurn += 1;
  if(playerTurn == playerCount) {
    playerTurn = 0;
  };
  rollButton.style.display = 'block';
  return playerTurn;
};

//roll 1 die
function roll() {
  number = Math.floor(Math.random() * 6) + 1;
  return number;
};

//Updates display of player information
function updatePlayerDisplay() {
  for(let i=0; i<playerCount; i++) {
    nameDisplayList[i].textContent = playerList[i].name + ' ' + boardSpaceList[playerList[i].location].name;
    moneyDisplayList[i].textContent = `$${playerList[i].money}`;

    //PLACEHOLDER PLACEHOLDER PLACEHOLDER make it look better after functionality is complete
    //iterates throught players owned property and displayes prop name
    propertyDisplayList[i].textContent = 'Properties owned: ';
    let prop;
    for(let j=0; j<playerList[i].property.length; j++) {
      prop = playerList[i].property[j];
      propertyDisplayList[i].textContent += ' ' + boardSpaceList[prop].name;
    }

    railroadDisplayList[i].textContent = `RailRoads Owned: ${playerList[i].railroad}`;
    utilityDisplayList[i].textContent = `Utilities Owned: ${playerList[i].utility}`;
  };
};

//Shows regular property info on hover of space
function showHoverInfo(space, type, color) {
  hoverInfo.style.display = 'block';

  if(type == 'normal') {
    hoverInfoLine1.style.lineHeight = '1.5em';
    hoverInfoLine3.style.lineHeight = "1.5em";
    hoverInfoLine5.style.lineHeight = '1.5em';
    infoColorBar.style.background = color;
    infoTitle.textContent = boardSpaceList[space].name;
    hoverInfoLine1.textContent = `RENT $${boardSpaceList[space].rent0}`
    hoverInfoLine2.textContent = `With 1 House $${boardSpaceList[space].rent1}`;
    hoverInfoLine3.textContent = `With 2 Houses $${boardSpaceList[space].rent2}`;
    hoverInfoLine4.textContent = `With 3 Houses $${boardSpaceList[space].rent3}`;
    hoverInfoLine5.textContent = `With 4 Houses $${boardSpaceList[space].rent4}`;
    hoverInfoLine6.textContent = `With HOTEL $${boardSpaceList[space].hotelRent}`;
    hoverInfoLine7.textContent = `Mortgage Value $${boardSpaceList[space].mortgage}`;
    hoverInfoLine8.textContent = `Houses cost $${boardSpaceList[space].houseCost}`;
    hoverInfoLine9.textContent = `Hotels, $${boardSpaceList[space].houseCost} plus 4 houses`;
  } else if(type == 'RR') {
    hoverInfoLine1.style.lineHeight = "4.0em";
    hoverInfoLine3.style.lineHeight = "1.5em";
    hoverInfoLine5.style.lineHeight = "4.0em";
    infoColorBar.style.background = color;
    infoTitle.textContent = boardSpaceList[space].name;
    hoverInfoLine1.textContent = 'Rent $25';
    hoverInfoLine2.textContent = "If 2 R.R.'s are owned $50";
    hoverInfoLine3.textContent = "If 3 R.R.'s are owned $100";
    hoverInfoLine4.textContent = "If 4 R.R.'s are owned $200";
    hoverInfoLine5.textContent = 'Mortgage Value $100';
    hoverInfoLine6.textContent = '';
    hoverInfoLine7.textContent = '';
    hoverInfoLine8.textContent = '';
    hoverInfoLine9.textContent = '';
  } else if(type == 'utility') {
    hoverInfoLine1.style.lineHeight = "1.5em";
    hoverInfoLine3.style.lineHeight = "4em";
    hoverInfoLine5.style.lineHeight = "1.5em";
    infoColorBar.style.background = color;
    infoTitle.textContent = boardSpaceList[space].name;
    hoverInfoLine1.textContent = 'If one utility is owned rent is 4 times amount shown on dice.';
    hoverInfoLine2.textContent = 'If both utilities are owned rent is 10 times amount shown on dice.';
    hoverInfoLine3.textContent = `Mortgage Value $${boardSpaceList[space].mortgage}`;
    hoverInfoLine4.textContent = '';
    hoverInfoLine5.textContent = '';
    hoverInfoLine6.textContent = '';
    hoverInfoLine7.textContent = '';
    hoverInfoLine8.textContent = '';
    hoverInfoLine9.textContent = '';
  };
};

//Gets a valid player count(2 - 4)
function getPlayerCount() {
  let inputCheck = false;
  let valid = ['2', 'two', '3', 'three', '4', 'four'];
  while(inputCheck == false) {
    let playerCount = prompt('How many players? (2 - 4)');
    for(let i = 0; i < valid.length; i++) {
      if(valid[i] == playerCount) {
        if(i == 0 || i == 1) {
          playerCount = 2;
          playerList.pop();
          playerList.pop();
        } else if(i == 2 || i == 3) {
          playerCount = 3;
          playerList.pop();
        } else if(i == 4 || i == 5) {
          playerCount = 4;
        };
        inputCheck = true;
        return playerCount;
      };
    };
  };
};

//Gets player names + capitalizes names
function getPlayerNames(playerCount) {
  for(let i=0; i<playerCount; i++) {
    let name = (prompt(`Player ${i + 1} enter your name.`));
    let upper = name.charAt(0).toUpperCase();
    let end = name.substr(1);
    playerList[i].name = upper + end;
  };
};

//Shows sized info panel for each player
function showPlayerDisplay(playerCount) {
  let height;

  //set height of info display
  if(playerCount === 2) {
    height = '400px';
  } else if(playerCount === 3) {
    height = '275px';
  };

  //show info display for each player
  for(let i=0; i<playerCount; i++) {
    infoClass[i].style.display = 'block';
    infoClass[i].style.height = height;
  };
};
