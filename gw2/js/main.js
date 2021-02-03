document.querySelector('#gw2').addEventListener('click', lookAtAccount)
// document.querySelector("#gw2One").addEventListener("click", guildName);
// //document.querySelector("#gw2Two").addEventListener("click", age);
// //document.querySelector("#gw2Three").addEventListener("click", guildLeader);

// function lookAtAccount() {
//     let gw2 = document.querySelector('button').value
//     let url = "https://api.guildwars2.com/v2/account?access_token=FC2B1C80-8B27-AC4D-AE8E-7765EBC731F8962612C7-C834-4EA9-9798-64FA7E0C739E" +gw2
//     fetch(url)
//       .then((res) => res.json()) //Parse response as JSON
//       .then((data) => {
//         //document.querySelector("#id").innerText = data.id;
//         document.querySelector("#ac").innerText = data.created;
//         document.querySelector("#an").innerText = data.name;
//         //document.querySelector("#aa").innerText = data.age;
//         //document.querySelector("#world").innerText = data.world
//         //document.querySelector("#gl").innerText = data.guild_leader
//         document.querySelector("#ea").innerText = data.access[0] + ', '
//         document.querySelector("#eaTwo").innerText = data.access[1] + ", ";
//         document.querySelector("#eaThree").innerText = data.access[2];
//         document.querySelector("#com").innerText = data.commander
//         document.querySelector("#fl").innerText = data.fractal_level
//         document.querySelector("#daily").innerText = data.daily_ap
//         document.querySelector("#monthly").innerText = data.monthly_ap
//         document.querySelector("#wvw").innerText = data.wvw_rank
//       })
//       return fetch("https://api.guildwars2.com/v1/guild_details?guild_id=BAF85407-0DD8-4968-B278-B5BDB0FDD438"
//     ).catch((err) => {
//         console.log(`error ${err}`);
//       });
// }
// function guildName() {
//   let gw2 = document.querySelector("#gw2One").value;
//   let url ="https://api.guildwars2.com/v1/guild_details?guild_id=BAF85407-0DD8-4968-B278-B5BDB0FDD438" +gw2;
//   fetch(url)
//     .then((res) => res.json()) //Parse response as JSON
//     .then((data) => {
//       document.querySelector("#gOne").innerText = data.guild_name;
//       document.querySelector("#gTwo").innerText = data.guild_name[1];
//       document.querySelector("#gThree").innerText = data.guild_name[2];
//       document.querySelector("#gFour").innerText = data.guild_name[3];
//     })
// }
function lookAtAccount() {
 Promise.all([
  fetch("https://api.guildwars2.com/v2/account?access_token=FC2B1C80-8B27-AC4D-AE8E-7765EBC731F8962612C7-C834-4EA9-9798-64FA7E0C739E"),
  fetch("https://api.guildwars2.com/v1/guild_details?guild_id=BAF85407-0DD8-4968-B278-B5BDB0FDD438"),
]).then(data => {
  document.querySelector("#an").innerText = data.name;
  document.querySelector("#gOne").innerText = data.guild_name;
})
}