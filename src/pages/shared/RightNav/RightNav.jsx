import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from "../Qzone/QZone";
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4>Login With </h4>
            <Button className="mb-2" variant="outline-primary">  <FaGoogle /> Login with Google </Button>
            <Button variant="outline-secondary"><FaGithub /> Login with Github</Button>
            <div>
                <h4>Find us on </h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> facebook</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter /> twitter</ListGroup.Item>
                    <ListGroup.Item> <FaInstagram /> instagram</ListGroup.Item>

                </ListGroup>

            </div>
            <QZone></QZone>
            
            <div className="position-relative text-align-center mt-4  ">
                <img className="w-100" src={bg} alt="" />
                <div className="position-absolute top-50 start-50 translate-middle text-light text-center ">
                    <h2 >Create an Amazing Newspaper</h2>
                    <p className="my-4 px-2">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button className="btn-danger">Learn More</Button>

                </div>

            </div>

        </div>

    );
};

export default RightNav;