import Reset from '../components/Reset';

const ResetPass = props => (
  <div>
    <p>Reset your password {props.query.resetToken}</p>
    <Reset resetToken={props.query.resetToken}/>
  </div>
);

export default ResetPass;
