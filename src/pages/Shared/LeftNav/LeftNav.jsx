import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LeftInsightes from "../LeftInsightes/LeftInsightes";

const LeftNav = () => {
    const [catagories, setCatagories] = useState([]);

    useEffect(() => {
        fetch('https://the-news-dragon-server-zeta-gold.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCatagories(data))
            .catch(error => console.error(error))
    }, []);

    return (
        <div>
            <h4>All Catagories</h4>
            <div className="ps-4"> 
            {
                catagories.map (category => 
                    <p key={category.id}>
                        <Link to={`/category/${category.id}`} className="text-black text-decoration-none">{category.name}</Link>
                    </p>
                )
            }
            </div>
            <LeftInsightes></LeftInsightes>
        </div>
    );
};

export default LeftNav;