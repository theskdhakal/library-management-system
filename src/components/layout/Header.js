import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { GoSignIn, GoSignOut } from "react-icons/go";
import { FaUserEdit } from "react-icons/fa";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firbease-config";

export const Header = () => {
  const { user } = useSelector((state) => state.user);

  const handleOnLogout = ({ user }) => {
    signOut(auth).then(() => {
      //set user state to empty{}
    });
  };
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand>
          <Link to="/">DL</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {}
            <Link to="/signin" className="nav-link">
              <GoSignIn className="fs-3" />
            </Link>
            <Link to="/signup" className="nav-link">
              <FaUserEdit className="fs-3" />
            </Link>
            <Link to="#" className="nav-link" onClick={handleOnLogout}>
              <GoSignOut className="fs-3" />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
