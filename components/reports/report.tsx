import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Define styles
const styles = StyleSheet.create({
  page: {
    padding: 30
  },
  section: {
    marginBottom: 10
  },
  header: {
    fontSize: 20,
    marginBottom: 20
  },
  subheader: {
    fontSize: 16,
    marginBottom: 10
  },
  text: {
    fontSize: 12
  },
  chart: {
    width: '100%',
    height: 100,
    marginBottom: 20,
    border: '1px solid #ddd'
  }
  // Add more styles as needed
});

// Create PDF component
const Report = ({ data }: { data: any }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>Your health snapshot on</Text>
        <Text style={styles.subheader}>{data.date}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheader}>Overall Summary for {data.name}</Text>
        <Text style={styles.text}>{data.summary}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheader}>Your evaluation:</Text>
        {/* Include your evaluation bars and other graphical elements here */}
        <View style={styles.chart}>
          <Text>Chart Placeholder</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheader}>Microbiome Analysis</Text>
        {/* Include pie charts or other analysis elements here */}
        <View style={styles.chart}>
          <Text>Pie Chart Placeholder</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheader}>Assessment</Text>
        <Text style={styles.text}>{data.assessment}</Text>
      </View>
    </Page>
  </Document>
);

export default Report;
