import React from 'react';
import { useNavigate,useParams } from 'react-router-dom';
const StChat = () => {
  const { name } = useParams()
  const navigate = useNavigate();
  const movePage = () => {
    navigate(`/stlogin`);
  }
  return (
    <div>
      <button
        onClick={movePage}
      >戻る</button>
      <h1>{name}'s page</h1>
    </div>
  );
};

export default StChat;
