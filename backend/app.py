from flask import Flask, jsonify, request
from flask_cors import CORS
import json
from flask_mysqldb import MySQL

app = Flask(__name__)
CORS(app)

# MySQL configurations
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'youstyle'

mysql = MySQL(app)

@app.route('/')
def hello():
    return 'Hello, World!'

@app.route('/get_data', methods=['GET'])
def get_data():
    filename = request.args.get('filename')
    with open(f'./data/{filename}', 'r') as file:
        data = json.load(file)
    return jsonify(data)


@app.route('/api/clients', methods=['POST'])
def create_client():
    print("Request:", request.get_json(), flush=True)
    try:
        # Get the data from the request
        data = request.get_json()
        first_name = data['first_name']
        last_name = data['last_name']
        phone_number = data['phone_number']
        password = data['password']

        print("Data:", data, flush=True)

        # Establish a connection to the database
        cursor = mysql.connection.cursor()

        # Execute a simple query to insert a new client into the 'clients' table
        cursor.execute("INSERT INTO clients (first_name, last_name, phone_number, password) VALUES (%s, %s, %s, %s)", (first_name, last_name, phone_number, password))

        # Commit the transaction
        mysql.connection.commit()

        return jsonify({'message': 'Client created successfully!'})

    except Exception as e:
        return jsonify({'error': str(e)})

    finally:
        # Close the database connection
        cursor.close()


@app.route('/api/clientssss', methods=['GET'])
def get_clients():
    
    try:
        # Establish a connection to the database
        cursor = mysql.connection.cursor()

        # Execute a simple query to fetch all clients from the 'clients' table
        cursor.execute("SELECT * FROM clients")
        data = cursor.fetchall()

         # Print the result to the terminal
        # print("Query Result:", data)

        
        # Convert the result to a JSON format
        clients = [{'id': row[0], 'name': row[1], 'email': row[2]} for row in data]

        # print("Query Result:", clients, flush=True)

        return jsonify({'clients': clients})

    except Exception as e:
        return jsonify({'error': str(e)})

    finally:
        # Close the database connection
        cursor.close()

if __name__ == '__main__':
    app.run(debug=True)
