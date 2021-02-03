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
// function lookAtAccount() {
//  Promise.all([
//    fetch("https://api.guildwars2.com/v2/account?access_token=FC2B1C80-8B27-AC4D-AE8E-7765EBC731F8962612C7-C834-4EA9-9798-64FA7E0C739E"),
//    fetch("https://api.guildwars2.com/v1/guild_details?guild_id=BAF85407-0DD8-4968-B278-B5BDB0FDD438"),
//    ("https://api.guildwars2.com/v2/characters?access_token=FC2B1C80-8B27-AC4D-AE8E-7765EBC731F8962612C7-C834-4EA9-9798-64FA7E0C739E")
//  ]).then((data) => {
//    document.querySelector("#an").innerText = data.name;
//    document.querySelector("#gOne").innerText = data.guild_name;
//  });
// }
function lookAtAccount() {

  let apiOne = fetch("https://api.guildwars2.com/v2/account?access_token=FC2B1C80-8B27-AC4D-AE8E-7765EBC731F8962612C7-C834-4EA9-9798-64FA7E0C739E&guild_id=91675510-604A-E611-80D4-E4115BD19D24&guild_id=15D1071B-F316-4824-8518-E19D3A7AD79C&guild_id=516E880E-BC84-E911-81AA-D66D0E22CAB6&guild_id=516E880E-BC84-E911-81AA-D66D0E22CAB6&guild_id=516E880E-BC84-E911-81AA-D66D0E22CAB6 91675510-604A-E611-80D4-E4115BD19D24&guild_id=91675510-604A-E611-80D4-E4115BD19D24&guild_id=91675510-604A-E611-80D4-E4115BD19D24, &guild_id=91675510-604A-E611-80D4-E4115BD19D24, BAF85407-0DD8-4968-B278-B5BDB0FDD438") 
  let apiTwo = fetch("https://api.guildwars2.com/v1/guild_details?guild_id=BAF85407-0DD8-4968-B278-B5BDB0FDD438") 
  let apiChar = fetch("https://api.guildwars2.com/v2/characters?access_token=FC2B1C80-8B27-AC4D-AE8E-7765EBC731F8962612C7-C834-4EA9-9798-64FA7E0C739E&guild_id=91675510-604A-E611-80D4-E4115BD19D24&guild_id=15D1071B-F316-4824-8518-E19D3A7AD79C&guild_id=516E880E-BC84-E911-81AA-D66D0E22CAB6")

  Promise.all([apiOne, apiTwo, apiChar]).then(data => {
    return Promise.all(data.map(r => r.json()))
  }).then(([data, dataGuild, dataChar]) => {
    document.querySelector("#ac").innerText = data.created;
    document.querySelector("#an").innerText = data.name;
    
    document.querySelector("#gOne").innerText = dataGuild.guild_name;
    
    document.querySelector("#charOne").innerText = dataChar[0]
    document.querySelector("#charTwo").innerText = dataChar[1];
    document.querySelector("#charThree").innerText = dataChar[2];
    document.querySelector("#charFour").innerText = dataChar[3];
    document.querySelector("#charFive").innerText = dataChar[4];
    document.querySelector("#charSix").innerText = dataChar[5];
    document.querySelector("#charSeven").innerText = dataChar[6];
    document.querySelector("#charEight").innerText = dataChar[7];
    document.querySelector("#charNine").innerText = dataChar[8];
    document.querySelector("#charTen").innerText = dataChar[9];
    document.querySelector("#charEleven").innerText = dataChar[10];
    document.querySelector("#charTwelve").innerText = dataChar[11];
    document.querySelector("#charThirteen").innerText = dataChar[12];
    document.querySelector("#charFourteen").innerText = dataChar[13];
    document.querySelector("#charFifteen").innerText = dataChar[14];
    document.querySelector("#charSixteen").innerText = dataChar[15];
    
  })
}