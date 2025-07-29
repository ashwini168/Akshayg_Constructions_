from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.message import EmailMessage
import traceback

app = Flask(__name__)
CORS(app)

@app.route('/send-email', methods=['POST'])
def send_email():
    try:
        data = request.get_json()

        msg = EmailMessage()
        msg['Subject'] = data['subject']
        msg['From'] = data['email']
        msg['To'] = 'akshaygonstruction@gmail.com'  # 🔁 REPLACE with your Gmail

        msg.set_content(f"""
        First Name: {data['first_name']}
        Last Name: {data['last_name']}
        Phone: {data['phone']}
        Email: {data['email']}
        Message: {data['message']}
        """)

        # 🔐 REPLACE with your real Gmail and App Password
        server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
        server.login('akshaygconstruction@gmail.com', 'laqm zdyq irzx cxzx')
        server.send_message(msg)
        server.quit()

        return jsonify({"message": "Email sent successfully"}), 200

    except Exception as e:
        print("❌ Error occurred:", e)
        traceback.print_exc()  # 🔍 Full traceback
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
