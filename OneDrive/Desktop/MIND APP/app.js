const { MongoClient } = require('mongodb');


const uri = "mongodb+srv://Saj:Sajcj@123@cluster0.gya3u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; 

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas!");
    
    
    const databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
  } finally {
    await client.close();
  }
}

run().catch(console.error);
