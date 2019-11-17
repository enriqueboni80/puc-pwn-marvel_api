module.exports.params = {
    /*For example, a user with a public key of "1234" and a private key of "abcd" 
    could construct a valid call as follows: 
    http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150 
    (the hash value is the md5 digest of 1abcd1234)*/
    ts: 1,
    apikey: "MARVEL API KEY",
    hash: "HASH - VER INSTRUCOES ACIMA"
};