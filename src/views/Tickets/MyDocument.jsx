import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import PropTypes from 'prop-types';

// Define styles for the PDF
const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontFamily: 'Helvetica',
  },
  title: {
    fontSize: 18,
    marginBottom: 15,
  },
  table: {
    display: 'table',
    width: '100%',
    marginBottom: 15,
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: '#000',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCol: {
    width: '12.5%', // Adjusted width to fit 8 columns on a page
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: '#000',
    padding: 5,
  },
  tableCell: {
    fontSize: 8,
    textAlign: 'center',
    wordWrap: 'break-word', // Ensure text wraps within the cell
  },
  noDataCell: {
    fontSize: 10,
    padding: 10,
    textAlign: 'center',
  },
});

// Helper function to chunk data into pages
const chunkData = (data, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < data.length; i += chunkSize) {
    chunks.push(data.slice(i, i + chunkSize));
  }
  return chunks;
};

// Create PDF Document Component
const MyDocument = ({ title, data }) => {
  const safeData = Array.isArray(data) ? data : [];
  const rowsPerPage = 20; // Number of rows per page before splitting
  const pages = chunkData(safeData, rowsPerPage);

  return (
    <Document>
      {pages.map((pageData, pageIndex) => (
        <Page size="A4" style={styles.page} key={pageIndex}>
          <Text style={styles.header}>{title}</Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableCol}>S.No</Text>
              <Text style={styles.tableCol}>TicketID</Text>
              <Text style={styles.tableCol}>Title</Text>
              <Text style={styles.tableCol}>Status</Text>
              <Text style={styles.tableCol}>Priority</Text>
              <Text style={styles.tableCol}>TicketType</Text>
              <Text style={styles.tableCol}>DueDate</Text>
              <Text style={styles.tableCol}>Department</Text>
              <Text style={styles.tableCol}>Project</Text>
            </View>
            {pageData.length > 0 ? (
              pageData.map((row, index) => (
                <View key={index} style={styles.tableRow}>
                  <Text style={styles.tableCol}>{pageIndex * rowsPerPage + index + 1}</Text>
                  <Text style={styles.tableCol}>{row.ticketId}</Text>
                  <Text style={styles.tableCol}>{row.title}</Text>
                  <Text style={styles.tableCol}>{row.status}</Text>
                  <Text style={styles.tableCol}>{row.priority}</Text>
                  <Text style={styles.tableCol}>{row.ticketType}</Text>
                  <Text style={[styles.tableCol, styles.tableCell]}>{new Date(row.dueDate).toLocaleDateString()}</Text>

                  <Text style={styles.tableCol}>{row.department}</Text>
                  <Text style={styles.tableCol}>{row.project}</Text>
                </View>
              ))
            ) : (
              <View style={styles.tableRow}>
                <Text style={styles.tableCol}>No data available</Text>
              </View>
            )}
          </View>
        </Page>
      ))}
    </Document>
  );
};

MyDocument.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
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

export default MyDocument;
