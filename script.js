const { createUser, getAllUsers } = require('./dbService');
const syncDatabase = require('./dbSync');

(async () => {
  await syncDatabase(); // För att synka databasen med vår modell

  /*
  // Skapa en ny användare
  let user = await createUser('Suzanne', 'suzanne@example.com'); // Anropa vår ServiceKlass för att lägga till ny användare
  console.log('Ny användare skapad:', user.toJSON());

  
  // Hämta alla användare
  let users = await getAllUsers(); // Anropa vår Serviceklass för att hämta alla användare
  console.log('Alla användare:', users.map((u) => u.toJSON()));
  */
})();

document.getElementById("btnSend").addEventListener("click", async () => {

  //Hämta data från input fält
  let name = document.getElementById("name").value
  let email = document.getElementById("email").value

  // Skapa en ny användare
  let user = await createUser(name, email); // Anropa vår ServiceKlass för att lägga till ny användare
  console.log('Ny användare skapad:', user.toJSON());
  document.getElementById("newUserOutput").innerText = ('Ny användare skapad:', user.toJSON())

})