import { MongoClient, ObjectId } from 'mongodb';
import WatchDetails from '@/components/watches/WatchDetails';

const DetailPage = props => {
  return <WatchDetails watchDetails={props.watchDetails} />;
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

  const selectedWatch = await watchesCollection.findOne({
    _id: new ObjectId(watchId),
  });

  client.close();

  return {
    props: {
      watchDetails: {
        id: selectedWatch._id.toString(),
        title: selectedWatch.title,
        price: selectedWatch.price,
        image: selectedWatch.image,
        material: selectedWatch.material,
      },
    },
  };
}

export default DetailPage;
