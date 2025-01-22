import React from 'react';
import Heading from '../../../components/Shared/Heading';
import UpdateProfile from '../../../components/Shared/UpdateProfile/UpdateProfile';
import { Helmet } from 'react-helmet-async';

const ParticipantProfile = () => {
    return (
        <div data-aos="fade-left" data-aos-duration="2000">
            <Helmet>
                <title> Participant Profile | Medical Camp Management System</title>
            </Helmet>
            <Heading title='Participant Profile ' subtitle='Update your profile information' center={true} />
            <UpdateProfile />
        </div>
    );
};

export default ParticipantProfile;