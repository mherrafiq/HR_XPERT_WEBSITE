import React from 'react';
import './FeatureCard.css';  // Importing the CSS file for styling
import { FaArrowRight } from 'react-icons/fa';  // Importing arrow icon
import Image from 'next/image';

const FeatureCard = ({ title, description, image, icon }) => {
  return (
    <div className="feature-card styl">
      {/* Image inside its own box */}
      <div className="image-container">
        <Image src={image} alt={`${title} image`} />
      </div>

      {/* Content section */}
      <div className="content-container">
        <div className="title-with-icon">
          {/* Icon beside the title */}
          <span className="icon">{icon}</span>
          <h3 className="bold-text">{title}</h3>
        </div>
        <p>{description}</p>
        <div className="learn-more bold-text">
          <span>Learn More</span>
          <FaArrowRight className="arrow-icon" />
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
