import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import ReactPDFChart from 'react-pdf-charts';
import {
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
  XAxis,
  YAxis
} from 'recharts';

// Define styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica'
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333'
  },
  summarySection: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
    marginBottom: 20
  },
  summaryText: {
    fontSize: 10,
    marginBottom: 5
  },
  evaluationSection: {
    marginBottom: 20
  },
  evaluationHeader: {
    fontSize: 12,
    marginBottom: 10
  },
  barChartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  chartLabel: {
    fontSize: 10,
    marginBottom: 5,
    color: '#666'
  },
  bar: {
    height: 10,
    borderRadius: 5
  },
  microbiomeSection: {
    marginBottom: 20
  },
  assessmentSection: {
    marginBottom: 20
  },
  assessmentText: {
    fontSize: 10,
    marginBottom: 10
  },
  flex: {
    display: 'flex',
    flexDirection: 'row'
  }
});

const areaData = [
  { name: '', value: 0 },
  { name: '', value: 10 },
  { name: '', value: 20 },
  { name: '', value: 30 },
  { name: '', value: 40 },
  { name: '', value: 50 },
  { name: '', value: 40 },
  { name: '', value: 30 },
  { name: '', value: 20 },
  { name: '', value: 10 },
  { name: '', value: 0 }
];

// Dummy data for charts
const pieData = [
  { name: 'Bacteroidetes', value: 400, color: '#8884d8' },
  { name: 'Firmicutes', value: 300, color: '#83a6ed' },
  { name: 'Proteobacteria', value: 300, color: '#8dd1e1' },
  { name: 'Others', value: 200, color: '#82ca9d' }
];

const Report = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <Text style={styles.header}>Your health snapshot on 5 Oct 2023</Text>

      {/* Summary Section */}
      <View style={styles.summarySection}>
        <Text style={styles.summaryText}>Overall Summary for John Doe</Text>
        <Text style={styles.summaryText}>
          Your overall assessment seems ok, but would need improvement.
        </Text>
      </View>

      {/* Evaluation Section */}
      <View style={styles.evaluationSection}>
        <Text style={styles.evaluationHeader}>Your evaluation:</Text>

        {/* Gut & Microbiome */}
        <View style={styles.barChartContainer}>
          <Text style={styles.chartLabel}>Gut & Microbiome</Text>
          <View
            style={{ ...styles.bar, width: '70%', backgroundColor: '#8884d8' }}
          />
          <Text style={styles.chartLabel}>Ideal</Text>
        </View>

        {/* Metabolic fitness */}
        <View style={styles.barChartContainer}>
          <Text style={styles.chartLabel}>Metabolic fitness</Text>
          <View
            style={{ ...styles.bar, width: '50%', backgroundColor: '#83a6ed' }}
          />
          <Text style={styles.chartLabel}>Ideal</Text>
        </View>

        {/* Heart health */}
        <View style={styles.barChartContainer}>
          <Text style={styles.chartLabel}>Heart health</Text>
          <View
            style={{ ...styles.bar, width: '20%', backgroundColor: '#8dd1e1' }}
          />
          <Text style={styles.chartLabel}>Ideal</Text>
        </View>

        {/* Detox & Organ fitness */}
        <View style={styles.barChartContainer}>
          <Text style={styles.chartLabel}>Detox & Organ fitness</Text>
          <View
            style={{ ...styles.bar, width: '60%', backgroundColor: '#82ca9d' }}
          />
          <Text style={styles.chartLabel}>Ideal</Text>
        </View>

        {/* Blood and Immunity */}
        <View style={styles.barChartContainer}>
          <Text style={styles.chartLabel}>Blood and Immunity</Text>
          <View
            style={{ ...styles.bar, width: '60%', backgroundColor: '#a4de6c' }}
          />
          <Text style={styles.chartLabel}>Ideal</Text>
        </View>
      </View>

      {/* Microbiome Analysis */}
      <View style={styles.microbiomeSection}>
        <Text style={styles.evaluationHeader}>Microbiome Analysis</Text>
        <View style={styles.flex}>
          <ReactPDFChart>
            <PieChart width={200} height={100}>
              <Pie
                data={pieData}
                dataKey="value"
                cx={50}
                cy={50}
                innerRadius={30}
                outerRadius={40}
                fill="#8884d8"
                isAnimationActive={false}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ReactPDFChart>
          <ReactPDFChart>
            <PieChart width={200} height={100}>
              <Pie
                data={pieData}
                dataKey="value"
                cx={50}
                cy={50}
                innerRadius={30}
                outerRadius={40}
                fill="#8884d8"
                isAnimationActive={false}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ReactPDFChart>
        </View>
      </View>

      {/* Assessment Section */}
      {/* Assessment Section */}
      <View style={styles.assessmentSection}>
        <Text style={styles.assessmentText}>
          You are in the top 50% of the users for your Biome score.
        </Text>
        <ReactPDFChart>
          <AreaChart width={300} height={100} data={areaData}>
            <XAxis hide={true} />
            <YAxis hide={true} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#82ca9d"
              fill="#82ca9d"
              fillOpacity={0.3}
              isAnimationActive={false}
            />
          </AreaChart>
        </ReactPDFChart>
      </View>
    </Page>
  </Document>
);

export default Report;
