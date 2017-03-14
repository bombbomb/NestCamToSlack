"use strict";

let AWS = require('aws-sdk');
let s3 = new AWS.S3();

let slack = require('slack-notify')(process.env.HOOK_URL);

const s3Bucket = process.env.S3_BUCKET;
const webCamImgUrl = process.env.CAM_URL;

let https = require('https');
let fs = require('fs');

exports.handler = (event, context, callback) => {

    let filename = '/tmp/' + Math.random() + '.jpg';
    download(webCamImgUrl, filename, function() {
        console.log('download complete: ' + filename);

        let fileStream = fs.createReadStream(filename);
        fileStream.on('error', function (err) {
            if (err) { throw err; }
        });
        fileStream.on('open', function () {
            let s3Params = {
                Bucket: s3Bucket,
                Key: Date.now() + '.jpg',
                ACL: 'public-read',
                Body: fileStream
            };

            s3.putObject(s3Params, function(err, r){
                console.log("s3 result", err, r);

                if (err) {
                    callback(err);
                    return;
                }

                slack.send({
                    channel: '#doorbell',
                    icon_url: 'https://s3.amazonaws.com/bbemail/ART/icons/BbLabs.png',
                    text: 'Someone\'s at the door!',
                    username: 'BBLabs',
                    attachments: [
                        {
                            image_url: 'https://s3.amazonaws.com/' + s3Bucket + '/' + s3Params.Key
                        }
                    ]
                }, function() {
                    callback(null, 'All done!');
                });


            }, function (err) {
                if (err) { throw err; }
            });
        });

    });

};


let download = function(url, filename, cb) {
    let file = fs.createWriteStream(filename);
    https.get(url, function(response) {
        response.pipe(file);
        file.on('finish', function() {
            file.close(cb);
        });
    });
};