import { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import useTitle from "../../../hooks/useTitle";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);

    useTitle("Register")

    const handleRegister = event => {
        event.preventDefault();             // prevent the page loading. 

        // console.log(event.target.name.value);
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        // console.log(name, photo, email, password);
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                // console.log(createdUser);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked);
    }

    return (
        <Container className="w-25 mx-auto mt-5">
            <h3>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name="photo" placeholder="Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check 
                    onClick={handleAccepted}
                    type="checkbox" 
                    name="accept" 
                    label={<>Accept <Link to="/terms">Agree terms and condition</Link> </>} />
                </Form.Group>
                <Button variant="primary" disabled={!accepted} type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Already have an Account? <Link to="/login">Login</Link>
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;