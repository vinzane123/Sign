
let ByteBuffer = require('bytebuffer')
let sodium = require('sodium').api;
let base58check = require('./base58check')
const NORMAL_PREFIX = 'A' // A
let crypto = require('crypto')

let Obj =  function Register(name,eid,age)
{
    this.name = name,
    this.eid = eid,
    this.age = age
}
let c = new Obj("Vinodh",2,23)
let d = c.name + c.eid.toString() + c.age.toString();
console.log(d);

let buffer = new ByteBuffer(1,true)
buffer.writeString(d)
buffer.flip()
let bytes = buffer.toBuffer()

console.log(bytes);

let secret = 'dance table casual identify staff acquire thought expire merit capable carry stem'

function MakeKeypair(hash) {
    var keypair = sodium.crypto_sign_seed_keypair(hash);
    return {
      publicKey: keypair.publicKey,
      privateKey: keypair.secretKey
    };
  }

function Sign(dhash, keypair) {
   return sodium.crypto_sign_detached(dhash, Buffer.from(keypair.secretKey, 'hex'));
 }
 
function generateBase58CheckAddress(publicKey) {
    if (typeof publicKey === 'string') {
      publicKey = Buffer.from(publicKey, 'hex')
    }
    var h1 = crypto.createHash('sha256').update(publicKey).digest()
    var h2 = crypto.createHash('ripemd160').update(h1).digest()
    return NORMAL_PREFIX + base58check.encode(h2)
  }

var hash = crypto.createHash('sha256').update(secret, 'utf8').digest();
var keypair = MakeKeypair(hash);
var publicKey = keypair.publicKey.toString('hex');
var senderId = generateBase58CheckAddress(publicKey);
var privateKey = keypair.privateKey.toString()



console.log("SenderId -Sodium :"+senderId);
console.log("Public Key -Sodium :"+publicKey)
console.log(privateKey)


