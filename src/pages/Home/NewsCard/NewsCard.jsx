import moment from 'moment';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaRegBookmark } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa";
import Rating from 'react-rating';
import { FaRegStar, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, rating, total_view } = news;

    return (
        <Card className="mb-4">
            <Card.Header className='d-flex align-items-center'>
                <Image style={{ height: '40px' }} src={author?.img} roundedCircle />
                <div className='ps-2 flex-grow-1'>
                    <p className='mb-0'>{author?.name}</p>
                    <p><small>{moment(author?.published_date).format('yyyy-MM-D')}</small></p>
                </div>
                <div>
                    <FaRegBookmark /> <FiShare2 />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length < 250 ? <>{details}</> :
                            <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>read more</Link> </>

                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1'>
                    <Rating
                        placeholderRating={rating.number}
                        emptySymbol={<FaRegStar />}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar />}
                    />
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaRegEye /> {total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;


