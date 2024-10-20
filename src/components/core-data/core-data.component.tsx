import { messages } from '@/contents';
import { useGetCoreData } from '@/queries';
import { showToast } from '@/utils';
import { useEffect } from 'react';
import CoreDataModal from './core-data.modal';

const CoreDataComponent = () => {
  const { data, error, loading } = useGetCoreData();

  useEffect(() => {
    if (error.type === 'request') {
      showToast({
        id: 'core-data',
        type: 'error',
        message: messages.errorFetchingData
      });
    }
  }, [error]);

  return <CoreDataModal data={data} isLoading={loading} />;
};

export default CoreDataComponent;
