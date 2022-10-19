import { Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Loginalert.css";
const LoginAlert = ({ errorMessage: message, errorType: type }) => {
  return (
    <Alert className="AlertBox" show={message} variant={type}>
      {message}
    </Alert>
  );
};

export default LoginAlert;
