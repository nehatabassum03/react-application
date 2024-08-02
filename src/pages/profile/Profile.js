import React from 'react';
import ProfileForm from './ProfileForm';
import Topbar2 from '../../components/topbar2/Topbar2';


const Profile = () => {
  const user = {
    name: 'Sheena Sharma',
    email: 'Sheenasharma@gmail.com',
    password: '**************',
    phoneNumber: '9598755687',
    address: 'Patia, Bhubaneswar',
    state: 'Odisha',
    zipCode: '751024',
  };

  return (
    <div>
        <Topbar2/>
      <ProfileForm user={user} />
    </div>
  );
};

export default Profile;