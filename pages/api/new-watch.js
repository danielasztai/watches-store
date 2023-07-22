import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(
      'mongodb+srv://asztai:Nogradiropogos718@cluster0.keivyfp.mongodb.net/watches?retryWrites=true&w=majority'
    );
    const db = client.db();

    const watchesCollection = db.collection('watches');

    const result = await watchesCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: 'Watch succesfully added!' });
  }
};

export default handler;
