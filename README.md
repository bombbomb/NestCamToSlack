# NestCamToSlack
An AWS Lambda function to capture a jpg from a nest cam and post it to slack

You need to provide two environment variables:
 - `SLACK_CHANNEL` The slack channel you want to post to.
 - `S3_BUCKET` The S3 Bucket where you'd like to post pics!
 - `HOOK_URL` A Slack Incoming Webhook URL
 - `CAM_URL` Your [Nest Snapshot URL](https://developers.nest.com/documentation/cloud/api-overview#snapshot_url)

RipSecrets<br><br>
We implement pipeline secret scanning on all pull request events to prevent credentials from being merged. If the pipeline scanner detects a secret in your changed files it will gate the pull request and you will need to purge the found credential from your code and re-open the PR. To prevent getting gated by this tool and as best practice you should install the secret scanner locally in a pre-commit hook to prevent the secret from ever being committed to the repo in the first place. You can find documentation on how to set it up locally [here](https://bombbomb.atlassian.net/wiki/spaces/CORE/pages/2039775312/Pipeline+Secret+Scanner+Local+Setup)<br>
Ripsecrets has ways to bypass secret scanning although we should not be ignoring secrets that turn up in the scans. If something is out of your control and blocking the pipeline you can bypass it in one of the following ways<br>
1. Adding "# pragma: allowlist secret" to the end of the line with the secret.<br>
2. Adding the specific secret underneath the "[secrets]" block in .secretsignore<br>
3. Adding the filepath to ignore the whole file aboove the "[secrets]" block in .secretsignore