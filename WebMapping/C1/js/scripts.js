///from Professor Chris Whong


$('#alertButton').on('click', function() {
	alert('Chris Whong');
});

$('#red-button').on('click', function() {
  $('body').css('background', 'red');
});

$('#green-button').on('click', function() {
  $('body').css('background', 'green');
});

$('#blue-button').on('click', function() {
  $('body').css('background', 'blue');
});

$('.joes-pizza').on('click', function() {
  $('#pizza-shop-info').text('Joes Pizza is the best in NYC');
});

$('.dominos-pizza').on('click', function() {
  $('#pizza-shop-info').text('Dominos is delicious');
});

$('.papa-johns').on('click', function() {
  $('#pizza-shop-info').text('Papa Johns is mediocre');
});


var name = 'JL'; //String

var age = 38; // number ( if without a quotes)

console.log(name)

var ageInADecade=age+10;

console.log(ageInADecade)




// put it for input


$('#ageSubmit').on('click', function(){
	var age = $('#ageInput').val();
	age = parseInt(age);

	// if age is NaN, console log an error

	if (isNaN(age)){
		console.log("you did not enter a number!")
	}else{
		var ageInADecade = age+10
		$('.outputMessage').text(`You will be ${ageInADecade} in 10 years`)

	}
	console.log('Input is: ',age)
});

var objects={
	age:38,
	color: 'red',
	school:'NYU'


}

console.log(objects.school)

objects.nycBorough = 'BK'
console.log(objects.nycBorough)