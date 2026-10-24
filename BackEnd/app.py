from flask import Flask, request, jsonify
import boto3
import uuid
from datetime import datetime, timezone
from botocore.exceptions import ClientError

app = Flask(__name__)

dynamodb = boto3.resource("dynamodb", region_name="us-east-1")
table = dynamodb.Table("QuickKartOrders")

PRODUCTS = {
    1: ("Amul Milk", 62),
    2: ("Eggs", 54),
    3: ("Amul Butter", 249),
    4: ("Aloo Bhujia", 85),
    5: ("Amul Cheese", 129),
    6: ("Apples", 115),
    7: ("Fresh Bananas", 38),
    8: ("Butter Popcorn", 85),
    9: ("Nachos with Cheese", 99),
    10: ("Potato Chips", 20),
    11: ("Oreo Biscuits", 55),
    12: ("Spicy Masala Fries", 35),
    13: ("Cola Cold Drink", 48),
    14: ("Orange Juice", 105),
    15: ("Energy Drink", 118),
    16: ("Dark Chocolate Bar", 65),
    17: ("Vanilla Ice Cream", 149),
    18: ("Paneer", 65),
    19: ("Potatoes", 45),
    20: ("Instant Noodles", 70),
    21: ("Whole Wheat Bread", 42),
    22: ("Butter cookies", 75),
    23: ("Fresh Broccoli", 55),
    24: ("Organic Spinach", 35)
}

@app.route("/api/health", methods=["GET"])
def health():
    return jsonify({"status": "ok"})

@app.route("/api/orders", methods=["POST"])
def create_order():
    data = request.get_json(silent=True)

    if not isinstance(data, dict):
        return jsonify({"error": "Invalid request"}), 400

    cart = data.get("cart")

    if not isinstance(cart, dict) or not cart:
        return jsonify({"error": "Cart is empty or invalid"}), 400

    items = []
    total = 0

    for product_id, quantity in cart.items():
        try:
            pid = int(product_id)
        except (ValueError, TypeError):
            return jsonify({"error": "Invalid product ID"}), 400

        if (
            pid not in PRODUCTS
            or isinstance(quantity, bool)
            or not isinstance(quantity, int)
            or quantity < 1
            or quantity > 100
        ):
            return jsonify({"error": "Invalid product or quantity"}), 400

        name, price = PRODUCTS[pid]
        subtotal = price * quantity

        items.append({
            "productId": pid,
            "name": name,
            "quantity": quantity,
            "price": price,
            "subtotal": subtotal
        })

        total += subtotal

    order_id = str(uuid.uuid4())

    order = {
        "orderId": order_id,
        "createdAt": datetime.now(timezone.utc).isoformat(),
        "items": items,
        "totalAmount": total,
        "status": "Placed"
    }

    try:
        table.put_item(Item=order)
    except ClientError:
        app.logger.exception("DynamoDB write failed")
        return jsonify({"error": "Unable to save order"}), 503

    return jsonify({
        "message": "Order placed successfully",
        "orderId": order_id,
        "totalAmount": total
    }), 201

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000)
