import { useEffect, useState } from "react";
import CategoryItem from "../CategoryItem/CategoryItem";

const CategoryList = () => {
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategoryList(data));
    }, [])

    return (
        <div>
            <h2 className="text-5xl text-center my-6">Job Category List: {categoryList.length}</h2>
            <p className="text-center mb-4">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 my-20">
                {
                    categoryList.map(categoryList => <CategoryItem key={categoryList.id} categoryList={categoryList}></CategoryItem>)
                }
            </div>
        </div>
    );
};

export default CategoryList;