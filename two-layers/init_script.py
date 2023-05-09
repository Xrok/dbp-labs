import sqlite3

connection = sqlite3.connect('database.db')

curr = connection.cursor()


curr.execute(""" 
    CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
);
    """)


curr.execute("INSERT INTO users (username, password) VALUES (?, ?)",
            ('username33', 'supersecret')
            )


connection.commit()
connection.close()