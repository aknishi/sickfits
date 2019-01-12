import PleaseSignIn from '../components/PleaseSignIn';
import Permissions from '../components/Permissions';
import OnlyAdmin from '../components/OnlyAdmin';

const PermissionsPage = props => (
  <div>
    <PleaseSignIn>
      <OnlyAdmin>
        <Permissions />
      </OnlyAdmin>
    </PleaseSignIn>
  </div>
);

export default PermissionsPage;
