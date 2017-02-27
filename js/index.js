var fruit = [];
var price = [];
var totalPrice  = 0;

function display(){
  for(var i = 0; i < fruit.length; i++){
    document.write(fruit[i] + "<br>")
  }
}

function total(){
  for (var i = 0; i < price.length; i++){
    totalPrice += price[i]
  }
  document.write("Total is: $" + totalPrice)
}

function priceC(){
  fruit.push('Cherries');
  price.push(3);
}

function priceB(){
  fruit.push('Bananas');
  price.push(2.50);
}

function priceA(){
  fruit.push('Apples');
  price.push(5.25);
}

function priceS(){
  fruit.push('Strawberries');
  price.push(5);
}

function priceO(){
  fruit.push('Oranges');
  price.push(2.25)
}

function totalFruit(){
  display();
  total();
}