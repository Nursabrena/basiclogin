let dbUsers =[
    {
        username: "Nursabrena",
        password: "12346",
        name: "nursabrena",
        email: "nrsbrnaaaa11@utem.edu.my"
    },
    {
        username: "John",
        password: "password",
        name: "john",
        email: "john@utem.edu.my"
    },
    {
        username: "ali",
        password: "54321",
        name: "Ali",
        email: "ali@utem.edu.my"
    }
]


function login(reqUsername, reqPassword) {
   let matchUser = dbUsers.find(
    x => x.username == reqUsername)     //cari username tu sama x dengan yang sstem sedia ada


    if(!matchUser) return "User not found!"   //kalau dia tkde dia tulis ni,

    if(matchUser.password == reqPassword) {  //ni kalau sama
       return matchUser                     //kalau ada return balik kt matchuser

     } else {
    return "Invalid password"              //kalau takde dia tulis invalid password
   }
}
   

function register(reqUsername, reqPassword, reqName, reqEmail){
    dbUsers.push({
        username: reqUsername,
        password: reqPassword,
        name: reqName,
        email: reqEmail
    })
}

//try to login 

console.log( login("Nursabrena","12346")) //try to call function ada x nama org sama
console.log( login("utem","Password"))   


register("utem","password","fkekk","fkekk@m.com")
//try to login again
console.log( login("utem","password"))  
