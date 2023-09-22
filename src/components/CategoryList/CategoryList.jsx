import { useEffect, useState } from "react";


const CategoryList = () => {
    const [categoryList, setCategoryList] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategoryList(data))
    }, [])
    return (
        <div>
            <h3 className="text-5xl text-center mt-4 mb-4">Job Category List</h3>
            <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className="grid grid-cols-4 gap-4 px-4 py-4 mt-4 mb-4">
                {
                    categoryList.map(category =>
                        <div key={category.id} className="card bg-base-100 shadow-xl">
                            <figure><img src={category.logo} alt="" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{category.category_name}</h2>
                                <p>{category.availability}</p>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default CategoryList;