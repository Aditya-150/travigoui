import React, { useState } from "react";
import standardLogo from "./../../assets/standard.png";
import premiumLogo from "./../../assets/premium.png";
import { BsCheck } from "react-icons/bs";
import arrowDrawn from "./../../assets/arrow-draw.svg";
import "./pricing.css";
import AnimatedComponent from "../AnimatedComponent";

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("monthly");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="pricing" id="pricing">
      <div className="pricing-heading">
        <h1>Choose The Plan That Suits You</h1>
      </div>
      <p>Many attractive offers by becoming a premium member.</p>
      <div className="pricing-tab">
        <button
          className={`tab-button ${activeTab === "monthly" ? "active" : ""}`}
          onClick={() => handleTabChange("monthly")}
        >
          Monthly
        </button>
        <button
          className={`tab-button ${activeTab === "yearly" ? "active" : ""}`}
          onClick={() => handleTabChange("yearly")}
        >
          Yearly
        </button>
      </div>
      <div className={`pricing-offer ${activeTab === "yearly" ? "valid" : ""}`}>
        <img src={arrowDrawn} alt="arrow" />
        <div className="offer">You will save 20%</div>
      </div>
      <div className="pricing-plans">
        <div className="standard">
          <AnimatedComponent>
            <div className="pricing-plans-standard">
              <div className="pricing-plans-standard-header">
                <div className="pricing-plans-standard-logo">
                  <img src={standardLogo} alt="standardLogo" />
                </div>
                <div className="header-text">
                  <h1>Standard Member</h1>
                  <p>Suitable for all users</p>
                </div>
                <div className="pricing-plans-standard-price">Free</div>
              </div>
              <div className="pricing-plans-standard-benefits">
                <div className="benefits">
                  <div className="react-icon">
                    <BsCheck color="var(--primary-color)" size={20} />
                  </div>
                  <p>Find popular destination</p>
                </div>
                <div className="benefits">
                  <div className="react-icon">
                    <BsCheck color="var(--primary-color)" size={20} />
                  </div>
                  <p>Daily destination news</p>
                </div>
                <div className="benefits">
                  <div className="react-icon">
                    <BsCheck color="var(--primary-color)" size={20} />
                  </div>
                  <p>Travel stats</p>
                </div>
              </div>
              <button className="pricing-plans-standard-button">
                Get Started
              </button>
            </div>
          </AnimatedComponent>
        </div>
        <div className="premium">
          <AnimatedComponent>
            <div className="pricing-plans-premium">
              <div className="pricing-plans-premium-header">
                <div className="pricing-plans-premium-logo">
                  <img src={premiumLogo} alt="premiumLogo" />
                </div>
                <div className="header-text">
                  <h1>Premium Member</h1>
                  <p>Suitable for enthusiast travelers</p>
                </div>
                <div className="pricing-plans-premium-price">
                  <h1>{activeTab === "monthly" ? "$8" : "$60"}</h1>
                  <p>{activeTab === "monthly" ? "/month" : "/year"}</p>
                </div>
              </div>
              <div className="pricing-plans-premium-benefits">
                <div className="benefits">
                  <div className="react-icon">
                    <BsCheck color="var(--primary-color)" size={20} />
                  </div>
                  <p>Big discount</p>
                </div>
                <div className="benefits">
                  <div className="react-icon">
                    <BsCheck color="var(--primary-color)" size={20} />
                  </div>
                  <p>Invite friend feature</p>
                </div>
                <div className="benefits">
                  <div className="react-icon">
                    <BsCheck color="var(--primary-color)" size={20} />
                  </div>
                  <p>Advanced travel stats</p>
                </div>
                <div className="benefits">
                  <div className="react-icon">
                    <BsCheck color="var(--primary-color)" size={20} />
                  </div>
                  <p>No ads and tax</p>
                </div>
                <div className="benefits">
                  <div className="react-icon">
                    <BsCheck color="var(--primary-color)" size={20} />
                  </div>
                  <p>Priority booking schedule</p>
                </div>
              </div>
              <button className="pricing-plans-premium-button">
                Get Started
              </button>
            </div>
          </AnimatedComponent>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
