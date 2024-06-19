import { useCallback, useEffect, useState } from 'react';

import { HttpClient } from '@/infra';

// D - SOLID

type Props = {
  httClient: HttpClient;
};

export const useGetUserList = ({ httClient }: Props) => {
  const [users, setUsers] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const getUsers = useCallback(async () => {
    try {
      const response = await httClient.request({
        url: 'https://jsonplaceholder.typicode.com/users/1',
        method: 'get'
      });
      setUsers(response);
    } catch (error) {
      setErrorMessage((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  }, [httClient]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return {
    isLoading,
    errorMessage,
    users
  };
};
