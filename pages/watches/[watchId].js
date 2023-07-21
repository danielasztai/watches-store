import { useRouter } from 'next/router';

const DetailPage = () => {
  const router = useRouter();

  return <p>{router.query.watchId}</p>;
};

export default DetailPage;
