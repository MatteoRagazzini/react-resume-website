# Personal Website

### View my personal website at [matteoragazzini.com](https://matteoragazzini.com)

---

## Build & Deploy

To build the site locally:

```bash
npm run build
```

---

# Deployment Instructions

This project is deployed as a **static site** to S3 using a dedicated IAM role (`S3DeployRole`) with temporary credentials.

---

## Prerequisites

* AWS CLI v2 installed
* `jq` installed (`brew install jq`)
* `assume_s3_deploy` function added to your `~/.zshrc`

```bash
# Example usage in ~/.zshrc
function assume_s3_deploy() {
  ROLE_ARN="arn:aws:iam::<ACCOUNT_ID>:role/S3DeployRole"

  CREDS_JSON=$(aws sts assume-role \
    --role-arn "$ROLE_ARN" \
    --role-session-name s3deploysession \
    --profile admin \
    --query 'Credentials' \
    --output json)

  export AWS_ACCESS_KEY_ID=$(echo $CREDS_JSON | jq -r '.AccessKeyId')
  export AWS_SECRET_ACCESS_KEY=$(echo $CREDS_JSON | jq -r '.SecretAccessKey')
  export AWS_SESSION_TOKEN=$(echo $CREDS_JSON | jq -r '.SessionToken')

  echo "✅ Assumed S3DeployRole. Temporary credentials exported!"
}
```

---

## Deployment Steps

1. **Assume the S3DeployRole** to get temporary credentials:

```bash
assume_s3_deploy
```

2. **Sync the local static output to S3**:

```bash
aws s3 sync ./out s3://www.matteoragazzini.com --delete --exact-timestamps
```

> **Notes:**
>
> * Make sure `/out` exists — Next.js generates it automatically when `output: 'export'` is set in `next.config.js`.
> * Temporary credentials last ~1 hour; re-run `assume_s3_deploy` if expired.

---

## Optional

* Clean and rebuild the project before deploying:

```bash
rm -rf .next out
npm run build
```

* Then run the deployment steps above.
---

