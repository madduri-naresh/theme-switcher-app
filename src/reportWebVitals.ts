// Import the web-vitals library
import {
  onCLS,
  onFID,
  onFCP,
  onLCP,
  onTTFB,
  Metric
} from 'web-vitals';

// Define a type for the report handler function
type ReportHandler = (metric: Metric) => void;

// Function to report web vitals
const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    // Use the on* functions to observe and report metrics
    onCLS(onPerfEntry);
    onFID(onPerfEntry);
    onFCP(onPerfEntry);
    onLCP(onPerfEntry);
    onTTFB(onPerfEntry);
  }
};

// Export the function for use in other parts of your application
export default reportWebVitals;
