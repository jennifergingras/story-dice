$(document).ready(function () {

  // ARRAYS
  //--------------
  // dice array for general prompt 1
  var diceArrGen1 = ["rain", "flower", "moon", "feather"];

  // dice array for general prompt 2
  var diceArrGen2 = ["cat", "dog", "man", "woman", "child"];

  // dice array for general prompt 3
  var diceArrGen3 = ["boat", "home", "nature", "journey", "street"];


  // VARIABLES
  // ------------------
  var randomDice1 = "?";
  var randomDice2 = "?";
  var randomDice3 = "?";

  // FUNCTIONS
  // -------------------
  // set blank dice upon page load - dice will be blank until roll button is clicked
  $('#dice1').html(randomDice1)
  $('#dice2').html(randomDice2)
  $('#dice3').html(randomDice3)

  // ROLL BUTTON - grabs items from the dice arrays and displays them
  // on click
  $(document).on("click", "#roll-btn", function () {
    console.log("roll dice!")
  });
  // sort through the dice array using math.random
  // display the item from the array on the screen






})