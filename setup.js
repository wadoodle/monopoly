/*
const p1DisplayCon = document.getElementById('p1DisplayCon');
const p2DisplayCon = document.getElementById('p2DisplayCon');
const p3DisplayCon = document.getElementById('p3DisplayCon');
const p4DisplayCon = document.getElementById('p4DisplayCon');
*/

const p1NameDisplay = document.getElementById('p1NameDisplay');
const p2NameDisplay = document.getElementById('p2NameDisplay');
const p3NameDisplay = document.getElementById('p3NameDisplay');
const p4NameDisplay = document.getElementById('p4NameDisplay');
const nameDisplayList = [p1NameDisplay, p2NameDisplay, p3NameDisplay, p4NameDisplay];

const p1MoneyDisplay = document.getElementById('p1MoneyDisplay');
const p2MoneyDisplay = document.getElementById('p2MoneyDisplay');
const p3MoneyDisplay = document.getElementById('p3MoneyDisplay');
const p4MoneyDisplay = document.getElementById('p4MoneyDisplay');
const moneyDisplayList = [p1MoneyDisplay, p2MoneyDisplay, p3MoneyDisplay, p4MoneyDisplay];

const p1PropertyDisplay = document.getElementById('p1PropertyDisplay');
const p2PropertyDisplay = document.getElementById('p2PropertyDisplay');
const p3PropertyDisplay = document.getElementById('p3PropertyDisplay');
const p4PropertyDisplay = document.getElementById('p4PropertyDisplay');
const propertyDisplayList = [p1PropertyDisplay, p2PropertyDisplay, p3PropertyDisplay, p4PropertyDisplay];

const p1RailroadDisplay = document.getElementById('p1RailroadDisplay');
const p2RailroadDisplay = document.getElementById('p2RailroadDisplay');
const p3RailroadDisplay = document.getElementById('p3RailroadDisplay');
const p4RailroadyDisplay = document.getElementById('p4RailroadDisplay');
const railroadDisplayList = [p1RailroadDisplay, p2RailroadDisplay, p3RailroadDisplay, p4RailroadDisplay];

const p1UtilityDisplay = document.getElementById('p1UtilityDisplay');
const p2UtilityDisplay = document.getElementById('p2UtilityDisplay');
const p3UtilityDisplay = document.getElementById('p3UtilityDisplay');
const p4UtilityDisplay = document.getElementById('p4UtilityDisplay');
const utilityDisplayList = [p1UtilityDisplay, p2UtilityDisplay, p3UtilityDisplay, p4UtilityDisplay];

const infoClass = document.getElementsByClassName('info');

//Piece Display Selectors
const p1dot0 = document.getElementById('p1dot0');
const p2dot0 = document.getElementById('p2dot0');
const p3dot0 = document.getElementById('p3dot0');
const p4dot0 = document.getElementById('p4dot0');
const space0 = [p1dot0, p2dot0, p3dot0, p4dot0];

const p1dot1 = document.getElementById('p1dot1');
const p2dot1 = document.getElementById('p2dot1');
const p3dot1 = document.getElementById('p3dot1');
const p4dot1 = document.getElementById('p4dot1');
const space1 = [p1dot1, p2dot1, p3dot1, p4dot1];

const p1dot2 = document.getElementById('p1dot2');
const p2dot2 = document.getElementById('p2dot2');
const p3dot2 = document.getElementById('p3dot2');
const p4dot2 = document.getElementById('p4dot2');
const space2 = [p1dot2, p2dot2, p3dot2, p4dot2];

const p1dot3 = document.getElementById('p1dot3');
const p2dot3 = document.getElementById('p2dot3');
const p3dot3 = document.getElementById('p3dot3');
const p4dot3 = document.getElementById('p4dot3');
const space3 = [p1dot3, p2dot3, p3dot3, p4dot3];

const p1dot4 = document.getElementById('p1dot4');
const p2dot4 = document.getElementById('p2dot4');
const p3dot4 = document.getElementById('p3dot4');
const p4dot4 = document.getElementById('p4dot4');
const space4 = [p1dot4, p2dot4, p3dot4, p4dot4];

