import PleaseSignIn from '../components/PleaseSignIn';
import Profile from '../components/MyProfile';

const Account = props => (
  <div>
    <PleaseSignIn>
      <Profile />
    </PleaseSignIn>
  </div>
);

export default Account;
