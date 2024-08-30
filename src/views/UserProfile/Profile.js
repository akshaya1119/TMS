import React, { useEffect, useState, useRef } from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from 'mdb-react-ui-kit';
import { useUser } from './../../context/UserContext';
import axios from 'axios';
import $ from 'jquery'; // Import jQuery
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useProfileImage } from 'src/context/ProfileImageProvider';



const dashboardapi= process.env.REACT_APP_MY_SERVER;
const baseapi = process.env.REACT_APP_BASE_URL;
const userapi = process.env.REACT_APP_API_USERS;
const ticketapi =process.env.REACT_APP_API_TICKET;

const ProfilePage = () => {
  const {userId} = useParams();
  const counterRef = useRef(null);
  const assignedTicketsCounterRef = useRef(null);
  const resolvedTicketsCounterRef = useRef(null);
  const [userDetails, setUserDetails] = useState({});
  const { user } = useUser();
  const userID = userId? userId : user.userId;
  const [showBtn, setShowBtn] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [assignedTicketsCount, setAssignedTicketsCount] = useState(null);
  const [resolvedTicketsCount, setResolvedTicketsCount] = useState(null);
  const { updateProfileImageUrl } = useProfileImage();
  const [profilePicturePath,setProfilePicturePath] = useState();

  useEffect(() => {
    if (userID) {
      fetch(`${userapi}/${userID}`,{
        headers:{
          Authorization : `Bearer ${user?.token}`,
        }
      })
        .then((response) => response.json())
        .then((userData) => {
          setUserDetails(userData);
        })
        .catch((error) => {
          console.error('Error fetching user details:', error);
        });
    }
  }, [userID]);

  useEffect(() => {
    if (profilePicturePath) {
      fetch(`${userapi}/${userID}`, {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      })
        .then((response) => response.json())
        .then((userData) => {
          setUserDetails(userData);
        })
        .catch((error) => {
          console.error('Error fetching updated user details:', error);
        });
    }
  }, [profilePicturePath]);

  useEffect(() => {
    if (userDetails?.email) {
      fetchAssignedTicketsCount();
      fetchResolvedTicketsCount();
    }
  }, [userDetails?.email]);

  useEffect(() => {
    if (assignedTicketsCount !== null) {
      animateCounter(assignedTicketsCounterRef, assignedTicketsCount);


    }
  }, [assignedTicketsCount]);

  useEffect(() => {
    if (resolvedTicketsCount !== null) {
      animateCounter(resolvedTicketsCounterRef, resolvedTicketsCount);
    }
  }, [resolvedTicketsCount]);

  const animateCounter = (counterRef, targetValue) => {
    let startValue = 0;
    const step = targetValue / 50;

    const interval = setInterval(() => {
      startValue += step;
      if (startValue >= targetValue) {
        startValue = targetValue;
        clearInterval(interval);
      }

      $(counterRef.current).find('.counter-value').text(Math.ceil(startValue.toString()));
    }, 40);
  };

  const fetchAssignedTicketsCount = async () => {
    try {
      const response = await fetch(`${ticketapi}/status-count?id=${userDetails.userId}`,{
        headers:{
          Authorization : `Bearer ${user?.token}`,
        }
      });
      if (!response.ok) {
        throw new Error(`Error fetching assigned tickets count: ${response.status}`);
      }

      const data = await response.json();
      const totalAssignedCount = data?.openCount + data.pendingCount + data.selfassignedCount + data.completedCount;
  

      setAssignedTicketsCount(totalAssignedCount);
    } catch (error) {
      console.error('Error fetching assigned tickets count:', error);
    }
  };

  const fetchResolvedTicketsCount = async () => {
    try {
      const response = await fetch(`${ticketapi}/status-count?id=${userDetails.userId}`,{
        headers:{
          Authorization : `Bearer ${user?.token}`,
        }
      });
      if (!response.ok) {
        throw new Error(`Error fetching resolved tickets count: ${response.status}`);
      }

      const data = await response.json();
      const totalResolvedCount = data.completedCount; 
      setResolvedTicketsCount(totalResolvedCount);
    } catch (error) {
      console.error('Error fetching resolved tickets count:', error);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    setShowBtn(true);

    // Generate a URL for the selected image
    const imageUrl = URL.createObjectURL(file);

    // Set the generated URL as the source for the preview image
    document.getElementById('previewImage').src = imageUrl;
  };

 

  const handleUpload = async () => {
    if (selectedImage) {
      const validateFileFormat = (file) => {
        const fileExtension = file.name.split('.').pop().toLowerCase();
        const allowedExtensions = ['jpg', 'jpeg', 'png', 'svg'];
        return allowedExtensions.includes(fileExtension);
    };

    // Validate the file format before proceeding
    if (!validateFileFormat(selectedImage)) {
        alert('Invalid file format. Only jpg, jpeg, png, and svg files are allowed.');
        return; // Exit the function if the file format is invalid
    }
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append('image', selectedImage);

            const response = await axios.post(`${userapi}/upload/${userID}`, formData, {
                headers: {
                    Authorization: `Bearer ${user?.token}`,
                },
            });

            const newImageUrl = `${baseapi}/${response.data.filePath}?${new Date().getTime()}`;

            setUserDetails((prevUserDetails) => ({
                ...prevUserDetails,
                profilePicturePath: response.data.filePath,
            }));
            setProfilePicturePath(newImageUrl); // Update the profile picture path state
            updateProfileImageUrl(user.userId, newImageUrl); // Update the profile image URL in the context
            setShowBtn(false);
            
            // Additional actions after successful upload
            await fetchAssignedTicketsCount();
            await fetchResolvedTicketsCount();
        } catch (error) {
            console.error('Error updating profile picture:', error);
        } finally {
            setLoading(false);
        }
    }
};


  return (
    <section style={{ backgroundColor: '#f8f9fa', padding: '20px' }}>
      <MDBContainer className="py-5">
       

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <div>
              <MDBCardBody className="text-center d-flex flex-column align-items-center position-relative">
                <div
                  className="rounded-circle overflow-hidden position-relative  border border-2 border-primary"
                  style={{
                    width: '150px',
                    height: '150px',
                    overflow: 'hidden',
                  }}
                >
    <MDBCardImage
    id="previewImage"
      src={userDetails?.profilePicturePath
        ? `${baseapi}/${userDetails.profilePicturePath}?timestamp=${Date.now()}`
        : 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp'}
      alt="avatar"
      className="w-100 h-100"
      fluid
    />
  </div>

  {/* Pen icon for changing the profile picture */}
  <label htmlFor="fileInput" className="position-absolute bottom-0 end-0 m-2">
    <MDBIcon icon="pen" className="text-dark" />
  </label>

  {/* Input for choosing a file */}
  <input
    type="file"
    id="fileInput"
    className="d-none"
    accept='jpg,jpeg,png,svg'
    onChange={handleImageChange}
  />
</MDBCardBody>

              </div>
              {showBtn && (
                <button className="btn btn-sm btn-primary" onClick={handleUpload} disabled={loading}>
                  {loading ? 'Loading...' : 'Submit'}
                </button>
              )}
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush="true"
                  classNa
                  me="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3 fs-5" ref={assignedTicketsCounterRef} style={{ backgroundColor: '#FA8247' }}>
                    <MDBCardText className='counter-value fw-bold fs-3'>{assignedTicketsCount}</MDBCardText>

                    <MDBCardText>Total Tickets Assigned</MDBCardText>
                  </MDBListGroupItem>

                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3 fs-5" ref={resolvedTicketsCounterRef} style={{ backgroundColor: '#83F28F' }}>
                    <MDBCardText className='counter-value fw-bold fs-3'>{resolvedTicketsCount}</MDBCardText>
                    <MDBCardText>Tickets Resolved</MDBCardText>
                  </MDBListGroupItem>

                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
          
            {userDetails ? (
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{`${userDetails.firstName} ${userDetails.lastName}` || 'N/A'}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{userDetails.email || 'N/A'}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Designation</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{userDetails.designationName || 'N/A'}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Department</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{userDetails.departmentName || 'N/A'}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Mobile</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText
                        className="text-muted">{userDetails.mobileNo || 'N/A'}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Address</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{userDetails.address || 'N/A'}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>

            ) : (
              // You can add a loading state or message here  
              <p>Loading...</p>
            )}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};
export default ProfilePage;
