import React from 'react';
import { useParams } from 'react-router-dom';
const StChat = () => {
  const { name } = useParams()
  return (
    <div>
      <h1>{name}'s page</h1>
    </div>
  );
};

export default StChat;
