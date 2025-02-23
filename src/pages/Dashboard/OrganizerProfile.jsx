import { Helmet } from 'react-helmet-async';
import Heading from '../../components/Shared/Heading';
import UpdateProfile from '../../components/Shared/UpdateProfile/UpdateProfile';

const OrganizerProfile = () => {
    return (
        <div data-aos="fade-left" data-aos-duration="2000" className="min-h-screen">
            <Helmet>
                <title> Organizer Profile | Medical Camp Management System</title>
            </Helmet>
            <Heading title='Organizer Profile' subtitle='Update your profile information' center={true} />
            <UpdateProfile />
        </div>
    );
};

export default OrganizerProfile;