const p1dot5 = document.getElementById('p1dot5');
const p2dot5 = document.getElementById('p2dot5');
const p3dot5 = document.getElementById('p3dot5');
const p4dot5 = document.getElementById('p4dot5');
const space5 = [p1dot5, p2dot5, p3dot5, p4dot5];

const p1dot6 = document.getElementById('p1dot6');
const p2dot6 = document.getElementById('p2dot6');
const p3dot6 = document.getElementById('p3dot6');
const p4dot6 = document.getElementById('p4dot6');
const space6 = [p1dot6, p2dot6, p3dot6, p4dot6];

const p1dot7 = document.getElementById('p1dot7');
const p2dot7 = document.getElementById('p2dot7');
const p3dot7 = document.getElementById('p3dot7');
const p4dot7 = document.getElementById('p4dot7');
const space7 = [p1dot7, p2dot7, p3dot7, p4dot7];

const p1dot8 = document.getElementById('p1dot8');
const p2dot8 = document.getElementById('p2dot8');
const p3dot8 = document.getElementById('p3dot8');
const p4dot8 = document.getElementById('p4dot8');
const space8 = [p1dot8, p2dot8, p3dot8, p4dot8];

const p1dot9 = document.getElementById('p1dot9');
const p2dot9 = document.getElementById('p2dot9');
const p3dot9 = document.getElementById('p3dot9');
const p4dot9 = document.getElementById('p4dot9');
const space9 = [p1dot9, p2dot9, p3dot9, p4dot9];

const p1dot10 = document.getElementById('p1dot10');
const p2dot10 = document.getElementById('p2dot10');
const p3dot10 = document.getElementById('p3dot10');
const p4dot10 = document.getElementById('p4dot10');
const space10 = [p1dot10, p2dot10, p3dot10, p4dot10];

const p1dot11 = document.getElementById('p1dot11');
const p2dot11 = document.getElementById('p2dot11');
const p3dot11 = document.getElementById('p3dot11');
const p4dot11 = document.getElementById('p4dot11');
const space11 = [p1dot11, p2dot11, p3dot11, p4dot11];

const p1dot12 = document.getElementById('p1dot12');
const p2dot12 = document.getElementById('p2dot12');
const p3dot12 = document.getElementById('p3dot12');
const p4dot12 = document.getElementById('p4dot12');
const space12 = [p1dot12, p2dot12, p3dot12, p4dot12];

const p1dot13 = document.getElementById('p1dot13');
const p2dot13= document.getElementById('p2dot13');
const p3dot13 = document.getElementById('p3dot13');
const p4dot13 = document.getElementById('p4dot13');
const space13 = [p1dot13, p2dot13, p3dot13, p4dot13];

const p1dot14 = document.getElementById('p1dot14');
const p2dot14= document.getElementById('p2dot14');
const p3dot14 = document.getElementById('p3dot14');
const p4dot14 = document.getElementById('p4dot14');
const space14 = [p1dot14, p2dot14, p3dot14, p4dot14];

const p1dot15 = document.getElementById('p1dot15');
const p2dot15= document.getElementById('p2dot15');
const p3dot15 = document.getElementById('p3dot15');
const p4dot15 = document.getElementById('p4dot15');
const space15 = [p1dot15, p2dot15, p3dot15, p4dot15];

const p1dot16 = document.getElementById('p1dot16');
const p2dot16= document.getElementById('p2dot16');
const p3dot16 = document.getElementById('p3dot16');
const p4dot16 = document.getElementById('p4dot16');
const space16 = [p1dot16, p2dot16, p3dot16, p4dot16];

const p1dot17 = document.getElementById('p1dot17');
const p2dot17= document.getElementById('p2dot17');
const p3dot17 = document.getElementById('p3dot17');
const p4dot17 = document.getElementById('p4dot17');
const space17 = [p1dot17, p2dot17, p3dot17, p4dot17];

const p1dot18 = document.getElementById('p1dot18');
const p2dot18= document.getElementById('p2dot18');
const p3dot18 = document.getElementById('p3dot18');
const p4dot18 = document.getElementById('p4dot18');
const space18 = [p1dot18, p2dot18, p3dot18, p4dot18];

const p1dot19 = document.getElementById('p1dot19');
const p2dot19= document.getElementById('p2dot19');
const p3dot19 = document.getElementById('p3dot19');
const p4dot19 = document.getElementById('p4dot19');
const space19 = [p1dot19, p2dot19, p3dot19, p4dot19];

