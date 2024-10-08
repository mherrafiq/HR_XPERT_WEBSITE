import React from 'react';
import './HowItWorksPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVectorSquare, faCheckCircle, faBell } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import user1 from '@/public/images/user1.png'

const HowItWorksPage = () => {
    return (
        <div className="container">
            {/* Heading Section */}
            <div className="heading-container">
                <h1 className="heading">How It Works</h1>
            </div>

            {/* Empower Title */}
            <div className="empower-heading">
                Empower Employees and Automate HR Processes
            </div>
            <p className="description">
                Donec tempor risus ut magna egestas, ut placerat ligula aliquet. Morbi fermentum felis in urna suscipit.
            </p>

            {/* Flex Container for Side-by-Side Boxes */}
            <div className="boxes-container">
                {/* Box 1: Horizontal Alignment */}
                <div className="box1">
                    {/* Rectangle 1 */}
                    <div className="rectangle rectangle-top">
                        <div className='flex justify-between w-full'>
                            {/* Vector Icon */}
                            <div className="vector-icon-container">
                                <FontAwesomeIcon icon={faVectorSquare} className="vector-icon" />
                            </div>

                            {/* Thin Rectangles */}

                            <div className='flex items-center'>
                                <div className="right-rectangles-horizontal">
                                    <div className="thin-rectangle-horizontal"></div>
                                    <div className="thin-rectangle-horizontal"></div>
                                </div>

                                {/* Notification Icon */}
                                <div className="notification-icon-container">
                                    <FontAwesomeIcon icon={faBell} className="notification-icon" />
                                </div>

                                {/* Profile Image Circle */}
                                <div className="profile-circle ">
                                    <Image src={user1} alt="Profile" className="profile-image rounded-[50%] " />
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Rectangle 2 */}
                    <div className="rectangle flex flex-col ">

                        {/* <div className="profile-info"> */}
                               
                       <div className='flex items-center'>
                        <div className="profile-circle">
                            <Image src={user1} alt="Syed Abbas" className="profile-image rounded-[50%]" />
                        </div>
                        <div className="profile-info">

                            <span className="profile-name">Syed Ahad</span>
                            <span className="profile-role">Web Development</span>
                        </div>
                        </div>

                        <div className="task-list">
                            <div className="task">
                                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" /> Mac or Windows Choice
                            </div>
                            <div className="task">
                                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" /> Invite to Team Lunch
                            </div>
                            <div className="task">
                                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" /> Collect Documents
                            </div>
                        </div>
                    </div>
                    {/* </div> */}

                    {/* Rectangle 3 */}
                    <div className="rectangle">
                        <div className="profile-circle">
                            <Image src={user1} alt="Syed Ahmed" className="profile-image rounded-[50%]" />
                        </div>
                        <div className="profile-info">
                            <span className="profile-name">Syed Ahmed</span>
                            <span className="profile-role">Product Designer</span>
                        </div>
                    </div>
                </div>

                {/* Box 2 */}
                <div className="box1">
                    <h3 className="box2-title">Create a Great Experience Before and After Joining</h3>
                    <p className="box2-description">
                        Donec tempor risus ut magna egestas, ut placerat ligula aliquet. Morbi fermentum felis in urna suscipit, non tincidunt lorem malesuada.
                    </p>
                    <p className="box2-description">
                        Donec tempor risus ut magna egestas, ut placerat ligula aliquet. Morbi fermentum felis in urna suscipit, non tincidunt lorem malesuada.
                    </p>
                    <p className="box2-description">
                        Donec tempor risus ut magna egestas, ut placerat ligula aliquet. Morbi fermentum felis in urna suscipit, non tincidunt lorem malesuada.
                    </p>
                    <p className="box2-description">
                        Donec tempor risus ut magna egestas, ut placerat ligula aliquet. Morbi fermentum felis in urna suscipit, non tincidunt lorem malesuada.
                    </p>
                    <p className="box2-description">
                        Donec tempor risus ut magna egestas, ut placerat ligula aliquet. Morbi fermentum felis in urna suscipit, non tincidunt lorem malesuada.
                    </p>
                    <p className="box2-description">
                        Donec tempor risus ut magna egestas, ut placerat ligula aliquet. Morbi fermentum felis in urna suscipit, non tincidunt lorem malesuada.
                    </p>
                    <p className="box2-description">
                        Donec tempor risus ut magna egestas, ut placerat ligula aliquet. Morbi fermentum felis in urna suscipit, non tincidunt lorem malesuada.
                    </p>
                    <p className="box2-description">
                        Donec tempor risus ut magna egestas, ut placerat ligula aliquet. Morbi fermentum felis in urna suscipit, non tincidunt lorem malesuada.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HowItWorksPage;
