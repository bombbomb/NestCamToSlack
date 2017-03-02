# NestCamToSlack
An AWS Lambda function to capture a jpg from a nest cam and post it to slack

You need to bring provide two environment variables:
 - `HOOK_URL` A Slack Incoming Webhook URL
 - `CAM_URL` Your [Nest Snapshot URL](https://developers.nest.com/documentation/cloud/api-overview#snapshot_url)
