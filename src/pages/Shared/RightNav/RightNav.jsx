import { Button, ListGroup } from "react-bootstrap";
import { FaGithub, FaGoogle, FaFacebook, FaSquareWhatsapp, FaInstagram } from "react-icons/fa6";
import QZone from "../QZone/QZone";
import bg from "../../../assets/bg.png"

const RightNav = () => {
    return (
        <div>
            <h4 className="mt-4">Login with</h4>
            <Button className="mb-2" variant="outline-primary"><FaGoogle /> Login with Google</Button>
            <Button variant="outline-secondary"><FaGithub /> Login with GitHub</Button>
            <div>
                <h4 className="mt-4">Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> Facebook </ListGroup.Item>
                    <ListGroup.Item><FaSquareWhatsapp /> Whatsapp</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram </ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;