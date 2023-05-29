const crypto = require("crypto");

const algorithm = "aes-256-cbc"; 

// generate 16 bytes of random data
let initVector = crypto.randomBytes(16);
for (let i = 0; i < 16; i++) {
    initVector[i] = i+1
}

// protected data
const message = `This is a secret message...`;

// secret key generate 32 bytes of random data
const Securitykey = stringToBuffer("32");


// the cipher function
const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);

// encrypt the message
// input encoding
// output encoding
let encryptedData = cipher.update(message, "utf-8", "hex");

console.log(encryptedData);

encryptedData += cipher.final("hex");

console.log(encryptedData);


initVector = crypto.randomBytes(16);
for (let i = 0; i < 16; i++) {
    initVector[i] = i+1
}

const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);

let decryptedData = decipher.update(encryptedData, "hex", "utf-8");

decryptedData += decipher.final("utf8");

console.log("Decrypted message: " + decryptedData);

console.log(Securitykey);
console.log(initVector);
console.log(initVector[0]);
console.log(typeof initVector);
console.log(Object.entries(initVector));
console.log(Object.entries(Securitykey));















function stringToBuffer(str) {
    const buffer = crypto.randomBytes(32);
    let i = 0

    for (; i < 32; i++) {
        buffer[i] = i < str.length ? str[i] : i
    }
    
    return buffer
}