const p1dot20 = document.getElementById('p1dot20');
const p2dot20= document.getElementById('p2dot20');
const p3dot20 = document.getElementById('p3dot20');
const p4dot20 = document.getElementById('p4dot20');
const space20 = [p1dot20, p2dot20, p3dot20, p4dot20];

const p1dot21 = document.getElementById('p1dot21');
const p2dot21= document.getElementById('p2dot21');
const p3dot21 = document.getElementById('p3dot21');
const p4dot21 = document.getElementById('p4dot21');
const space21 = [p1dot21, p2dot21, p3dot21, p4dot21];

const p1dot22 = document.getElementById('p1dot22');
const p2dot22= document.getElementById('p2dot22');
const p3dot22 = document.getElementById('p3dot22');
const p4dot22 = document.getElementById('p4dot22');
const space22 = [p1dot22, p2dot22, p3dot22, p4dot22];

const p1dot23 = document.getElementById('p1dot23');
const p2dot23= document.getElementById('p2dot23');
const p3dot23 = document.getElementById('p3dot23');
const p4dot23 = document.getElementById('p4dot23');
const space23 = [p1dot23, p2dot23, p3dot23, p4dot23];

const p1dot24 = document.getElementById('p1dot24');
const p2dot24= document.getElementById('p2dot24');
const p3dot24 = document.getElementById('p3dot24');
const p4dot24 = document.getElementById('p4dot24');
const space24 = [p1dot24, p2dot24, p3dot24, p4dot24];

const p1dot25 = document.getElementById('p1dot25');
const p2dot25= document.getElementById('p2dot25');
const p3dot25 = document.getElementById('p3dot25');
const p4dot25 = document.getElementById('p4dot25');
const space25 = [p1dot25, p2dot25, p3dot25, p4dot25];

const p1dot26 = document.getElementById('p1dot26');
const p2dot26= document.getElementById('p2dot26');
const p3dot26 = document.getElementById('p3dot26');
const p4dot26 = document.getElementById('p4dot26');
const space26 = [p1dot26, p2dot26, p3dot26, p4dot26];

const p1dot27 = document.getElementById('p1dot27');
const p2dot27= document.getElementById('p2dot27');
const p3dot27 = document.getElementById('p3dot27');
const p4dot27 = document.getElementById('p4dot27');
const space27 = [p1dot27, p2dot27, p3dot27, p4dot27];

const p1dot28 = document.getElementById('p1dot28');
const p2dot28= document.getElementById('p2dot28');
const p3dot28 = document.getElementById('p3dot28');
const p4dot28 = document.getElementById('p4dot28');
const space28 = [p1dot28, p2dot28, p3dot28, p4dot28];

const p1dot29 = document.getElementById('p1dot29');
const p2dot29= document.getElementById('p2dot29');
const p3dot29 = document.getElementById('p3dot29');
const p4dot29 = document.getElementById('p4dot29');
const space29 = [p1dot29, p2dot29, p3dot29, p4dot29];

const p1dot30 = document.getElementById('p1dot30');
const p2dot30= document.getElementById('p2dot30');
const p3dot30 = document.getElementById('p3dot30');
const p4dot30 = document.getElementById('p4dot30');
const space30 = [p1dot30, p2dot30, p3dot30, p4dot30];

const p1dot31 = document.getElementById('p1dot31');
const p2dot31= document.getElementById('p2dot31');
const p3dot31 = document.getElementById('p3dot31');
const p4dot31 = document.getElementById('p4dot31');
const space31 = [p1dot31, p2dot31, p3dot31, p4dot31];

const p1dot32 = document.getElementById('p1dot32');
const p2dot32= document.getElementById('p2dot32');
const p3dot32 = document.getElementById('p3dot32');
const p4dot32 = document.getElementById('p4dot32');
const space32 = [p1dot32, p2dot32, p3dot32, p4dot32];

const p1dot33 = document.getElementById('p1dot33');
const p2dot33= document.getElementById('p2dot33');
const p3dot33 = document.getElementById('p3dot33');
const p4dot33 = document.getElementById('p4dot33');
const space33 = [p1dot33, p2dot33, p3dot33, p4dot33];

