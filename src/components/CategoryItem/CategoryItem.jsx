/* eslint-disable react/prop-types */

const CategoryItem = ({ categoryList }) => {
    const { logo, category_name, availability } = categoryList;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl flex justify-start items-start">
                <figure className="px-10 pt-10">
                    <img src={logo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-start text-left">
                    <h2 className="card-title">{category_name}</h2>
                    <p>{availability}</p>
                </div>
            </div>
        </div>
    );
};

export default CategoryItem;