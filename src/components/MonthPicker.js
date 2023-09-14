import React from "react"

const MonthPicker = (props) => {
  return (
    <div className="">
      <select name="" id="month" className='p-4 focus:outline-none border-b-2 focus:border-primary mr-4'>
        <option>Mounth</option>
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>
      </select>    
      <select name="" id="year" className='p-4 focus:outline-none border-b-2 focus:border-primary'>
        <option>Year</option>
        {Array.from({ length: 8 }, (_, index) => {
          const year = 2023 + index;
          return <option key={year} value={year}>{year}</option>;
        })}
      </select>   
    </div>
  )
};

export default MonthPicker;
