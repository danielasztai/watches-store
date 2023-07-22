import NewWatchForm from '@/components/watches/NewWatchForm';
import { useRouter } from 'next/router';

const addNewWatch = () => {
  const router = useRouter();

  const addNewWatchHandler = async enteredWatchData => {
    const response = await fetch('/api/new-watch', {
      method: 'POST',
      body: JSON.stringify(enteredWatchData),
      headers: { 'Content-type': 'application/json' },
    });

    const data = await response.json();

    console.log(data);

    router.push('/watches');
  };

  return <NewWatchForm onAddNewWatch={addNewWatchHandler} />;
};

export default addNewWatch;
