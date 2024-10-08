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
            answer: "Donec tempor risus ut magna egestas, ut placerat ligula aliquet. Morbi fermentum felis in urna suscipit, non tincidunt lorem malesuada."
        },
        {
            question: "What kind of support is available?",
            answer: "Donec tempor risus ut magna egestas, ut placerat ligula aliquet. Morbi fermentum felis in urna suscipit, non tincidunt lorem malesuada."
        },
        {
            question: "Is the software compatible with other tools I use?",
            answer: "Donec tempor risus ut magna egestas, ut placerat ligula aliquet. Morbi fermentum felis in urna suscipit, non tincidunt lorem malesuada."
        },
        {
            question: "How does the pricing work?",
            answer: "Donec tempor risus ut magna egestas, ut placerat ligula aliquet. Morbi fermentum felis in urna suscipit, non tincidunt lorem malesuada."
        },
        {
            question: "Can I customize the features to fit my needs?",
            answer: "Donec tempor risus ut magna egestas, ut placerat ligula aliquet. Morbi fermentum felis in urna suscipit, non tincidunt lorem malesuada."
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
