import Items from '../components/Items';

const ShopPage = props => (
  <div>
    <Items page={props.query.page} />
  </div>
);

export default ShopPage;
