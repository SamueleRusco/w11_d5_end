import {
  Navbar,
  Nav,
  Button,
  InputGroup,
  FormControl,
  Form,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BsFillBookFill } from "react-icons/bs";
import { useDispatch } from "react-redux";

const SideBarSpotify = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <div className="col-2 sidebar">
        <Navbar
          bg="navbar"
          variant="white"
          expand="md"
          fixed="left"
          className="justify-content-between"
          id="sidebar"
        >
          <div className="nav-container">
            <Navbar.Brand href="index.html">
              <img
                src="./Spotify_Logo.png"
                alt="Spotify_Logo"
                width="131"
                height="40"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
            <Navbar.Collapse id="navbarNavAltMarkup">
              <Nav className="mr-auto">
                <ul>
                  <li className="ms-0">
                    <Link to="/">
                      <FaHome className="fas fa-home fa-lg" />
                      &nbsp; Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <BsFillBookFill className="fas fa-book-open fa-lg" />
                      &nbsp; Your Library
                    </Link>
                  </li>
                  <li>
                    <Form
                      className="d-flex"
                      onSubmit={(e) => {
                        e.preventDefault();
                        dispatch({
                          type: "SEARCH",
                          payload: e.target[0].value,
                        });
                        navigate("/results");
                      }}
                    >
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Search" />
                      </Form.Group>

                      <Button
                        variant="outline-secondary"
                        size="sm"
                        id="button-addon1"
                        type="submit"
                      >
                        GO
                      </Button>
                    </Form>
                  </li>
                </ul>
              </Nav>
            </Navbar.Collapse>
          </div>

          <div className="nav-btn">
            <Button variant="signup-btn">Sign Up</Button>
            <Button variant="login-btn">Login</Button>
            {/* <a href="#">Cookie Policy</a> |<a href="#"> Privacy</a> */}
          </div>
        </Navbar>
      </div>
    </>
  );
};

export default SideBarSpotify;
