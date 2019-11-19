module.exports = {
    /*For example, a user with a public key of "1234" and a private key of "abcd" 
    could construct a valid call as follows: 
    http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150 
    (the hash value is the md5 digest of 1abcd1234)*/
    marvel_api_ts: 1,
    marvel_api_apikey: "MARVEL API KEY",
    marvel_api_hash: "HASH - VER INSTRUCOES ACIMA",
    //Connect a API da Marvel
    git_api_clientID: "GITHUB_CLIENT_ID",
    git_api_clientSecret: "GITHUB_CLIENT_SECRET",
    git_api_callbackURL: "http://localhost:3000/auth/github/callback"

};