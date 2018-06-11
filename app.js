const request = require('request');
const fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
         console.log('Response Status Code: ', response.statusCode);
       })
       .pipe(fs.createWriteStream('/Users/jordan/lighthouse/w2d1/Scripting-HTTP-Requests-with-the-Request-Package/future.jpg'), console.log('writing file'));