const accountId = 144453
let accountEmail = "sagnikd587@gmail.com"
var aacountPass = "12345"
accountCity = "Jaipur"
/*
prefer not to var - issue in blck scope & functional scope
*/
let accountstate;

// accountId = 2 not allowed

accountEmail = "hc@hc"
aacountPass = "21121212"
accountCity = "Bangaluru"

console.log(accountId);

console.table([accountId, accountEmail, aacountPass, accountCity, accountstate])