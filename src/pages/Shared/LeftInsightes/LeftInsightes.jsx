import { Card, Col, Row } from "react-bootstrap";
import first from '../../../assets/1.png';
import second from '../../../assets/2.png';
import third from '../../../assets/3.png';
import { SlCalender } from "react-icons/sl";

const LeftInsightes = () => {
    return (
        <Row xs={1} md={1} lg={1} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={first} />
                        <Card.Body>
                            <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                            <div className="d-flex align-items-center">
                                <p>Sports</p>
                                <p className="ms-2 me-2"><SlCalender/></p>
                                <p><small>Jan 4, 2022</small></p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={second} />
                        <Card.Body>
                            <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                            <div className="d-flex align-items-center">
                                <p>Sports</p>
                                <p className="ms-2 me-2"><SlCalender/></p>
                                <p><small>Jan 4, 2022</small></p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={third} />
                        <Card.Body>
                            <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                            <div className="d-flex align-items-center">
                                <p>Sports</p>
                                <p className="ms-2 me-2"><SlCalender/></p>
                                <p><small>Jan 4, 2022</small></p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
        </Row>
    );
};

export default LeftInsightes;