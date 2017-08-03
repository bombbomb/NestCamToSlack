# NestCamToSlack
An AWS Lambda function to capture a jpg from a nest cam and post it to slack

You need to provide two environment variables:
 - `SLACK_CHANNEL` The slack channel you want to post to.
 - `S3_BUCKET` The S3 Bucket where you'd like to post pics!
 - `HOOK_URL` A Slack Incoming Webhook URL
 - `CAM_URL` Your [Nest Snapshot URL](https://developers.nest.com/documentation/cloud/api-overview#snapshot_url)
