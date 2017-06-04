//JS code goes here
var turn;

function cellClicked(event) {

event.target.innerHTML=turn ? "0":"x";

turn =!turn;

}
