import React from "react";
import Header from "./header";

const About = () => {
  return (
    <div className="about_header">
      <Header />
      <p>
        <strong>CRM is Customer Relationship Management </strong>.<br></br> A
        CRM system allows businesses to manage business relationships and stores
        detailed information on overall purchase history, personal info, and
        even purchasing behavior patterns and helps organizations streamline
        their processes and workflows so that every part of the business is on
        the same page and this all data is stored ideally in the cloud so the
        information is accessible by many, in real-time. <br></br>Customer
        satisfaction is a critical element in the race of goals and objectives.
        However, in this current competitive environment encouraged by
        liberalization and globalization of the economics, and the growing
        customer expectations for quality of service and value that is prompted
        by many businesses to organize the customers they serve, rather than
        around product lines. <br></br> CRM is a method of discrete software
        which focuses on automating and improving the business processes with
        managing customer relationships in the areas of sales, marketing, and
        customer services. CRM software facilitates the coordination of multiple
        business functions and also coordinate various channels of communication
        with the customer face to face, call centers, and the Web and preferred
        channels of interaction.
      </p>
      <img
        src="https://qph.cf2.quoracdn.net/main-qimg-56920e4707a73cbcc624636fdb6dc648-lq"
        alt="_blank"
        style={{ width: 1500, height: 400 }}
      />
    </div>
  );
};
export default About;
