

$(function (){

  // here we need to pupulate the forms fields with the values that were saved to localStorage
  var coffeeOrder = localStorage.getItem('coffeeOrder', coffeeOrder);
  var email = localStorage.getItem('email', email);
  var size = localStorage.getItem('size', size);
  var flavor = localStorage.getItem('flavor', flavor);
  var caffeine = localStorage.getItem('caffeine', caffeine);

  $('#coffeeOrder').val(coffeeOrder);
  $('#emailInput').val(email);

  if (size) {
    $("input[name=size]").attr("checked", false);
    var elementToSelect= "input[value=" + size + "]";
    $(elementToSelect).attr("checked", true);
    }

  $('input:checked').val();
  $('#flavorShot').val(flavor);
  $('#strengthLevel').val(caffeine);

  // Here we need to save the
  $('form').submit(function(event){
    // prevent the forms default behavior of refreshing upon submit
    event.preventDefault();

    // get values for submission fields
    var coffeeOrder = $('#coffeeOrder').val();
    var email = $('#emailInput').val();
    var size = $('input:checked').val();
    var flavor = $('#flavorShot').val();
    var caffeine = $('#strengthLevel').val();



    // Set values submitted by user to local form
    localStorage.setItem('coffeeOrder', coffeeOrder);
    localStorage.setItem('email', email);
    localStorage.setItem('size', size);
    localStorage.setItem('flavor', flavor);
    localStorage.setItem('caffeine', caffeine);
  });



});
