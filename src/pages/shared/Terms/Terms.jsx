import { Link } from "react-router-dom";

const Terms = () => {
    return (
        <div>
            <h2>Our terms and conditions </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident libero eius officiis odio qui. Repellendus tempore recusandae omnis laboriosam voluptatem ullam voluptate sint facilis ab maiores. Voluptates autem dignissimos earum?</p>
            <p>go back to <Link to='/register'>Register</Link> </p>
            
        </div>
    );
};

export default Terms;