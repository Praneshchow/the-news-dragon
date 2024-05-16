import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";

// Category is the center part of the Home. 
const Category = () => {
    const {id} = useParams();
    const categoryNews = useLoaderData(); 

    return (
        <div>
            <h2>This Category News: {categoryNews.length}</h2>
            {
                categoryNews.map(news => <NewsCard
                    key={news._id}
                    news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;
