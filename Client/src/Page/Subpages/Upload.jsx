import React from 'react'
import { useState } from 'react'
import Table from '../../components/Table';
import excel from '../../assets/excel.png'
import upload from '../../assets/upload.png'

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
    <div className='w-full flex flex-col justify-center items-center font-montserrat mt-5'>
      <div className='lg:w-[596px] md:w-[500px] w-[215px] h-[294px] sm:h-[367px] bg-white rounded-lg flex flex-col items-center'>
        <div className='w-[85%] h-[65%] border-2 border-dotted rounded-lg mt-7 flex flex-col justify-center items-center text-[14px] sm:text-[16px]'>
          <img src={excel} alt="" />
          <p>Drop your Excel sheet here or <a href="#" className='text-[#605BFF]' onClick={(e) => { e.preventDefault(); document.getElementById('fileUpload').click(); }}>browse</a></p>
        </div>
        <input type='file' id="fileUpload" accept='.csv' onChange={e => handleFileChosen(e.target.files[0])} style={{ display: 'none' }} />
        <button onClick={() => document.getElementById('fileUpload').click()} className='w-[85%] h-[56px] bg-[#605BFF] mt-4 rounded-lg flex justify-center items-center'><img src={upload}  /><p className=' text-white font-semibold text-[14px] mx-1'>Upload</p></button>
      </div>
      <div className=' mt-16 w-full flex justify-center '>
        {csvData && <Table data={csvData} />}
      </div>
    </div>
  );
}

export default Upload