import { MongoClient, ObjectId } from 'mongodb';
import WatchDetails from '@/components/watches/WatchDetails';
import { Fragment } from 'react';

const DetailPage = props => {
  return (
    <Fragment>
      <WatchDetails
        watchDetails={props.watchDetails}
        listOfWatches={props.allWatchesExceptSelected}
      />
    </Fragment>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://asztai:Nogradiropogos718@cluster0.keivyfp.mongodb.net/watches?retryWrites=true&w=majority'
  );
  const db = client.db();

  const watchesCollection = db.collection('watches');

  const watches = await watchesCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: 'blocking',
    paths: watches.map(watch => ({
      params: { watchId: watch._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const watchId = context.params.watchId;

  const client = await MongoClient.connect(
    'mongodb+srv://asztai:Nogradiropogos718@cluster0.keivyfp.mongodb.net/watches?retryWrites=true&w=majority'
  );
  const db = client.db();

  const watchesCollection = db.collection('watches');

  const allWatchesExceptSelected = await watchesCollection.find().toArray();

  const selectedWatch = await watchesCollection.findOne({
    _id: new ObjectId(watchId),
  });

  client.close();

  return {
    props: {
      watchDetails: {
        id: selectedWatch._id.toString(),
        brand: selectedWatch.brand,
        price: selectedWatch.price,
        image: selectedWatch.image,
        material: selectedWatch.material,
        movement: selectedWatch.movement,
        model: selectedWatch.model,
        year: selectedWatch.year,
        condition: selectedWatch.condition,
        diameter: selectedWatch.diameter,
        gender: selectedWatch.gender,
      },

      allWatchesExceptSelected: allWatchesExceptSelected
        .map(watch => ({
          image: watch.image,
          brand: watch.brand,
          price: watch.price,
          id: watch._id.toString(),
        }))
        .filter(watch => watchId !== watch.id),
    },
  };
}

export default DetailPage;
