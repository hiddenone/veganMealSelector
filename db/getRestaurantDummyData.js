var getRestaurantDummyData = function(){
   return       [
            {name:"McDonalds",meal:"salad",ingredients:["lettuce"]},
            {name:"Vege-grill",meal:"mushroom burgers",ingredients:["lettuce","mushrooms","bread"]},
            {name: "Hong Kong Charlies", meal:"pad thai", ingredients:["lettuce", "mushrooms", "rice"]},
    {name: "Vegetarian House", meal:"Pho Noodle Soupt", ingredients:["lettuce", "mushrooms", "Pho","bamboo-shoots"],crumbs:["IT CHANGED"],notinthemodel:["testing will not go into db"]}];
}

console.log(getRestaurantDummyData());
