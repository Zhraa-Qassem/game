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
 class Chalange{
    constructor(id,level){
        this.id = id
        this.level = level
    }
    points(){
        User.log.push(this.id)
        User.xp = this.xp + obj[this.level]  
    }
 }

 var user1 = new User('jad',0,[])
 console.log(user1)
// user1.log(user1)
let ch1 = new Chalange (1,'ME')
 user1.newSolvedChallenge(ch1)

 let ch2 = new Chalange (2,'ME')
 user1.newSolvedChallenge(ch2)

 let ch3 = new Chalange (3,'EA')
 user1.newSolvedChallenge(ch3)

 console.log(user1.xp)
 console.log(user1.log)


