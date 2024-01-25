const express = require('express');
const bodyParser= require('body-parser');

const { MongoClient, ObjectId } = require('mongodb');

let _usersCollectionName="users";

const uri = 'mongodb://127.0.0.1:27017/PracticeDb';

const client= new MongoClient(uri,{ useNewUrlParser: true, useUnifiedTopology: true });

client.connect().then(()=>{
   console.log("Connection Established Successfully..!");
});
   let _db=client.db();

   let users=_db.collection(_usersCollectionName);

   users.insertMany([{
        name:'Milky',
        email:'milky@gmail.com',
        phone:'9999999999',
        role:'Invester',
   },
   {
    name:'Chinnu',
    email:'chinnu@gmail.com',
    phone:'9874563211',
    role:'Entrepreneur',
},
   {
    name:'Lucky',
    email:'Lucky@gmail.com',
    phone:'9988774455',
    role:'Entrepreneur',
}]).then(()=>{
    console.log("Records Instered Successfully..!");
   
}).catch(error=>{
    console.log(error);
});


let projects=_db.collection("projects");

projects.insertMany([{
     name:'ZeroZoner',
     description:'From Zero To Hero',
     conceptFile:'concept1.txt',
},
{
    name:'LetsMarry',
    description:'A plotform for singles to become a couple',
    conceptFile:'concept2.txt',
}
]).then(()=>{
 console.log("Project Records Instered Successfully..!");
});
 let user_wallets=_db.collection("user_wallets");

user_wallets.insertMany([{
     accno:1234567890,
     Bank :'SBI',
     IFSC:'SBIN000887',
     upiid:'abcdef@ybl'
},
{
    accno:9876543210,
    Bank :'UBI',
    IFSC:'UBIN000007',
    upiid:'xyz@ybl'
}]).then(()=>{
 console.log("User Wallets  Instered Successfully..!");
});
 let transactions=_db.collection("transactions");

 transactions.insertMany([{
      tran_id:1111,
      date :'01-01-2024',
      time:'2.30pm',
      paymentMode:'Netbanking',
      fromAccno:1234567890,
      toAcc:9874563210,
      amount:5000.00
 },
 {
    tran_id:2222,
    date :'04-01-2024',
    time:'11.30am',
    paymentMode:'PhonePay',
    fromAccno:1234567890,
    toAcc:9874563210,
    amount:3000.00
}]).then(()=>{
  console.log("Transaction History Records Instered Successfully..!");
  //  let id=new ObjectId("65b275faaf0b65f2db3932da");
 // users.deleteOne({_id:id}).then(()=>{
 //   console.log("deleted");
 // });
}).catch(error=>{
 console.log(error);
});


const app=express();
app.use(bodyParser.json());


app.listen(3000,()=>{
    console.log("server running on 3000");
});