const p1dot34 = document.getElementById('p1dot34');
const p2dot34= document.getElementById('p2dot34');
const p3dot34 = document.getElementById('p3dot34');
const p4dot34 = document.getElementById('p4dot34');
const space34 = [p1dot34, p2dot34, p3dot34, p4dot34];

const p1dot35 = document.getElementById('p1dot35');
const p2dot35= document.getElementById('p2dot35');
const p3dot35 = document.getElementById('p3dot35');
const p4dot35 = document.getElementById('p4dot35');
const space35 = [p1dot35, p2dot35, p3dot35, p4dot35];

const p1dot36 = document.getElementById('p1dot36');
const p2dot36= document.getElementById('p2dot36');
const p3dot36 = document.getElementById('p3dot36');
const p4dot36 = document.getElementById('p4dot36');
const space36 = [p1dot36, p2dot36, p3dot36, p4dot36];

const p1dot37 = document.getElementById('p1dot37');
const p2dot37= document.getElementById('p2dot37');
const p3dot37 = document.getElementById('p3dot37');
const p4dot37 = document.getElementById('p4dot37');
const space37 = [p1dot37, p2dot37, p3dot37, p4dot37];

const p1dot38 = document.getElementById('p1dot38');
const p2dot38= document.getElementById('p2dot38');
const p3dot38 = document.getElementById('p3dot38');
const p4dot38 = document.getElementById('p4dot38');
const space38 = [p1dot38, p2dot38, p3dot38, p4dot38];

const p1dot39 = document.getElementById('p1dot39');
const p2dot39= document.getElementById('p2dot39');
const p3dot39 = document.getElementById('p3dot39');
const p4dot39 = document.getElementById('p4dot39');
const space39 = [p1dot39, p2dot39, p3dot39, p4dot39];

const pieceDisplayList = [space0, space1, space2, space3, space4, space5, space6, space7, space8, space9, space10, space11, space12, space13, space14, space15, space16, space17, space18, space19, space20, space21, space22, space23, space24, space25, space26, space27, space28, space29, space30, space31, space32, space33, space34, space35, space36, space37, space38, space39];

//Hover info Display
const hoverInfo = document.getElementById('hoverInfo');
const infoTitle = document.getElementById('infoTitle');
const hoverInfoLine1 = document.getElementById('hoverInfoLine1');
const hoverInfoLine2 = document.getElementById('hoverInfoLine2');
const hoverInfoLine3 = document.getElementById('hoverInfoLine3');
const hoverInfoLine4 = document.getElementById('hoverInfoLine4');
const hoverInfoLine5 = document.getElementById('hoverInfoLine5');
const hoverInfoLine6 = document.getElementById('hoverInfoLine6');
const hoverInfoLine7 = document.getElementById('hoverInfoLine7');
const hoverInfoLine8 = document.getElementById('hoverInfoLine8');
const hoverInfoLine9 = document.getElementById('hoverInfoLine9');

//Property hover Selectors
const mediterraneanAveHover = document.getElementById('mediterraneanAveHover');
const balticAveHover = document.getElementById('balticAveHover');
const orientalAveHover = document.getElementById('orientalAveHover');
const vermontAveHover = document.getElementById('vermontAveHover');
const connecticutAveHover = document.getElementById('connecticutAveHover');
const stCharlesPlaceHover = document.getElementById('stCharlesPlaceHover');
const statesAveHover = document.getElementById('statesAveHover');
const virginiaAveHover = document.getElementById('virginiaAveHover');
const stJamesPlaceHover = document.getElementById('stJamesPlaceHover');
const tennesseeAveHover = document.getElementById('tennesseeAveHover');
const newYorkAveHover = document.getElementById('newYorkAveHover');
const kentuckyAveHover = document.getElementById('kentuckyAveHover');
const indianaAveHover = document.getElementById('indianaAveHover');
const illinoisAveHover = document.getElementById('illinoisAveHover');
const atlanticAveHover = document.getElementById('atlanticAveHover');
const ventourAveHover = document.getElementById('ventourAveHover');
const marvinGardensHover = document.getElementById('marvinGardensHover');
const pacificAveHover = document.getElementById('pacificAveHover');
const northCarolinaAveHover = document.getElementById('northCarolinaAvenueHover');
const paAveHover = document.getElementById('paAveHover');
const parkPlaceHover = document.getElementById('parkPlaceHover');
const boardwalkHover = document.getElementById('boardwalkHover');

