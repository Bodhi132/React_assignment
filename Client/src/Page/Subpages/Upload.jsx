import React from 'react'
import { useState } from 'react'
import Table from '../../components/Table';

const Upload = () => {

  const [csvData, setCsvData] = useState('');

  const handleFileRead = (e) => {
    const content = e.target.result;
    const lines = content.split('\n');
    const headers = lines[0].split(',');

    console.log(headers);
    console.log(lines);

    const jsonData = lines.slice(1).map(line => {
      const regex = /(".*?"|[^",\s]+)(?=\s*,|\s*$)/g;
      const values = line.match(regex);
      console.log(values);
      return headers.reduce((obj, header, i) => {
        // If the header is "select tags", split the value into an array
        obj[header] = values[i] ? (header === "select tags" ? values[i].replace(/"/g, '').split(', ') : values[i]) : null;
        return obj;
      }, {});
    });

    setCsvData(jsonData);
    console.log(jsonData);
  };


  const handleFileChosen = (file) => {
    const fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  };

  return (
    <div>
      <input type='file' accept='.csv' onChange={e => handleFileChosen(e.target.files[0])} />
      {csvData && <Table data={csvData}/>}
    </div>
  );
}

export default Upload