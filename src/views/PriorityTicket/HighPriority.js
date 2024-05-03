import React, { useState, useEffect }  from 'react';
import {  Spinner } from 'react-bootstrap'
import HighPriorityTable from './HighPriorityTable';

const ApiBaseUrl = process.env.REACT_APP_BASE_URL
const HighPriority = () => {
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Fetch user data from the API
      fetch(`${ApiBaseUrl}/api/Tickets/priority/high`)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          setTickets(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
          setLoading(false);
        });
        const fetchTickets = async () => {
            try {
              // Fetch all tickets
              const response = await fetch(`${ApiBaseUrl}/api/Tickets`);
              const data = await response.json();
      
              // Filter high priority tickets
              const highPriorityTickets = data.filter(ticket => ticket.priority === 'High');
      
              // Set tickets state with high priority tickets
              setTickets(highPriorityTickets);
            } catch (error) {
              console.error('Error fetching tickets', error);
            }
          };

           // Call the fetchTickets function
            fetchTickets();
        
    }, []);
  return (
    <div>


      {loading ? (
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className='visually-hidden'>loading..</span>
          </Spinner>
        </div>
      ) : (

      <HighPriorityTable tickets={tickets} />
      )
      }
    </div>
  );
};



export default HighPriority