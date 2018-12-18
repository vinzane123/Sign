const createKeccakHash = require('keccak')
const crypto = require('crypto')
let ByteBuffer = require("bytebuffer");
var ed = require('./ed.js')

// console.log(createKeccakHash('keccak256').digest().toString('hex'))

// console.log(createKeccakHash('keccak256').update(getbytes).digest('hex'))

secret1 = 'dance table casual identify staff acquire thought expire merit capable carry stem';

function Create(certificatedata){
    let info = {
        name:certificatedata.name,
        eid:certificatedata.eid,
        age:certificatedata.age
    };
    
    return certificatedata;
}


function getBytes(certificatedata){
bb = new ByteBuffer(1, true);
bb.writeString(certificatedata.name);
bb.writeInt(certificatedata.eid);
bb.writeInt(certificatedata.age);
bb.flip();
bytes = bb.toBuffer()
return bytes

}
    
function Sign(certificatedata,secret){
datahash = createKeccakHash('keccak256').update(getBytes(certificatedata)).digest();
console.log(certificatedata)
secrethash =createKeccakHash('keccak256').update(secret, 'utf8').digest();
var Keypair = ed.MakeKeypair(secrethash);
publicKey = Keypair.publicKey.toString('hex');
sign = ed.Sign(datahash,Keypair) 
console.log("From Keccak:" +sign)
}


function Verify(bytes,publicKey,univsign){
    try {
        var data2 = new Buffer(bytes.length);
        for(var i = 0; i<data2.length;i++){
            data2[i] = bytes[i];
        }
         
        var hash = createKeccakHash('keccak256').update(data2).digest();
        var signatureBuffer = new Buffer(univsign, 'hex');
        var publicKeyBuffer = new Buffer(publicKey, 'hex');
        var res = ed.Verify(hash, signatureBuffer || ' ', publicKeyBuffer || ' ');
       } catch(e) {
         throw Error(e.toString());
       } 
       return res;   
    }
    
    function VerifySign(data,publicKey,stusign){   
        console.log(data)            
        var byt = getBytes(data)
        var res = Verify(byt,publicKey,stusign)
        console.log(" VerifySign : "+res)
        return res;
    }


certificatedata = new Create({name:'Vinodh',eid:1,age:23});
var dat = {
    "toaddr": "Address1",
    "id": "234",
    "email": "safesf@yopmail.com",
    "empid": "gaegegs",
    "name": "Vinodh",
    "employer": "Belfrics",
    "month": "06",
    "year": "2018",
    "designation": "Programmer",
    "bank": "Andhra Bank",
    "accountNumber": "123456789",
    "pan": "234555",
    "basicPay": "25000",
    "hra": "234",
    "lta": "254",
    "ma": "34",
    "providentFund": "543",
    "professionalTax": "342",
    "grossSalary": "52454",
    "totalDeductions": "2545433",
    "netSalary": "2345453",
    "timestamp": "1543814681707",
    "success": true
 }
var signs =  Sign(dat,secret1);
// var v1 = VerifySign(certificatedata,publicKey,sign)
certificate = new Create({name:'Vinodh',age:23,eid:1});
// var s2 = Sign(certificate,secret1)
var v2 = VerifySign(certificate,publicKey,sign )