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
import {cilArrowThickToRight, cilUser } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import defaultavatar from './../../assets/images/defaultavatar.jpg';
import { useProfileImage } from 'src/context/ProfileImageProvider';

const userapi = process.env.REACT_APP_API_USERS;
const baseapi = process.env.REACT_APP_BASE_URL;


const AppHeaderDropdown = () => {
  const { user, logout } = useUser();
  const [profilePicturePath, setProfilePicturePath] = useState(null);
  const navigate = useNavigate();
  const { getProfileImageUrl } = useProfileImage(); 

 


  useEffect(() => {
    const fetchProfilePicturePath = async () => {
      if (user?.userId) {
        try {
          // Fetch user data
          const response = await fetch(`${userapi}/${user.userId}`, {
            headers: {
              Authorization: `Bearer ${user?.token}`,
            },
          });
          
          if (!response.ok) {
            throw new Error(`Error fetching user data: ${response.status}`);
          }

          const data = await response.json();
          const relativePath = data.profilePicturePath;
          
          // Construct the URL with timestamp for cache-busting
          const imgUrl = relativePath ? `${baseapi}/${relativePath}?${new Date().getTime()}` : 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp';
          
          setProfilePicturePath(imgUrl);

          // Update the profile image URL in the context
          if (relativePath) {
            getProfileImageUrl(user.userId, imgUrl);
          }
        } catch (error) {
          console.error('Error fetching profile picture path:', error);
        }
      }
    };

    fetchProfilePicturePath();
  }, [user?.userId, user?.token, userapi, baseapi, getProfileImageUrl]);
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
