from flask import Flask,  request
from controller import get_users,get_user_by_id,insert_user,update_user,delete_user
app = Flask(__name__)

@app.route('/users', methods=['GET'])
def route_get_users():
    return get_users()

@app.route('/users/<user_id>', methods=['GET'])
def route_get_user(user_id):
    return get_user_by_id(user_id)

@app.route('/users/add',  methods = ['POST'])
def route_add_user():
    user = request.get_json()
    return insert_user(user)

@app.route('/users/update',  methods = ['PUT'])
def route_update_user():
    user = request.get_json()
    return update_user(user)

@app.route('/users/delete/<user_id>',  methods = ['DELETE'])
def route_delete_user(user_id):
    return delete_user(user_id)