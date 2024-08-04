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
  },
  table: {
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    marginBottom: 20
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row'
  },
  tableCol: {
    width: '50%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableCell: {
    margin: 'auto',
    marginTop: 5,
    fontSize: 10
  },
  legend: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: 50,
    paddingTop: 20
  },
  legendItem: {
    fontSize: 12,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
  },
  legendColorBox: {
    width: 12,
    height: 12,
    marginRight: 5
  }
});

// Define data with categories
const idealPieData = [
  { name: 'Bacteroidetes', value: 700 },
  { name: 'Firmicutes', value: 200 },
  { name: 'Proteobacteria', value: 75 },
  { name: 'Actinobacteria', value: 15 },
  { name: 'Others', value: 10 }
];

// Assign corresponding colors to categories
const COLORS = ['#16D2E3', '#F1EF4A', '#8A4F9D', '#CC9C72', '#2B2D42'];

const UserDataTable = ({ userData }: { userData: any }) => (
  <View style={styles.table}>
    <View style={styles.tableRow}>
      <View style={styles.tableCol}>
        <Text style={styles.tableCell}>Name</Text>
      </View>
      <View style={styles.tableCol}>
        <Text style={styles.tableCell}>{userData.name}</Text>
      </View>
    </View>
    <View style={styles.tableRow}>
      <View style={styles.tableCol}>
        <Text style={styles.tableCell}>Age</Text>
      </View>
      <View style={styles.tableCol}>
        <Text style={styles.tableCell}>{userData.age}</Text>
      </View>
    </View>
    <View style={styles.tableRow}>
      <View style={styles.tableCol}>
        <Text style={styles.tableCell}>Gender</Text>
      </View>
      <View style={styles.tableCol}>
        <Text style={styles.tableCell}>{userData.gender}</Text>
      </View>
    </View>
    <View style={styles.tableRow}>
      <View style={styles.tableCol}>
        <Text style={styles.tableCell}>Type of Biomaterial</Text>
      </View>
      <View style={styles.tableCol}>
        <Text style={styles.tableCell}>{userData.type_of_biomaterial}</Text>
      </View>
    </View>
    <View style={styles.tableRow}>
      <View style={styles.tableCol}>
        <Text style={styles.tableCell}>Sample Collection Date</Text>
      </View>
      <View style={styles.tableCol}>
        <Text style={styles.tableCell}>{userData.sample_collection_date}</Text>
      </View>
    </View>
    <View style={styles.tableRow}>
      <View style={styles.tableCol}>
        <Text style={styles.tableCell}>Report Preparation Date</Text>
      </View>
      <View style={styles.tableCol}>
        <Text style={styles.tableCell}>{userData.report_preparation_date}</Text>
      </View>
    </View>
  </View>
);

const Report = ({
  userData,
  microBiomeData
}: {
  userData: any;
  microBiomeData: any;
}) => {
  console.log(microBiomeData);
  const pieData = [
    { name: 'Bacteroidetes', value: microBiomeData.bacteriodetes },
    { name: 'Firmicutes', value: microBiomeData.firmicutes },
    { name: 'Proteobacteria', value: microBiomeData.proteobacteria },
    { name: 'Actinobacteria', value: microBiomeData.actinobacteria },
    { name: 'Others', value: microBiomeData.others }
  ];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>
          Your health snapshot on {userData.report_preparation_date}
        </Text>

        {/* User Data Table */}
        <UserDataTable userData={userData} />
      </Page>
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
              style={{
                ...styles.bar,
                width: '70%',
                backgroundColor: '#8884d8'
              }}
            />
            <Text style={styles.chartLabel}>Ideal</Text>
          </View>

          {/* Metabolic fitness */}
          <View style={styles.barChartContainer}>
            <Text style={styles.chartLabel}>Metabolic fitness</Text>
            <View
              style={{
                ...styles.bar,
                width: '50%',
                backgroundColor: '#83a6ed'
              }}
            />
            <Text style={styles.chartLabel}>Ideal</Text>
          </View>

          {/* Heart health */}
          <View style={styles.barChartContainer}>
            <Text style={styles.chartLabel}>Heart health</Text>
            <View
              style={{
                ...styles.bar,
                width: '20%',
                backgroundColor: '#8dd1e1'
              }}
            />
            <Text style={styles.chartLabel}>Ideal</Text>
          </View>

          {/* Detox & Organ fitness */}
          <View style={styles.barChartContainer}>
            <Text style={styles.chartLabel}>Detox & Organ fitness</Text>
            <View
              style={{
                ...styles.bar,
                width: '60%',
                backgroundColor: '#82ca9d'
              }}
            />
            <Text style={styles.chartLabel}>Ideal</Text>
          </View>

          {/* Blood and Immunity */}
          <View style={styles.barChartContainer}>
            <Text style={styles.chartLabel}>Blood and Immunity</Text>
            <View
              style={{
                ...styles.bar,
                width: '60%',
                backgroundColor: '#a4de6c'
              }}
            />
            <Text style={styles.chartLabel}>Ideal</Text>
          </View>
        </View>

        {/* Microbiome Analysis */}
        <View style={styles.microbiomeSection}>
          <Text style={styles.evaluationHeader}>Microbiome Analysis</Text>
          <View style={styles.flex}>
            <ReactPDFChart>
              <PieChart width={150} height={150}>
                <Pie
                  data={idealPieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={70}
                  fill="#8884d8"
                  dataKey="value"
                  isAnimationActive={false}
                >
                  {idealPieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ReactPDFChart>
            <ReactPDFChart>
              <PieChart width={150} height={150}>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={70}
                  fill="#8884d8"
                  dataKey="value"
                  isAnimationActive={false}
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ReactPDFChart>
            <View style={styles.legend}>
              {pieData.map((entry, index) => (
                <View key={entry.name} style={styles.legendItem}>
                  <View
                    style={{
                      ...styles.legendColorBox,
                      backgroundColor: COLORS[index % COLORS.length]
                    }}
                  />
                  <Text>{entry.name}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

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
};

export default Report;
