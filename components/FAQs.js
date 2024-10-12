'use client'

import React, { useState } from 'react';
import './FAQs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const FAQs = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const faqs = [
        {
            question: "How easy is it to set up the software?",
            answer: "Setting up software is generally designed to be user-friendly and straightforward. Most providers understand the importance of a seamless installation process and offer guided installation wizards that take users step-by-step through the setup. This is often accompanied by comprehensive documentation and video tutorials that can help both novice and experienced users navigate the installation process. While many applications can be installed quickly, depending on the software's complexity, users might need to allocate extra time for configuration, especially when integrating the software with existing tools or databases. In cases where the setup process involves more advanced technical requirements, users might benefit from consulting with IT professionals or technical support teams to ensure everything runs smoothly."
        },
        {
            question: "What kind of support is available?",
            answer: "The availability of support can greatly enhance the user experience and facilitate effective software use. Most software providers offer a range of support options to assist users in troubleshooting and maximizing the software’s capabilities. Common support channels include detailed documentation and FAQs, which can address many common issues or questions. Additionally, community forums can provide a platform for users to interact, share experiences, and find solutions to problems encountered by others. For more personalized assistance, many providers offer email support or ticket systems, where users can submit inquiries and receive responses from support representatives. Some companies also provide live chat options for real-time assistance, while larger clients or enterprise solutions may benefit from having dedicated account managers who can provide tailored support and regular check-ins."
        },
        {
            question: "Is the software compatible with other tools I use?",
            answer: "Compatibility with existing tools is a crucial consideration when selecting software, as it can significantly impact productivity and efficiency. Most modern software solutions strive to offer seamless integration with other platforms and tools that businesses commonly use. This is often facilitated through built-in integration capabilities and APIs that allow users to create custom connections between different software systems. To assess compatibility, potential users should carefully review the software’s documentation for a list of supported integrations and examine any available API documentation for development opportunities. Additionally, user reviews and community feedback can provide valuable insights into real-world compatibility experiences, helping prospective users identify any potential issues they may face during integration."
        },
        {
            question: "How does the pricing work?",
            answer: "Understanding the pricing structure of software is essential for effective budgeting and decision-making. Most software today adopts a subscription-based pricing model, offering flexible options for monthly or annual payments that can vary based on the number of users, features, or usage levels. Some applications may still be available for a one-time purchase, allowing users to access the software without ongoing fees; however, this may limit access to updates and support. Additionally, many software solutions follow a freemium model, providing basic features for free while offering premium functionalities through paid upgrades. Users should carefully consider their needs and usage patterns when evaluating pricing plans, and it’s advisable to explore potential discounts, promotions, or bundled packages that could offer additional savings."
        },
        {
            question: "Can I customize the features to fit my needs?",
            answer: "Customization is a valuable feature that allows users to tailor software to better suit their specific needs and workflows. Many software applications offer user-configurable settings that enable individuals to adjust the interface, functionalities, and other aspects to enhance usability. Additionally, software vendors often provide add-ons or modules that can be integrated to expand the software’s capabilities, giving users more control over the features they access. For organizations with more complex requirements, it is common to collaborate directly with software vendors to develop custom features or integrations tailored to their unique operational needs. Moreover, many reputable software companies actively seek user feedback to inform future updates and enhancements, ensuring the software continues to evolve and meet user expectations."
        }
    ];

    const toggleFAQ = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="faqs-page-container">
            <div className="faqs-main-box">
                <p className="faqs-text">FAQs</p>
            </div>

            <h2 className="faqs-header mt-5"><b>Frequently Asked Questions</b></h2>

            <div className="faqs-boxes-container">
                {faqs.map((faq, index) => (
                    <div className="faqs-box" key={index} onClick={() => toggleFAQ(index)} onMouseEnter={() => setExpandedIndex(index)} onMouseLeave={() => setExpandedIndex(null)}>
                        <div className="faqs-question">
                            <p className="faqs-text">{faq.question}</p>
                            <FontAwesomeIcon icon={faChevronDown} className="faqs-icon" />
                        </div>
                        {expandedIndex === index && <p className="faqs-answer">{faq.answer}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQs;
