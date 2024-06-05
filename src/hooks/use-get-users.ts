import { useState, useEffect } from 'react';

import axios from 'axios';

export const useGetUsers = () => {
  const [users, setUsers] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users/1')
      .then((response) => setUsers(response.data))
      .finally(() => setIsLoading(false));
  }, []);

  return {
    users,
    isLoading
  };
};
