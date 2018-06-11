const request = require('request');
const fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
         console.log('Response Status Code: ', response.statusCode);
         console.log('Response Message: ', response.statusMessage);
         console.log('Response content type: ', response.headers['content-type']);
       })
       .pipe(fs.createWriteStream('./future.jpg'), console.log('writing file'));
       console.log('COMPLETE');
       