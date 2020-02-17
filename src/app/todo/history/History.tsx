import React, {useContext} from 'react';
import UserContext from './../User/UserContext';
import {historyService} from './historyService';

const getTime = (acTime: number) => {
  const currentTime: number = Math.floor(Date.now() / 1000);
  const difference = currentTime - acTime;
  if (difference < 60) {
    return `${difference} Secs ago`;
  }
  if (difference < 3600) {
    return `${Math.floor(difference / 60)} mins ago`;
  }
  return `${Math.floor(difference / 1440)} days ago`;
};

const History = () => {
  const userId = useContext(UserContext);
  return (
    <ul className="list-group">
      {historyService.getHistory(userId.id).map((history) => (
        <li key={`${history.time} - ${history.userId}`} className="list-group-item">
          {history.action} {getTime(history.time)}
        </li>
      ))}
    </ul>
  );
};

export default History;
