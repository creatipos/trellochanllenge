
const { API_KEY,SERVER_KEY,API_URL} = require('../config');
const fetch = require('node-fetch');
var trello = {};



trello.factory = async function(data){

    console.log("factory",data)
    let fact;
    switch (data.type) {

        case "issue":
          console.log("I am a issue");

          fact = {
            name: data.title,
            idList:data.idList,
            desc: data.description
          }
         
          break;

        case "bug":

        console.log("I am a bug",this.makeid());
         const rand_user = await get_rand_user("61f2b6c2d544f5302ebee13a")
         
          console.log("Rand_User_Select",rand_user)

          fact = {
            name: "bug-Hive-"+this.makeid(),
            idList:data.idList,
            idLabels:["bug"],
            idMembers:[rand_user.idMember],
            desc: data.description
          }

          break;
        case "task":
            
          console.log("I am a task");

          fact = {
            name: data.title,
            idList:data.idList,
            idLabels:[data.category]
          }

          break;
      }

      return fact;

    
};

trello.makeid = function(){

    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 8; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;

 }

trello.apiCard = async data => {
    console.log("api",data)

    const response = await fetch(API_URL+'cards?token='+SERVER_KEY+'&key='+API_KEY+'&idList='+data.idList, {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const json = await response.json();

      return json;
    
};



const get_rand_user = async id => {
    try {

        const response = await fetch(API_URL+'boards/'+id+'/memberships?token='+SERVER_KEY+'&key='+API_KEY, {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      });

      const json = await response.json();

      console.log("length",json.length); // undefined
    
      console.log("rand",json[json.length * Math.random() | 0]);

      return json[json.length * Math.random() | 0];

    } catch (error) {

      console.log(error);

    }


  };




module.exports = trello;