import { MongoClient } from 'mongodb';

import WatchesList from '../../components/watches/WatchesList';

const Watches = props => {
  return <WatchesList watches={props.watches} />;
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    'mongodb+srv://asztai:Nogradiropogos718@cluster0.keivyfp.mongodb.net/watches?retryWrites=true&w=majority'
  );
  const db = client.db();

  const watchesCollection = db.collection('watches');

  const watches = await watchesCollection.find().toArray();

  client.close();

  return {
    props: {
      watches: watches.map(watch => ({
        image: watch.image,
        brand: watch.brand,
        price: watch.price,
        id: watch._id.toString(),
      })),
    },
    revalidate: 5,
  };
}

export default Watches;
