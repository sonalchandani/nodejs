function placeAnOrder(orderNumber){
  console.log("order placed",orderNumber);
  makeEggs(function(){
    console.log("egss prepared for ", orderNumber);
  });
}

function makeEggs(callback){
  setTimeout(callback,5000);
}


placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
