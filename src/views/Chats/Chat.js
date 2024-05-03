import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as signalR from "@microsoft/signalr";

const ApiBaseUrl = process.env.REACT_APP_BASE_URL

const Chat = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl(`${ApiBaseUrl}/onlineStatusHub`) // Replace with your SignalR hub URL
      .build();

    connection.start().then(() => {
      console.log("Online status hub connected");
    }).catch((error) => {
      console.error("Error connecting to online status hub: ", error);
    });

    connection.on("UpdateOnlineStatus", (userId, online) => {
      setUsers(prevUsers => 
        prevUsers.map(user => 
          user.userId === userId ? { ...user, isOnline: online } : user
        )
      );
    });

    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${ApiBaseUrl}/api/Users`); // Replace with your API endpoint
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();

    return () => {
      connection.stop();
    };
  }, []);

  return (
    <div>

      <h2>List of Users:</h2>
      <ul>
        {users.map(user => (
          <li key={user.userId}>
            {`${user.firstName} ${user.lastName}`} - {user.isOnline ? "Online" : "Offline"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Chat;
