
"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserContext from './userContext';

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/user/me'); 
        setUser(response.data); 
      } catch (error) {
        console.error('Error fetching user:', error);
        setUser(null);
      }
    };

    fetchData();
  }, []);

  return (
    <UserContext.Provider value={({user,setUser})}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
