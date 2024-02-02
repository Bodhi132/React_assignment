import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Table({ data }) {
    const [selectedTags, setSelectedTags] = useState(Array(data.length).fill([]));
    const [selectedOption, setSelectedOption] = useState(Array(data.length).fill('Select Tags'));

    const handleSelectChange = (index, event) => {
        const newSelectedTags = [...selectedTags];
        newSelectedTags[index] = [...newSelectedTags[index], event.target.value];
        setSelectedTags(newSelectedTags);

        const newSelectedOption = [...selectedOption];
        newSelectedOption[index] = event.target.value;
        setSelectedOption(newSelectedOption);
    };

    const handleTagRemove = (index, tag) => {
        const newSelectedTags = [...selectedTags];
        newSelectedTags[index] = newSelectedTags[index].filter(t => t !== tag);
        setSelectedTags(newSelectedTags);

        const newSelectedOption = [...selectedOption];
        newSelectedOption[index] = 'Select Tags';
        setSelectedOption(newSelectedOption);
    };

    return (
        <div className='bg-[#F5F5F5] p-8 rounded-lg w-[1065px] max-sm:w-full'>
            <table className="table-auto bg-transparent w-full">
                <thead>
                    <tr>
                        {Object.keys(data[0]).map((key, index) => 
                            {
                                if(key == 'id'){
                                    return <th key={index} className="px-4 py-2">Sl No.</th>
                                }
                                else if(key == 'select tags'){
                                    return <th key={index} className="px-4 py-2">Add Tags</th>
                                }
                                else{
                                    return <th key={index} className="px-4 py-2">{key}</th>
                                }
                            }
                            // 
                        )}
                    </tr>
                </thead>
                <tbody className=' space-y-4 bg-transparent'>
                    {data.map((row, index) => (
                        <tr key={index} className=' bg-white border-8 border-[#F5F5F5] rounded-lg'>
                            {Object.entries(row).map(([key, value], i) => {
                                if (key !== "select tags" && key !== "selected tags\r") {
                                    return <td key={i} className=" px-4 py-2">{key === 'links' ? <Link to={{pathname:value}} target='_blank' className=' cursor-pointer text-[#605BFF] underline'>{value}</Link> : value}</td>;
                                } else if (key === "select tags") {
                                    return (
                                        <td key={i} className=" px-4 py-2">
                                            <select value={selectedOption[index]} onChange={event => handleSelectChange(index, event)}>
                                                <option hidden>Select Tags</option>
                                                {value.map((tag, j) => (
                                                    <option key={j} value={tag}>{tag}</option>
                                                ))}
                                            </select>
                                        </td>
                                    );
                                } else if (key === "selected tags\r") {
                                    return <td key={i} className=" px-4 py-2">
                                        <div className='flex justify-around flex-wrap'>
                                            {selectedTags[index].map((tag, j) => (
                                                <div key={j} className='rounded bg-[#605BFF] flex items-center mx-2 px-2 mb-2'>
                                                    {tag} <span onClick={() => handleTagRemove(index, tag)} className=' cursor-pointer ml-2'>X</span> 
                                                </div>
                                            ))}
                                        </div>
                                    </td>;
                                }
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;

