// ViewAllTickets.js

import React, { useState, useEffect } from 'react';
import TicketsTable from './TicketsTable';
import { Spinner, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import PermissionChecker from './../../context/PermissionChecker';
import { useNavigate } from 'react-router-dom';
import { useUser } from './../../../src/context/UserContext';
import AdvancedSearch from './AdvancedSearch';
import ExportSearch from './ExportSearch'; // Import the ExportSearch component

const ticketapi = process.env.REACT_APP_API_TICKET;

const ViewAllTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();
  const navigate = useNavigate();

  const onClickAddTicket = () => {
    navigate('/Tickets/AddTicket');
  };



  const fetchData = async (url, options = {}) => {
    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };


  const fetchTickets = async () => {
    try {
      const url = `${ticketapi}?userId=${user.userId}`;
      const options = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const data = await fetchData(url, options);
      setTickets(data);
    } catch (error) {
      console.error('Error fetching tickets:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.userId) {
      fetchTickets();
    }
  }, [ticketapi, user.userId, user.token]);


  const handleApplyFilters = (filteredTickets) => {
    setTickets(filteredTickets);
  };

  return (

    <PermissionChecker>
      {({ hasPermission }) => (
        <div>

          <div>
            <AdvancedSearch onApplyFilters={handleApplyFilters} fetchTickets={fetchTickets} />
          </div>

          <div className='d-flex justify-content-between mb-3'>
            <h4>All Tickets</h4>
            <div className='d-flex gap-2    align-items-center'>
              <ExportSearch tickets={tickets} setTickets={setTickets} />
              {hasPermission(2, 'canAddOnly') && (

                <Button type="button" className="btn btn-primary" onClick={onClickAddTicket}>
                  Add Ticket
                </Button>
              )}

            </div>
          </div>
          <div>
            {loading ? (
              <div className="text-center">
                <Spinner animation="border" role="status">
                  <span className='visually-hidden'>loading..</span>
                </Spinner>
              </div>
            ) : (
              <TicketsTable tickets={tickets} hasPermission={hasPermission} setTickets={setTickets} />
            )}
          </div>
        </div>
      )}
    </PermissionChecker>
  );
};

export default ViewAllTickets;
