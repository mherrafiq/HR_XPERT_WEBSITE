'use client';  // Add this line to mark the component as a Client Component

import React, { useState } from 'react';
import './PricingPlan.css';

const PricingPlan = () => {
    const [isMonthly, setIsMonthly] = useState(true);
    const [selectedPlan, setSelectedPlan] = useState('basic'); // Track selected plan

    const handlePlanClick = (plan) => {
        setSelectedPlan(plan);
    };

    return (
        <div className="pricing-page-container">
            <div className="pricing-box">
                <p className="pricing-text">Pricing Plan</p>
            </div>

            <h2 className="pricing-header">Choose the Right Plan for Your Business</h2>

            <p className="pricing-subtext">
                Boost Efficiency, Productivity, and Employee Growth with Our Innovative HR Tools.
            </p>

            <div className="pricing-toggle-container">
                <div
                    className={`pricing-toggle ${isMonthly ? 'active' : ''}`}
                    onClick={() => setIsMonthly(true)}
                >
                    Monthly
                </div>
                <div
                    className={`pricing-toggle ${!isMonthly ? 'active' : ''}`}
                    onClick={() => setIsMonthly(false)}
                >
                    Annually
                </div>
            </div>

            {/* Plan Boxes */}
            <div className="plan-boxes-container">
                {/* Box 1 - Basic Plan */}
                <div 
                    className={`plan-box ${selectedPlan === 'basic' ? 'selected' : ''}`} 
                    onClick={() => handlePlanClick('basic')}
                >
                    <h3 className="plan-title">Basic Plan</h3>
                    <p className="plan-price">$29/month</p>
                    <p className="plan-description">
                        Donec tempor risus ut magna egestas, ut placerat ligula aliquet. 
                        Morbi fermentum felis.
                    </p>
                    <button className="plan-button">Book a Demo</button>

                    {/* What You Will Get Section */}
                    <div className="what-you-get">
                        <h4>WHAT YOU WILL GET</h4>
                        <ul className="plan-features">
                            <li><span className="tick-icon">✔</span> Employee Onboarding</li>
                            <li><span className="tick-icon">✔</span> Time and Attendance Tracking</li>
                            <li><span className="tick-icon">✔</span> Employee Self-Service Portal</li>
                            <li><span className="tick-icon">✔</span> Standard Reporting</li>
                        </ul>
                    </div>
                </div>

                {/* Box 2 - Professional Plan */}
                <div 
                    className={`plan-box ${selectedPlan === 'professional' ? 'selected' : ''}`} 
                    onClick={() => handlePlanClick('professional')}
                >
                    <h3 className="plan-title">Professional Plan</h3>
                    <p className="plan-price">$79/month</p>
                    <p className="plan-description">
                        Donec tempor risus ut magna egestas, ut placerat ligula aliquet. 
                        Morbi fermentum felis.
                    </p>
                    <button className="plan-button">Get Started With Professional</button>

                    <div className="what-you-get">
                        <h4>WHAT YOU WILL GET</h4>
                        <ul className="plan-features">
                            <li><span className="tick-icon">✔</span> All Basic Plan Feature Plus</li>
                            <li><span className="tick-icon">✔</span> Performance Management</li>
                            <li><span className="tick-icon">✔</span> Customizable Reports and Analytics</li>
                            <li><span className="tick-icon">✔</span> Standard Reporting</li>
                        </ul>
                    </div>
                </div>

                {/* Box 3 - Enterprise Plan */}
                <div 
                    className={`plan-box ${selectedPlan === 'enterprise' ? 'selected' : ''}`} 
                    onClick={() => handlePlanClick('enterprise')}
                >
                    <h3 className="plan-title">Enterprise Plan</h3>
                    <p className="plan-price">$199/month</p>
                    <p className="plan-description">
                        Donec tempor risus ut magna egestas, ut placerat ligula aliquet. 
                        Morbi fermentum felis.
                    </p>
                    <button className="plan-button">Get Started With Professional</button>

                    <div className="what-you-get">
                        <h4>WHAT YOU WILL GET</h4>
                        <ul className="plan-features">
                            <li><span className="tick-icon">✔</span> All Basic Plan Feature Plus</li>
                            <li><span className="tick-icon">✔</span> Performance Management</li>
                            <li><span className="tick-icon">✔</span> Customizable Reports and Analytics</li>
                            <li><span className="tick-icon">✔</span> Standard Reporting</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingPlan;
