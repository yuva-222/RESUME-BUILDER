const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

let db = null;

async function connect() {
  try {
    await client.connect();
    db = client.db(); // Optionally specify the database name, e.g., client.db('myDatabase')
    console.log('Connected successfully to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    throw error; // Re-throw the error to handle it elsewhere
  }
}

function getDb() {
  if (!db) {
    throw new Error('Database not connected');
  }
  return db;
}

module.exports = { connect, getDb };
