"use strict";

let slack = require('slack-notify')(process.env.HOOK_URL);

const webCamImgUrl = process.env.CAM_URL;

exports.handler = (event, context, callback) => {

    slack.send({
        channel: '#doorbell',
        icon_url: 'https://s3.amazonaws.com/bbemail/ART/icons/BbLabs.png',
        text: 'Someone\'s at the door!',
        username: 'BBLabs',
        attachments: [
            {
                image_url: webCamImgUrl + '&r=' + Math.random()
            }
        ]
    }, function() {
        callback(null, 'Hello from Lambda');
    });

};