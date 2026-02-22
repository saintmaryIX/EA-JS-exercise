
// Objective: Practice array manipulation using functional patterns (filter, map, reduce, and destructuring) by processing real data from an API.
// Filter: Only include users whose id is an even number.
// Transform: Create a new array of objects containing only the id, name, and the city (extracted from the nested address object).
// Add: Insert a "Guest User" at the beginning of the list without mutating the original result.
// Statistics: Calculate the total number of characters in all usernames combined using reduce.

fetch('https://jsonplaceholder.typicode.com/users/')
  .then(response => response.json())
  .then(users => {
    console.log("--- Processed Users ---");

    const evenIdUsers = users.filter(user => user.id % 2 === 0); //me quedo con users de idpar

    const cleanedUsers = evenIdUsers.map(user => {
      const { id, name, address: { city } } = user; // creo cleaned users y hago q solo pillen los atributos id, name y city de eventidusers (q tenía muchos atributos)
      return { id, name, city };
    });

    const guestUser = { id: 0, name: "Guest User", city: "N/A" };
    const finalUsers = [guestUser, ...cleanedUsers]; //hago spread y meto a la izq del vector de users un nuevouser "guestuser"

    console.log(finalUsers);

    console.log("--- Statistics ---");
    
    const totalUsernameChars = users.reduce((acc, user) => {
      return acc + user.username.length;
    }, 0);

    console.log("Total characters in all usernames:", totalUsernameChars);
  })
