var myName="Cecilia";
console.log(myName);

var number="3";
console.log(number);

var favNumber="three"
console.log(favNumber);

var t= true;
console.log(t)

var name= ["C", "E", "C", "I", "L", "I", "A"];
console.log(name)

var action= ["run", "jump", "walk"];
console.log(action)

var lastName ="Lu"
var fullName = ["Cecilia" + " " + "Lu"];
console.log(firstName)

var addNumber= 45+55;
console.log(addNumber);

var name = name[0]; 
var name = name[1];  
var name = name[2]; 
var name = name[3];
var name = name[4]; 
console.log(name);

var str = "supercalifragilisticexpialidocious";
var n = str.length;
console.log(n);

//#5
var firstandlast= [myName.length == lastName.length]
console.log(firstandlast)

var students= 14
if(students>16){
	var areHere="Everyone is here";
}
else{
	var notHere="Not everyone is here";
}
console.log()
//not sure how to do #5

//#6
for (var i = 0; i < arraymyName.length; i++) {
	console.log(arraymyName[i]);
};

//#7
var date= new Date;
var hour= now.getHours();
if 

//#8
var day =date.getDay();
if (day==1){
	console.log('Monday');
}

else if (day==2){
	console.log('Tuesday');
}

else if (day==3){
	console.log('Wednesday');
}

else if (day==4){
	console.log('Thursday');
}

else if (day==5){
	console.log('Friday');
}

else if (day==6){
	console.log('Saturday');
}

else if (day==7){
	console.log('Sunday');
}

//#9
var food= ["Raman", "Sushi", "KoreanBBQ"];
console.log(food)

var animals= ["Dog", "Panda", "Bird"];
console.log(animals)

var places= ["Myhome", "Japan", "Taiwan"];
console.log(places)

var pokemons= ["Pikachu", "Squirtle", "Raichu"];
console.log(pokemon)

//#10
var arrayLink = [
	['Raman','Sushi','KoreanBBQ'],
	['Dog','Panda','Bird'],
	['Myhome','Japan','Taiwan'],
	['Pikachu','Squirtle','Raichu']
];
console.log(arrayLink);

var arrayOfArr = [
	food,
	animals,
	places,
	pokemons
];

console.log("My favorite food are: ", arrayOfArr[0]);
console.log("My favorite animals are: ", arrayOfArr[1]);
console.log("My favorite places are: ", arrayOfArr[2]);
console.log("My favorite Pokemons are: ", arrayOfArr[3]);

//#12
for (var i = 0; i < arrayOfArr.length; i++) {
	for (var j=0; j < arrayOfArr[i].length; j++) {
		console.log(arrayOfArr[i][j]);
	}
};
