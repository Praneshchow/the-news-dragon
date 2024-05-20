import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';


const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }

    return (
        <Container>
            <Navbar expand="lg" className="mt-3 mb-3">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto gap-3">
                            <Link className='text-decoration-none ms-5' to="/category/0">Home</Link>
                            <Link className='text-decoration-none' to="/category/0">About</Link>
                            <Link className='text-decoration-none' to="/category/0">Career</Link>
                        </Nav>

                        <Nav className='align-items-center'>
                            {user &&
                                <FaUser style={{ fontSize: '1.5rem' }} />
                            }

                            {
                                user ?
                                    <Button onClick={handleLogOut} variant="primary">Logout</Button> :
                                    <Link to="/login">
                                        <Button variant="primary">Login</Button>
                                    </Link>
                            }

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;