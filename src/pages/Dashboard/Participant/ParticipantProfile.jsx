import React from 'react';
import Heading from '../../../components/Shared/Heading';
import UpdateProfile from '../../../components/Shared/UpdateProfile/UpdateProfile';

const ParticipantProfile = () => {
    return (
        <div>
            <Heading title='Participant Profile ' subtitle='Update your profile information' center={true} />
            <UpdateProfile />
        </div>
    );
};

export default ParticipantProfile;