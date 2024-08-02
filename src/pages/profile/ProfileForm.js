import React, { useState } from 'react';
import './profile.css';
import { FaPencilAlt } from "react-icons/fa";


const ProfileForm = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    password: user.password,
    phoneNumber: user.phoneNumber,
    address: user.address,
    state: user.state,
    zipCode: user.zipCode,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="profile-form">
      <div className="profile-header">
        <img src="/assets/profile.jpg" alt="Profile" className="profile-pic" />
      </div>
      <div className="profile-fields">
      <button onClick={handleEditClick} className="edit-btn">
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <span style={{fontSize: '13px' }}><FaPencilAlt/></span>
        <div className="profile-field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </div>
        <div className="profile-field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </div>
        <div className="profile-field">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </div>
        <div className="profile-field">
          <label>Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </div>
        <div className="profile-field">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </div>
        <div className="profile-field" style={{flexDirection: 'row',justifyContent: 'space-between'}}>
        <div className='labelWrap'>
        <label className="propertyLabel">State</label>
          <input
            style={{width: "80%"}}
            type="text"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </div>  
        <div className="labelWrap2">
          <label className='propertyLabel2'>Zip Code</label>
          <input
            style={{width: "90%"}}
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;