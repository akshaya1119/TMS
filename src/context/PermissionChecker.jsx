// PermissionChecker.js
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { useUser } from './UserContext';
import axios from 'axios';

const permissionapi = process.env.REACT_APP_API_PERMISSION;

const PermissionChecker = ({ children }) => {
  const { user } = useUser();
  const [userPermissions, setUserPermissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPermissions = async () => {
      try {
        const userId = user.userId; // Assuming you are using a fixed userId for now
        const response = await axios.get(`${permissionapi}/ByUser/${userId}`,{
          headers:{
            Authorization : `Bearer ${user?.token}`,
          }
        });
        setUserPermissions(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching permissions:', error);
        setLoading(false);
      }
    };

    fetchPermissions();
  }, [user]);

  
  const hasPermission = (moduleId, permissionType) => {
    const modulePermissions = userPermissions.find(p => p.id === moduleId);
    return modulePermissions && modulePermissions[permissionType];
  };

  return typeof children === 'function' ? children({ hasPermission }) : null;
};

// Add prop type validation for the 'permissions' prop
PermissionChecker.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func
  ]).isRequired
};

export default PermissionChecker;