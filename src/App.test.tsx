import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import DataTable from './components/dataTable';

describe('Test Data Table', () => {
  test('Should render table', () => {
    const filteredData = {
      "data1": {
        'title': 'childTitle',
        'mean': 50,
        'median': 15,
        'mode': [25, 25],
      },
    }
    render(<DataTable tData={filteredData} tableTitle={"Measure"} categoryTitle="Flavanoids"/>);
    const linkElementMean = screen.getByText(/Flavanoids Mean/i);
    const linkElementMode = screen.getByText(/Flavanoids Median/i);
    const linkElementMedian = screen.getByText(/Flavanoids Mode/i);
    expect(linkElementMean).toBeInTheDocument();
    expect(linkElementMode).toBeInTheDocument();
    expect(linkElementMedian).toBeInTheDocument();

    expect(screen.getByText(/50/i)).toBeInTheDocument();
    expect(screen.getByText(/15/i)).toBeInTheDocument();
    expect(screen.getByText(/25,25/i)).toBeInTheDocument();
  });
})
