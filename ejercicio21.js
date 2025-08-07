const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];
function classifyByAge(users) {
    const minors = [];
    const adults = [];
    for (const user of users) {
        if (user.years < 18) {
            minors.push(user);
        } else {
            adults.push(user);
        }
    }
    console.log("Usuarios menores de edad;");
    console.log(minors);
    console.log("UUsuarios mayores de edad:");
    console.log(adults);
}
classifyByAge(users);