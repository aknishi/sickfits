import Shop from './shop';

const Home = props => (
  <div>
    <Shop page={parseFloat(props.query.page) || 1} />
  </div>
);

export default Home;
