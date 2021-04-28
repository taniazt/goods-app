import { useState, useEffect } from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';
// import { getGoods } from './goods';
import { goodsFromServer } from './api';

function App() {
  const [goods, setGoods] = useState([]);

  // useEffect(() => {
  //   getGoods()
  //     .then(result => setGoods(result));
  // }, []);

  useEffect(() => {
    setGoods(goodsFromServer);
  }, []);

  return (
    <div className="page">
      <h1 className="my-title">Goods App</h1>
      <div className="container">
        <GoodsList goods={goods} />
      </div>
    </div>
  );
}

export default App;
