import React, { useEffect, useState } from 'react';
import { useUser } from './../../context/UserContext';
import {
  CAvatar,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react';
import { cilSettings, cilArrowThickToRight, cilUser } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import defaultavatar from './../../assets/images/defaultavatar.jpg';

const userapi = process.env.REACT_APP_API_USERS;
const baseapi = process.env.REACT_APP_BASE_URL;
const AppHeaderDropdown = () => {
  const { user, logout } = useUser();
  const [profilePicturePath, setProfilePicturePath] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the profile picture path when the component mounts or when the user changes 
    const fetchProfilePicturePath = async () => {
      if (user.userId) {
        try {
          // Fetch profile picture path based on the user ID
          const response = await fetch(`${userapi}/${user.userId}`);
          const data = await response.json();
          // Check if profilePicturePath exists in the data
          if (data.profilePicturePath) {
            const imgurl = `${baseapi}/${data.profilePicturePath}`;
            setProfilePicturePath(imgurl);
          } else {
            // Handle the case where profilePicturePath is not available
            // For example, set a default profile picture or do nothing
          }
          console.log(data);
        } catch (error) {
          console.error('Error fetching profile picture path:', error);
        }
      }
    };


    fetchProfilePicturePath(); // Call the function 
  }, [user.userId]);


  const handleLogout = () => {
    logout();
  };

  const handleProfileClick = () => {
    navigate(`/UserProfile`);
  };


  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0 pe-0" caret={false}>
      <CAvatar src={profilePicturePath ? `${profilePicturePath}` : defaultavatar} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem onClick={handleProfileClick}>
          <CIcon icon={cilUser} className="me-2 c-pointer" />
          Profile
        </CDropdownItem>
        {/* <CDropdownItem href="#">
          <CIcon icon={cilSettings} className="me-2 c-pointer" />
          Settings
        </CDropdownItem> */}
        <CDropdownDivider />
        <CDropdownItem onClick={handleLogout}>
          <CIcon icon={cilArrowThickToRight} className="me-2 c-pointer" />
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};
AppHeaderDropdown.propTypes = {
  profilePicturePath: PropTypes.string,
}

export default AppHeaderDropdown;
