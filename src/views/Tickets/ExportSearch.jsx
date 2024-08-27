import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import PropTypes from 'prop-types'; // Import PropTypes
import { Button } from 'react-bootstrap';

const ExportSearch = ({ tickets, }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleExport = (format) => {
    const fileName = 'FilteredTable';

    if (format === 'PDF') {
      exportToPDF(fileName);
    } else if (format === 'Excel') {
      exportToExcel(fileName);
    }

    setIsDropdownOpen(false);
  };

  const exportToPDF = (fileName) => {
    try {
      const doc = new jsPDF();
      const tableColumn = ["S.No", "TicketID", "Title", "Status", "Priority", "TicketType", "DueDate", "Department", "Project"];
      const tableRows = tickets.map((row, index) => [
        index + 1,
        row.ticketId,
        row.title,
        row.status,
        row.priority,
        row.ticketType,
        new Date(row.dueDate).toLocaleDateString(),
        row.department,
        row.project
      ]);

      doc.autoTable(tableColumn, tableRows, { startY: 20 });
      doc.text(fileName, 14, 15);
      doc.save(`${fileName}.pdf`);
    } catch (error) {
      console.error('Error exporting to PDF:', error);
    }
  };

  const exportToExcel = (fileName) => {
    try {
      const worksheet = XLSX.utils.json_to_sheet(tickets);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
      XLSX.writeFile(workbook, `${fileName}.xlsx`);
    } catch (error) {
      console.error('Error exporting to Excel:', error);
    }
  };

  const dropdownMenuStyle = {
    display: isDropdownOpen ? 'flex' : 'none',
    flexDirection: 'column',
    position: 'absolute',
    top: '100%',
    right: 0,
    backgroundColor: 'white',
    border: '1px solid #ddd',
    borderRadius: '4px',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
    
  };

  const dropdownItemStyle = {
    padding: '8px 16px',
    border: 'none',
    background: 'none',
    textAlign: 'left',
    cursor: 'pointer',
  };

  const dropdownItemHoverStyle = {
    backgroundColor: '#f1f1f1',
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <Button className='btn-secondary'  onClick={toggleDropdown}>
        <FontAwesomeIcon
        icon={faDownload}
       
        style={{ cursor: 'pointer'}}
      />
      </Button>
      
      <div style={dropdownMenuStyle}>
        <button
          style={dropdownItemStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = dropdownItemHoverStyle.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = 'none')}
          onClick={() => handleExport('PDF')}
        >
          Export as PDF
        </button>
        <button
          style={dropdownItemStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = dropdownItemHoverStyle.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = 'none')}
          onClick={() => handleExport('Excel')}
        >
          Export as Excel
        </button>
      </div>
    </div>
  );
};

ExportSearch.propTypes = {
  tickets: PropTypes.arrayOf(
    PropTypes.shape({
      ticketId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      priority: PropTypes.string.isRequired,
      ticketType: PropTypes.string.isRequired,
      dueDate: PropTypes.string.isRequired,
      department: PropTypes.string.isRequired,
      project: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ExportSearch;
