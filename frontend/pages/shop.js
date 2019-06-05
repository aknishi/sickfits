import Items from '../components/Items';

const ShopPage = props => (
  <div>
    <Items page={parseFloat(props.query.page) || 1} />
  </div>
);

export default ShopPage;
