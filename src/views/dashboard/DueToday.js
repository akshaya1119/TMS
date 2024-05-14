import React, { useEffect, useState } from 'react';
import { Card, Table } from 'react-bootstrap';
import axios from 'axios';
import { useUser } from './../../context/UserContext';

const ApiBaseUrl = process.env.REACT_APP_BASE_URL;

const DueToday = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user, isLoading, isError } = useUser();
  const [dueTodayTasks, setDueTodayTasks] = useState([]);
  const [upcomingTasks, setUpcomingTasks] = useState([]);

  useEffect(() => {
    if (!isLoading && !isError) {
      fetchDueTodayTickets();
    }
  }, [isLoading, isError, user.email]);

  const fetchDueTodayTickets = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${ApiBaseUrl}/api/Tickets?userId=${user.userId}`);
      // Filter tickets where assigneeEmail matches the logged-in user's email
      const filteredTickets = response.data.filter(ticket => ticket.assigneeId === user.userId);
      setTickets(filteredTickets);
      const todayTasks = getTicketsDueToday(filteredTickets);
      const upcomingTasks = getUpcomingDueDateTickets(filteredTickets);
      setDueTodayTasks(todayTasks);
      setUpcomingTasks(upcomingTasks);
    } catch (error) {
      console.error('Error fetching tickets:', error);
    } finally {
      setLoading(false);
    }
  };

  const getTicketsDueToday = (allTickets) => {
    // Get today's date
    const today = new Date().toISOString().split('T')[0];
    // Filter tickets that are due today
    return allTickets.filter(ticket => ticket.dueDate.split('T')[0] === today);
  };

  const getUpcomingDueDateTickets = (allTickets) => {
    // Get today's date
    const today = new Date();
    // Calculate the date for two days from today
    const twoDaysLater = new Date();
    twoDaysLater.setDate(today.getDate() + 2);
    // Filter tickets that have due date within the next two days
    return allTickets.filter(ticket => {
      const dueDate = new Date(ticket.dueDate);
      return dueDate > today && dueDate <= twoDaysLater;
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching user data.</div>;
  }

  return (
    <div>
      {(dueTodayTasks.length === 0) ? (
        <Card className='mt-2'>
          <Card.Body>
            <div className='text-center'>No tasks due today.</div>
          </Card.Body>
        </Card>
      ) : (
        <>
          <Card className='mt-2'>
            <Card.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Title</th>
                    <th>Deadline</th>
                  </tr>
                </thead>
                <tbody>
                  {dueTodayTasks.map((ticket, index) => (
                    <tr key={ticket.ticketId}>
                      <td>{index + 1}</td>
                      <td>{ticket.title}</td>
                      <td>{ticket.dueDate.split('T')[0]}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </>
      )}
      {(upcomingTasks.length > 0) && (
        <Card className='mt-2'>
          <Card.Body>
            <h5>Upcoming Due Date Tasks</h5>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Title</th>
                  <th>Deadline</th>
                </tr>
              </thead>
              <tbody>
                {upcomingTasks.map((ticket, index) => (
                  <tr key={ticket.ticketId}>
                    <td>{index + 1}</td>
                    <td>{ticket.title}</td>
                    <td>{ticket.dueDate.split('T')[0]}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default DueToday;
