let crypto = require('crypto');
let ByteBuffer = require("bytebuffer");
let sodium = require('sodium').api;
let base58check = require('./base58check')
const NORMAL_PREFIX = 'A' // A

let secret = 'dance table casual identify staff acquire thought expire merit capable carry stem'


function Create(data){
    let info = {
        name:data.name,
        eid:data.eid,
        age:data.age
    };
    data.signature = Sign(keypair,data);
    return data;
}
function getBytes(data){
  
bb = new ByteBuffer(1, true);
bb.writeString(data.name);
bb.writeInt(data.eid);
bb.writeInt(data.age);

bb.flip();
bytes = bb.toBuffer();
return bytes;

}

function MakeKeypair(hash) {
    var keypair = sodium.crypto_sign_seed_keypair(hash);
    return {
      publicKey: keypair.publicKey,
      privateKey: keypair.secretKey
    };
  }


function Signing(hash, keypair) { 
    var s = sodium.crypto_sign_detached(hash, Buffer.from(keypair.privateKey, 'hex'));
    console.log("signature :"+s)
    return sodium.crypto_sign_detached(hash, Buffer.from(keypair.privateKey, 'hex'));
  }

function generateBase58CheckAddress(publicKey) {
  if (typeof publicKey === 'string') {
    publicKey = Buffer.from(publicKey, 'hex')
  }
  var h1 = crypto.createHash('sha256').update(publicKey).digest()
  var h2 = crypto.createHash('ripemd160').update(h1).digest()
  return NORMAL_PREFIX + base58check.encode(h2)
}



function Sign(Keypair,data){  
  let hash = getHash(data);
  return Signing(hash,Keypair).toString('hex');
  
}


function getHash(data){
   return crypto.createHash('sha256').update(getBytes(data)).digest();

}

function verify(bytes, publicKey, signature) {
  try {
    var data2 = new Buffer(bytes.length);

    for (var i = 0; i < data2.length; i++) {
      data2[i] = bytes[i];
    }

    var hash = crypto.createHash('sha256').update(data2).digest();
    var signatureBuffer = new Buffer(signature, 'hex');
    var publicKeyBuffer = new Buffer(publicKey, 'hex');
    console.log
    var res = Verification(hash, signatureBuffer || ' ', publicKeyBuffer || ' ');
  } catch (e) {
    throw Error(e.toString());
  }
   console.log("verify:"+res)
  return res;

}

function Verification(hash, signatureBuffer, publicKeyBuffer) {
return sodium.crypto_sign_verify_detached(signatureBuffer, hash, publicKeyBuffer);
} 



var hash = crypto.createHash('sha256').update(secret, 'utf8').digest();
var keypair = MakeKeypair(hash);
var publicKey = keypair.publicKey.toString('hex');
var senderId = generateBase58CheckAddress(publicKey);
data = new Create({name:'Vinodh',eid:1,age:23});
console.log(publicKey)
var s = Sign(keypair,data)
let vb = verify(bytes,publicKey,s)

//verify

//  function Verify(data,sender,cb){
  
  //  // Check sender
  // if (!sender) {
  //   return setImmediate(cb, "Invalid sender");
  // }

  //  try {
  //   var valid = false;

  //   if (PublicKey) {
  //     valid = this.verifySignature(data, PublicKey, data.signature);
  //   }
  // } catch (e) {
  //   return setImmediate(cb, e.toString());
  // }

  // if (!valid) {
  //   return setImmediate(cb, "Failed to verify signature");
   
  // }

  // function verifySignature(data, publicKey, signature) {
  //     var bytes = getBytes(data, true, true);
  //     var res = this.verifyBytes(bytes, publicKey, signature);

  
  //   return res;
  // }




