const account_Id = 144553
let accountEmail="ahmadhassan061@gmail.com"
var accountPassword ="123456"
accountCity="Sahiwal"

// account_Id=2 Error : cannot be changed because node js cannot let you do this 

accountEmail = "hc@hc.com"

accountPassword="2121221";

accountCity = "Hassan";

let accountState;

console.log(account_Id);
/*


prefer not to use var because of issue in block scope and 
functional scope
*/
console.table([account_Id,accountEmail,accountPassword,accountCity,accountState])