//Railroad hover Selectors
const readingRRHover = document.getElementById('readingRRHover');
const paRRHover = document.getElementById('paRRHover');
const bandoRRHover = document.getElementById('bandoRRHover');
const shortLineRRHover = document.getElementById('shortLineRRHover')

//Utility hover Selectors
const electricCompanyHover = document.getElementById('electricCompanyHover');
const waterWorksHover = document.getElementById('waterWorksHover');

//Utility on mouse over
electricCompanyHover.onmouseover = function() {
  showHoverInfo(12, 'utility', 'white');
};
waterWorksHover.onmouseover = function() {
  showHoverInfo(28, 'utility', 'white');
};

//Railroad on mouse over
readingRRHover.onmouseover = function() {
  showHoverInfo(5, 'RR', 'white');
};
paRRHover.onmouseover = function() {
  showHoverInfo(15, 'RR', 'white');
};
bandoRRHover.onmouseover = function() {
  showHoverInfo(25, 'RR', 'white');
};
shortLineRRHover.onmouseover = function() {
  showHoverInfo(35, 'RR', 'white');
};

//Property on mouse over
mediterraneanAveHover.onmouseover = function() {
  showHoverInfo(1, 'normal', 'sienna');
};
balticAveHover.onmouseover = function() {
  showHoverInfo(3, 'normal', 'sienna');
};
orientalAveHover.onmouseover = function() {
  showHoverInfo(6, 'normal', 'lightBlue');
};
vermontAveHover.onmouseover = function() {
  showHoverInfo(8, 'normal', 'lightBlue');
};
connecticutAveHover.onmouseover = function() {
  showHoverInfo(9, 'normal', 'lightBlue');
};
stCharlesPlaceHover.onmouseover = function() {
  showHoverInfo(11, 'normal', 'mediumVioletRed');
};
statesAveHover.onmouseover = function() {
  showHoverInfo(13, 'normal', 'mediumVioletRed');
};
virginiaAveHover.onmouseover = function() {
  showHoverInfo(14, 'normal', 'mediumVioletRed');
};
stJamesPlaceHover.onmouseover = function() {
  showHoverInfo(16, 'normal', 'orange');
};
tennesseeAveHover.onmouseover = function() {
  showHoverInfo(18, 'normal', 'orange');
};
newYorkAveHover.onmouseover = function() {
  showHoverInfo(19, 'normal', 'orange');
};
kentuckyAveHover.onmouseover = function() {
  showHoverInfo(21, 'normal', 'red');
};
indianaAveHover.onmouseover = function() {
  showHoverInfo(23, 'normal', 'red');
};
illinoisAveHover.onmouseover = function() {
  showHoverInfo(24, 'normal', 'red');
};
atlanticAveHover.onmouseover = function() {
  showHoverInfo(26, 'normal', 'yellow');
};
ventourAveHover.onmouseover = function() {
  showHoverInfo(27, 'normal', 'yellow');
};
marvinGardensHover.onmouseover = function() {
  showHoverInfo(29, 'normal', 'yellow');
};
pacificAveHover.onmouseover = function() {
  showHoverInfo(31, 'normal', 'green');
};
northCarolinaAveHover.onmouseover = function() {
  showHoverInfo(32, 'normal', 'green');
};
paAveHover.onmouseover = function() {
  showHoverInfo(34, 'normal', 'green');
};
parkPlaceHover.onmouseover = function() {
  showHoverInfo(37, 'normal', 'royalBlue');
};
boardwalkHover.onmouseover = function() {
  showHoverInfo(39, 'normal', 'royalBlue');
};

