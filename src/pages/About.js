import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="https://images.pexels.com/photos/4342497/pexels-photo-4342497.jpeg?cs=srgb&dl=pexels-edmond-dant%C3%A8s-4342497.jpg&fm=jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Our ecommerce platform is dedicated to bringing you the best shopping experience with a wide range of products to choose from. Whether you're looking for the latest fashion trends, electronics, home essentials, or gifts for your loved ones, we've got you covered. Our user-friendly interface, secure payment options, and reliable delivery services ensure that your shopping journey is seamless and enjoyable. Shop with confidence and convenience at our ecommerce app, where quality and customer satisfaction are our top priorities
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
