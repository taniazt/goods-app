import './GoodsList.scss';
import PropTypes from 'prop-types';
import { GoodsItem } from '../GoodsItem';

export const GoodsList = ({
  goods = [],
}) => (
  <div className="goods">
    {goods.map(goodsItem => (
      <GoodsItem key={goodsItem.id} {...goodsItem} />
    ))}
  </div>
);
