import React from 'react';
import { useNavigate } from "react-router-dom";

import { createDataInFirebase } from '../lib/firebase'
const Tkmain = () => {
  const createFunc = async () => {

    console.log('start')
    const res = await createDataInFirebase()
    console.log('fin', res)
  }
  return (
    <div>
      <h1>Main画面</h1>
      <Button onClick={createFunc}>DBへ保存</Button>
    </div>
  );
};

export default Tkmain;