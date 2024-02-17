import { useEffect, useState } from 'react';

export const useOfflineStatus = () => {
  const [offlineStatus, setOfflineStatus] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOfflineStatus = () => {
      setOfflineStatus(!offlineStatus);
    };

    window.addEventListener('online', handleOfflineStatus);
    window.addEventListener('offline', handleOfflineStatus);

    return () => {
      window.removeEventListener('online', handleOfflineStatus);
      window.removeEventListener('offline', handleOfflineStatus);
    };
  }, [offlineStatus]);

  return { offlineStatus };
};