//on mouse out
mediterraneanAveHover.onmouseout = function() {
  hoverInfo.style.display = 'none';
};
balticAveHover.onmouseout = function() {
  hoverInfo.style.display = 'none';
};
orientalAveHover.onmouseout = function() {
  hoverInfo.style.display = 'none';
};
vermontAveHover.onmouseout = function() {
  hoverInfo.style.display = 'none';
};
connecticutAveHover.onmouseout = function() {
  hoverInfo.style.display = 'none';
};
stCharlesPlaceHover.onmouseout = function() {
  hoverInfo.style.display = 'none';
};
statesAveHover.onmouseout = function() {
  hoverInfo.style.display = 'none';
};
virginiaAveHover.onmouseout = function() {
  hoverInfo.style.display = 'none';
};
stJamesPlaceHover.onmouseout = function() {
  hoverInfo.style.display = 'none';
};
tennesseeAveHover.onmouseout = function() {
  hoverInfo.style.display = 'none';
};
newYorkAveHover.onmouseout = function() {
  hoverInfo.style.display = 'none';
};
kentuckyAveHover.onmouseout = function() {
  hoverInfo.style.display = 'none';
};
indianaAveHover.onmouseout = function() {
  hoverInfo.style.display = 'none';
};
illinoisAveHover.onmouseout = function() {
  hoverInfo.style.display = 'none';
};
atlanticAveHover.onmouseout = function() {
  hoverInfo.style.display = 'none';
};
ventourAveHover.onmouseout = function() {
  hoverInfo.style.display = 'none';
};
marvinGardensHover.onmouseout = function() {
  hoverInfo.style.display = 'none';
};
pacificAveHover.onmouseout = function() {
  hoverInfo.style.display = 'none';
};
northCarolinaAveHover.onmouseout = function() {
  hoverInfo.style.display = 'none';
};
paAveHover.onmouseout = function() {
  hoverInfo.style.display = 'none';
};
parkPlaceHover.onmouseout = function() {
  hoverInfo.style.display = 'none';
};
boardwalkHover.onmouseout = function() {
  hoverInfo.style.display = 'none';
};
readingRRHover.onmouseout = function() {
  hoverInfo.style.display = 'none';
};
paRRHover.onmouseout = function() {
  hoverInfo.style.display = 'none';
};
bandoRRHover.onmouseout = function() {
  hoverInfo.style.display = 'none';
};
shortLineRRHover.onmouseout = function() {
  hoverInfo.style.display = 'none';
};
electricCompanyHover.onmouseout = function() {
  hoverInfo.style.display = 'none';
};
waterWorksHover.onmouseout = function() {
  hoverInfo.style.display = 'none';
};

//Player constructor
function Player() {
  this.name = '',
  this.money = 1500,
  this.location = 0,
  this.property = []
};

let player1 = new Player();
let player2 = new Player();
let player3 = new Player();
let player4 = new Player();
let playerList = [player1, player2, player3, player4];

function Property(name, price, houseCost, rent0, rent1, rent2, rent3, rent4, hotelRent) {
  this.type = 'property',
  this.owner = 'bank',
  this.isMortgaged= false,
  this.hotel = false,
  this.houses = 0,
  this.name = name,
  this.price = price,
  this.mortgage = this.price / 2,
  this.houseCost = houseCost,
  this.rent0 = rent0,
  this.rent1 = rent1,
  this.rent2 = rent2,
  this.rent3 = rent3,
  this.rent4 = rent4,
  this.hotelRent = hotelRent,
  this.rent = [rent0, rent1, rent2, rent3, rent4, hotelRent];
};

function Railroad(name) {
  this.type = 'rr',
  this.owner = 'bank',
  this.name = name,
  this.price = 200,
  this.mortgage = this.price / 2,
  this.isMortgaged = false,
  this.rent1 = 25,
  this.rent2 = 50,
  this.rent3 = 100,
  this.rent4 = 200,
  this.rent = [this.rent1, this.rent2, this.rent3, this.rent4];
};

function Utility(name) {
  this.type = 'utility',
  this.owner = 'bank',
  this.name = name,
  this.price = 150,
  this.mortgage = this.price / 2;
};

function DrawCard(name, type) {
  this.name = name,
  this.type = type;
};

function Other(name, type) {
  this.name = name,
  this.type = type;
};

