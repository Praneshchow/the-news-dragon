import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and conditions</h2>
            <p>Follow our conditions for privacy and security purpose. </p>
            <p>Go back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;