import React from 'react';
import FeatureCard from './FeatureCard';
import './FeatureCardContainer.css';

const FeatureCardContainer = () => {
  return (
    <div className="feature-card-container">
      <FeatureCard title="Automated Workflows" description="Lorem ipsum dolor sit amet." image="/path/to/image1.jpg" icon={<SomeIcon />} />
      <FeatureCard title="Employee Self Service" description="Lorem ipsum dolor sit amet." image="/path/to/image2.jpg" icon={<SomeIcon />} />
      <FeatureCard title="Real-Time Analytics" description="Lorem ipsum dolor sit amet." image="/path/to/image3.jpg" icon={<SomeIcon />} />
      <FeatureCard title="Centralized Employee Data" description="Lorem ipsum dolor sit amet." image="/path/to/image4.jpg" icon={<SomeIcon />} />
      <FeatureCard title="Advanced Analytics and Reporting" description="Lorem ipsum dolor sit amet." image="/path/to/image5.jpg" icon={<SomeIcon />} />
    </div>
  );
};

export default FeatureCardContainer;
