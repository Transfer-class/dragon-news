import moment from 'moment';
import logo from '../../../assets/logo.png'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';



const Header = () => {

  
    return (
        <Container>
            <div className="text-center">

                <Link to='/'><img src={logo} alt="" /></Link>
                <p className="text-secondory"><small>Journalism without Fear or Favour </small></p>
                <p>{moment().format("dddd, MMMM D, YYYY, h:mm:ss a")}</p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger' speed={50} >
                    I can be a React component, multiple React components, or just some text........
                </Marquee>
            </div>

            
        </Container >
    );
};

export default Header;