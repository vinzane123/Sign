let ed = require('./ed.js')
let crypto = require('crypto');
let ByteBuffer = require("bytebuffer");


secret1 = 'dance table casual identify staff acquire thought expire merit capable carry stem';
secret2 =  'offer cry duck relief work nerve concert penalty demand impulse bonus vague';

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
// console.log(bytes)
return bytes

}
    


function UniversitySign (certificatedata,secret1){
var datahash =  crypto.createHash('sha256').update(getBytes(certificatedata)).digest();
var secrethash = crypto.createHash('sha256').update(secret1, 'utf8').digest();
var Keypair = ed.MakeKeypair(secrethash);
publicKey = Keypair.publicKey.toString('hex');
univsign = ed.Sign(datahash,Keypair) 
console.log("univsign :"+univsign)

}

function StudentSign(certificatedata,secret2){
    
var datahash =  crypto.createHash('sha256').update(getBytes(certificatedata)).digest();
var secrethash = crypto.createHash('sha256').update(secret2, 'utf8').digest();  
var Keypair = ed.MakeKeypair(secrethash);                                      
var publicKey = Keypair.publicKey.toString('hex');
stusign = ed.Sign(datahash,Keypair)
console.log("studentsign :"+stusign)
}

function Verify(bytes,publicKey,univsign){
try {
    var data2 = new Buffer(bytes.length);
    console.log("data2"+typeof(data2))

    for(var i = 0; i<data2.length;i++){
        data2[i] = bytes[i];
    }
     
    var hash = crypto.createHash('sha256').update(data2).digest();
    var signatureBuffer = new Buffer(univsign, 'hex');
    console.log("from verify :"+signatureBuffer)
    var publicKeyBuffer = new Buffer(publicKey, 'hex');
    var res = ed.Verify(hash, signatureBuffer || ' ', publicKeyBuffer || ' ');
   } catch(e) {
     throw Error(e.toString());
   } 
   return res;   
}

function VerifySign(data,publicKey,stusign){                 
    var byt = getBytes(data)
    var res = Verify(byt,publicKey,stusign)
    console.log("VerifySign :"+res)
    return res;
}

certificatedata = new Create({name:'Vinodh',eid:1,age:23});
var u = UniversitySign(certificatedata,secret1);
var s = StudentSign(certificatedata,secret2);
var v = Verify(bytes,publicKey,univsign);
var vsi =VerifySign(certificatedata,publicKey,univsign)


// Schema : Certificate can be signed by the University & Student. Third-Party can also verify student's signature.