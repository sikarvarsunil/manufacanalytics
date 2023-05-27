import React, { useEffect, useState } from 'react';
import './App.css';
import data from './mockData/data'
import DataTable from './components/dataTable'
import { setValBykey, setMeanMedianMode, setValByCalculation } from './utils'
import { rejects } from 'assert';


const App: React.FC =  () => {
  const [filteredData, setFilteredData] = useState<any>({});
  const getSortedData = async () =>  {
    const filterFlavanoids = await setValBykey(data, 'Alcohol', 'Flavanoids');
    const getFlavMeanMedianMode = await setMeanMedianMode(filterFlavanoids,  'Flavanoids');
    const calcGama = await setValByCalculation(data, 'Alcohol', 'Ash', 'Hue', 'Magnesium');
    const getGamaMedianMode = await setMeanMedianMode(calcGama,  'Flavanoids');
    setFilteredData({
      "flavanoids": getFlavMeanMedianMode,
      "gamma": getGamaMedianMode
    })
  }

  useEffect(() => {
    getSortedData()
  }, [])
  return (
    <div className="App">
      {Object.keys(filteredData).length > 0 &&  Object.keys(filteredData).map((item) => <div>
        {item === 'flavanoids' && <DataTable tData={filteredData[item]} tableTitle={"Measure"} categoryTitle="Flavanoids" />}
        {item === 'gamma' && <DataTable tData={filteredData[item]} tableTitle={"Measure"} categoryTitle="Gamma" />}
      </div>
      )}
    </div>
  );
}

export default App;
