import React from "react";
import Header from "./header";

const Modules = () => {
  return (
    <div className="module_header">
      <Header />
      <h1 className="module_navitem" style={{ color: "blue" }}>
        6 CRM Modules:
      </h1>
      <img
        src="https://www.leadsquared.com/wp-content/uploads/2021/11/CRM-Modules-Banner.jpg"
        alt="_blank"
        style={{ width: "1500px", height: "300" }}
      />
      <br></br>
      <p>
        <strong>Module 1: Leads</strong>
        <br></br>Customers are the most valuable assets for your business. Here,
        the lead module keeps data of all the customers organized. Whenever you
        capture a lead from your marketing channels, the software stores all
        their data in one place. Furthermore, this CRM module offers smart views
        to evaluate the present status of the leads. When all of this data is
        accumulated in one place, any sales manager can quickly analyze sales
        operations currently going on and how it can be modified further.
        <br></br>
        <strong>Module 2: Marketing:</strong>
        <br></br>
        Marketing module stages conclusive details of all your email marketing
        campaigns and more. It displays the names of the marketing campaigns
        with the present status. In addition to that, the marketing module also
        displays the results of your email marketing campaigns with respective
        click-through rates and more. This helps you to get a gist of how
        fruitful your email marketing campaigns have been. And how you can
        improve it further.<br></br> <strong>Module 3:Workflows</strong>
        <br></br> The workflow module helps you to automate your sales process.
        For example, when a new lead flows into the system. You can set-up
        automation to assign it to a salesperson that can cater to your lead’s
        interest. Following that, you can create an if/else condition. Suppose,
        if the lead does not pick up your follow up call, you can set a task to
        call after three days. Conversely, if they pick up and show interest in
        your product, you can engage them with email, highlighting the details
        of the product. <br></br>
        <strong>Module 4:Apps Marketplace</strong>
        <br></br> The Apps Marketplace module of CRM provides options of
        different apps with which the CRM software can integrate through
        connectors. For example, Facebook Lead Ads connector, marketplace
        (Justdial, Sulekha, etc.) connector and more. <br></br>
        <strong>Module 5:Reports </strong> <br></br>Reports module of the CRM
        software gathers reports of different categories and presents them in
        one place. These reports include administrative reports, field sales
        reports, customer analytics, and many more. Based on your usage pattern,
        this CRM module collects frequently used reports in one section. It
        enables you to access them effortlessly. Also, the module allows users
        to create customized reports in no time. <br></br>
        <strong>Modules 6:Content Repository </strong> <br></br>The content
        repository module of the CRM software gathers all images and documents.
        It makes them easily accessible whenever you need them. Through content
        repository, all your creatives and images can be accessed by your team
        members. When in need, it saves time by eliminating the confusion of
        searching for data stored in different silos.
      </p>
    </div>
  );
};
export default Modules;