let go = new Other('Go', 'go');
let mediterraneanAve = new Property('Mediterranean Avenue', 60, 50,  2, 10, 30, 90, 160, 250);
let communityChest1 = new DrawCard('Community Chest', 'chest');
let balticAve = new Property('Baltic Avenue', 60, 50,  4, 20, 60, 180, 320, 450);
let incomeTax = new Other('Income Tax', 'tax');
let readingRR = new Railroad('Reading Railroad');
let orientalAve = new Property('Oriental Avenue', 100, 50, 6, 30, 90, 270, 400, 550);
let chance1 = new DrawCard('Chance', 'chance');
let vermontAve = new Property('Vermont Avenue', 100, 50, 6, 30, 90, 270, 400, 550);
let connecticutAve = new Property('Connecticut Avenue', 120, 50, 8, 40, 100, 300, 450, 600);
let jail = new Other('Jail');
let stCharlesPlace = new Property('St. Charles Place', 140, 100, 10, 50, 150, 450, 625, 750);
let electricCompany = new Utility('Electric Company');
let statesAve = new Property('States Avenue', 140, 100, 10, 50, 150, 450, 625, 750);
let virginiaAve = new Property('Virginia Avenue', 160, 100, 12, 60, 180, 500, 700, 900);
let paRR = new Railroad('Pennsylvania Railroad');
let stJamesPlace = new Property('St. James Place', 180, 100, 14, 70, 200, 550, 750, 950);
let communityChest2 = new DrawCard('Community Chest', 'chest');
let tennesseeAve = new Property('Tennessee Avenue', 180, 100, 14, 70, 200, 550, 750, 950);
let newYorkAve = new Property('New York Avenue', 200, 100, 16, 80, 220, 600, 800, 1000);
let freeParking = new Other('Free Parking');
let kentuckyAve = new Property('Kentucky Avenue', 220, 150, 18, 90, 250, 700, 875, 1050);
let chance2 = new DrawCard('Chance', 'chance');
let indianaAve = new Property('Indiana Avenue', 220, 150, 18, 90, 250, 700, 875, 1050);
let illinoisAve = new Property('Illinois Avenue', 240, 150, 20, 100, 300, 750, 925, 1100);
let bandoRR = new Railroad('B&O Railroad');
let atlanticAve = new Property('Atlantic Avenue', 260, 150, 22, 110, 330, 800, 975, 1150);
let ventourAve = new Property('Ventour Avenue', 260, 150, 22, 110, 330, 800, 975, 1150);
let waterWorks = new Utility('Water Works');
let marvinGardens = new Property('Marvin Gardens', 280, 150, 24, 120, 360, 850, 1025, 1200);
let goToJail = new Other('Go To Jail');
let pacificAve = new Property('Pacific Avenue', 300, 200, 26, 130, 390, 900, 1100, 1275);
let northCarolinaAvenue = new Property('North Caroline Avenue', 300, 200, 26, 130, 390, 900, 1100, 1275);
let communityChest3 = new DrawCard('Community Chest', 'chest');
let paAve = new Property('Pennsylvania Avenue', 320, 200, 28, 150, 450, 1000, 1200, 1400);
let shortLineRR = new Railroad('Short Line Railroad');
let chance3 = new DrawCard('Chance', 'chance');
let parkPlace = new Property('Park Place', 350, 200, 35, 175, 500, 1100, 1300, 1500);
let luxuryTax = new Other('Luxury Tax', 'tax');
let boardwalk = new Property('Boardwalk', 400, 200, 50, 200, 600, 1400, 1700, 2000);

const boardSpaceList = [go, mediterraneanAve, communityChest1, balticAve, incomeTax, readingRR, orientalAve, chance1, vermontAve, connecticutAve, jail, stCharlesPlace, electricCompany, statesAve, virginiaAve, paRR, stJamesPlace, communityChest2, tennesseeAve, newYorkAve, freeParking, kentuckyAve, chance2, indianaAve, illinoisAve, bandoRR, atlanticAve, ventourAve, waterWorks, marvinGardens, goToJail, pacificAve, northCarolinaAvenue, communityChest3, paAve, shortLineRR, chance3, parkPlace, luxuryTax, boardwalk];

const railroads = [readingRR, paRR, bandoRR, shortLineRR];
const utilities = [electricCompany, waterWorks];

//space types
//property, RR, utility, chance, community, tax
//jail, free parking, go to jail, go

let chanceCardList = [];
let communityCardList = [];

/*
playerList[1].property.push(12);
playerList[1].property.push(28);
electricCompany.owner = 1;
waterWorks.owner = 1;
*/
