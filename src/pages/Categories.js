import React from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";

const Categories = () => {
  const categories = useCategory();

  // Check if categories is undefined or not an array
  if (!Array.isArray(categories)) {
    // Render loading state or handle the error gracefully
    return <div>Loading...</div>;
    
  }

  return (
    <Layout title={"All Categories"}>
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row container">
          {categories.map((c) => (
            <CategoryItem key={c._id} category={c} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

const CategoryItem = ({ category }) => (
  <div className="col-md-4 mt-5 mb-3 gx-3 gy-3">
    <div className="card">
      <Link to={`/category/${category.slug}`} className="btn cat-btn">
        {category.name}
      </Link>
    </div>
  </div>
);

export default Categories;
