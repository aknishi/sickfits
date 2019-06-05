import Link from 'next/link';
import WelcomePage from '../components/styles/WelcomePage';

const Home = props => (
  <WelcomePage>
    <Link href="/shop">
      <div className="slider left-section">
        <p>Shop now from a variety of styles and look sharp!</p>
        <h2>BUY</h2>
      </div>
    </Link>
    <Link href="/sell">
      <div className="slider right-section">
        <h2>SELL</h2>
        <p>Sell clothing items and establish your brand!</p>
      </div>
    </Link>
  </WelcomePage>
);

export default Home;
