import { useState } from 'react';

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (url, options = {}) => {
    try {
      setLoading(true);
      const response = await fetch(url, options);
      const data = await response.json();
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      setError(error);
      throw error;
    }
  };

  const post = async (url, body,token) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // Add Authorization header with Bearer token
      },
      
    };
    if (body) {
      options.body = JSON.stringify(body);
    }
    return await fetchData(url, options);
  };

  const get = async (url, token) => {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // Add Authorization header with Bearer token
      }
    };
    return await fetchData(url, options);
  };
  

  const remove = async (url) => {
    const options = {
      method: 'DELETE',
    };
    return await fetchData(url, options);
  };

  return { loading, error, post, get, remove,fetchData };
};

export default useApi;
