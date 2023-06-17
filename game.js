// "VE" = "Very Easy"
// "EA" = "Easy"
// "ME" = "Medium"
// "HA" = "Hard"
// "VH" = "Very Hard"
// "EX" = "Expert"


var obj = {
    "VE": 5,
    "EA": 10,
    "ME": 20,
    "HA": 40,
    "VH": 80,
    "EX": 120
}
 class User {
    constructor(name, xp  , log= []){
        this.name = name
        this.xp = xp
        this.log = log
    }
    
    newSolvedChallenge(chalange){
        this.log.push(chalange.id)
        this.xp = this.xp + obj[chalange.level]
        
        // console.log(chalange)
    }
 }

 var user1 = new User('jad',0,[])
 console.log(user1)
// user1.log(user1)



 user1.newSolvedChallenge({
    id : 1,
    level: 'VE'
 })


 let o = {id : 2,level: 'ME'}
 user1.newSolvedChallenge(o)
 console.log(user1.xp)
 console.log(user1.log)


