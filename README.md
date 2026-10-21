# QuickKart — AWS Cloud Deployment

QuickKart is a grocery shopping web application deployed as an academic AWS cloud architecture project. The frontend provides product browsing, a cart, and checkout. A Flask API validates submitted carts and stores demonstration orders in Amazon DynamoDB.

## Architecture

```text
Browser (HTML / CSS / JavaScript)
           |
           v
Amazon EC2: Apache HTTP Server (port 80)
           |                    |
     static frontend       /api/ reverse proxy
                                |
                                v
                       Gunicorn + Flask
                       127.0.0.1:5000
                                |
                                v
                      Amazon DynamoDB
                       QuickKartOrders
```

- **Amazon EC2:** Hosts Apache, the static website, and the Flask backend.
- **Amazon S3:** Stores original product images in a private bucket. Authorized copies are retrieved to EC2 and served locally by Apache; the browser does **not** currently fetch them directly from S3.
- **Amazon DynamoDB:** Persists order records, using `orderId` as the partition key.
- **AWS IAM:** The EC2 instance uses `LabInstanceProfile` to access permitted AWS services without embedding long-lived access keys.
- **Amazon CloudWatch:** Provides basic EC2 CPU and network metrics.

## Application flow

1. A user adds products to the cart.
2. JavaScript sends the cart to `POST /api/orders`.
3. Apache forwards `/api/` requests to Gunicorn/Flask.
4. Flask validates product IDs and quantities and recalculates the total using server-side prices.
5. Flask saves the order to DynamoDB and returns an order ID.
6. The website confirms checkout and clears the cart only on success.

The backend also exposes `GET /api/health`.

## Verified demonstration

A sample order of two apples at ₹115 each and one banana at ₹38 totals **₹268**. Checkout was verified through the API and browser, with records visible in DynamoDB.

## Repository organization

- `frontend/`: HTML, CSS, JavaScript, and any checked-in static assets.
- `backend/`: Flask application source and Python dependency declarations (to be added from the EC2 deployment).
- `screenshots/`: AWS Console and deployed-website evidence.

## Deployment notes

The deployed instance uses Amazon Linux, Apache, Gunicorn managed by `quickkart-backend.service`, Flask, and Boto3. The app runs in an AWS Academy Learner Lab environment; public IP addresses and lab availability may change.

## Scope and limitations

This is an academic prototype, not a production store. It does not provide real payment processing, customer authentication, delivery fulfilment, or HTTPS. Do not commit AWS credentials, private keys, `.env` files, or virtual environments.

## Project status

The AWS deployment has been demonstrated. Source files and screenshots are being organized into this repository; the original Flask backend remains on EC2 until exported.
