import React, { useState } from 'react';

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
        <table className="table-auto">
            <thead>
                <tr>
                    {Object.keys(data[0]).map((key, index) => (
                        <th key={index} className="px-4 py-2">{key}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        {Object.entries(row).map(([key, value], i) => {
                            if (key !== "select tags" && key !== "selected tags\r") {
                                return <td key={i} className="border px-4 py-2">{value}</td>;
                            } else if (key === "select tags") {
                                return (
                                    <td key={i} className="border px-4 py-2">
                                        <select value={selectedOption[index]} onChange={event => handleSelectChange(index, event)}>
                                            <option hidden>Select Tags</option>
                                            {value.map((tag, j) => (
                                                <option key={j} value={tag}>{tag}</option>
                                            ))}
                                        </select>
                                    </td>
                                );
                            } else if (key === "selected tags\r") {
                                return <td key={i} className="border px-4 py-2">
                                    <div className='flex justify-around'>
                                        {selectedTags[index].map((tag, j) => (
                                            <div key={j} className='rounded bg-slate-200'>
                                                {tag} <span onClick={() => handleTagRemove(index, tag)}>X</span>
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
    );
}

export default Table;

