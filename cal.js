//Calculator app that displays the results of mathamatical calculations.



var numbers = document.getElementsByClassName("num") //All the buttons are selected
var textarea = document.getElementById("display") //Display area
var equals = document.getElementById("calculate")  //THe '=' button
var clear = document.getElementById("reset")
var arr = []

//Loop checking if any button is clicked
for(var i = 0; i<numbers.length;i++){
  numbers[i].addEventListener("click",function(){
  console.log(this.getAttribute("value"))
  arr.push(this.getAttribute("value")) //When a button is clicked, the value of that button is pushed into an array
  console.log(arr.join(""))
  var a = arr.join("") // the pushed elements are joined to create a mathematical expression
  textarea.innerHTML = a; //THe expression is displayed in the text area
  var symbols = ["+","-","*","/"]
  //This condition checks if the last element in that array is any of the symbols. If not then expression is calculated and displayed
  if(symbols.indexOf(arr[arr.length-1])!=0){
  equals.addEventListener("click",function(){
  textarea.innerHTML = eval(a);
  arr = [eval(a)];
  })
}
})
  }

  clear.addEventListener("click",function(){
    textarea.innerHTML = "";
    arr = [];
  })
