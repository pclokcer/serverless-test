#### SERVERLESS

your_access_key_id = aws IAM user key
<br>
your_access_key_secret = aws IAM secret key

```sh
serverless config credentials --provider aws --key <your_access_key_id> --secret <your_access_key_secret>
serverless create --template hello-world
serverless deploy
```