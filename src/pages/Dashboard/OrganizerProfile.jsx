import Heading from '../../components/Shared/Heading';
import UpdateProfile from '../../components/Shared/UpdateProfile/UpdateProfile';

const OrganizerProfile = () => {
    return (
        <div className="">
            <Heading title='Organizer Profile' subtitle='Update your profile information' center={true} />
            <UpdateProfile />
        </div>
    );
};

export default OrganizerProfile;
