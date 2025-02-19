import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import aboutImg from "../../Assets/about.jpg";
import CardComponent from "../../Core-Components/Card";
import BookImg from "../../Assets/e-book.jpeg";

function Dashboard() {
  const PromoteBook = [
    {
      title: "Boost Your Book Sales with Digital Marketing",
      discription:
        "Get your book in front of millions of readers with our digital marketing services.",
    },
    {
      title: "Get Your Book Noticed",
      discription:
        "Learn how to market book online and grow reader, from website optimization to influencer marketing.",
    },
    {
      title: "Get Your Book in Readers' Hands",
      discription:
        "Learn how to market book online and grow reader base, from website optimization to influencer marketing.",
    },
    {
      title: "Connecting Across the World",
      discription:
        "Learn how to market book online and grow reader base, from website optimization to influencer marketing.",
    },
  ];
  const [contentIndex, setContentIndex] = useState(0);
  const Bannercontent = [
    "The company’s goals include providing support and assistance to deprived communities and showcasing a commitment to social responsibility and community development.",
    "Our mission is to promote sustainable practices that benefit both the environment and the communities we serve.",
    "We strive to empower individuals by providing resources and opportunities for growth and development.",
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setContentIndex((prevIndex) => (prevIndex + 1) % Bannercontent.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="publisher-dashboard">
      <div className="banner shadow">
        <div className="banner-content">
          <h4>Samira Hadid ,</h4>
          <p>{Bannercontent[contentIndex]}</p>
        </div>
      </div>
      <div className="about-us">
        <img src={aboutImg} alt="about-img" className="about-img shadow" />
        <div className="about-dis">
          <h5>About Us</h5>
          <h6>Welcome To EBook Platform</h6>
          <p>
            We are an inclusive organization that strives to provide
            high-quality training alongside software services. With a zeal and
            passion towards creating job opportunities for graduates across
            various disciplines, this organization was launched in the year.
          </p>
          <p>
            Our focus over the year has spanned from employing candidates for
            job recruitment to training freshers into potential candidates with
            strong technical knowledge and soft skills. strives to provide
            high-quality training alongside software-focused.
          </p>
        </div>
      </div>
      <div className="publish-card">
        {PromoteBook?.map((data) => (
          <CardComponent
            style={{
              width: "300px",
              padding: "0",
            }}
          >
            <div className="card-header">
              <h5>{data?.title}</h5>
            </div>
            <div className="card-content">
              <p>{data?.discription}</p>
              <img src={BookImg} alt="sell" />
            </div>
          </CardComponent>
        ))}
      </div>
      <div className="Report-card">
        <div className="totalBooks">
          <h1 className="count">70+</h1>
          <div className="count-dis">
            <h4>Book Published</h4>
            <p>
              Explore the journey of a published book, from concept to creation.
              This book offers valuable insights, practical tips, and inspiring
              stories to help you navigate the world of publishing and share
              your work with the world.
            </p>
          </div>
        </div>
        <div className="totalusers">
          <h1 className="count">100+</h1>
          <div className="count-dis">
            <h4>Satisfied Book Readers</h4>
            <p>
              A satisfied reader, captivated by the book's compelling narrative,
              insightful content, and unforgettable characters, leaves with a
              sense of fulfillment and a deeper connection to the story.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
