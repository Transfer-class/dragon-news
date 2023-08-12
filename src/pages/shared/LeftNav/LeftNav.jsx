import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EditorsInsights from "../../News/EditorsInsights/EditorsInsights";


const LeftNav = () => {
     

    const [categories,setCategories]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/categories')
            .then(res =>res.json())
            .then(data => setCategories(data))
            .catch(error =>console.log(error))
    },[])
    
    


    return (
        <div>
            <h4>All Categories </h4>
            <div className="ps-4">
                {
                    categories.map(category => <h6
                    key={category.id}
                    >
                        <Link 
                          to={`/category/${category.id}`} className="text-decoration-none text-black "> {category.name}</Link>

                    </h6>)
                }
            </div>
            <EditorsInsights vertical={true}></EditorsInsights>
            
        </div>
    );
};

export default LeftNav;