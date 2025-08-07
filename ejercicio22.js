const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

function replaceNoBeganFoods(foodSchedule, fruits) {
    let fruitIndex = 0;
    for (const food of foodSchedule) {
        if (!food.isVegan) {
            if (fruitIndex < fruits.length) {
                food.name = fruits[fruitIndex];
                food.isVegan = true;
                fruitIndex++;
            } else {
                food.name = "No more fruits available";
            }
        }
    }
    return foodSchedule;
}
console.log(replaceNoBeganFoods(foodSchedule, fruits));