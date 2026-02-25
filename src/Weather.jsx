import { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import "./App.css";

function Weather() {

const [data,setData]=useState([]);

useEffect(()=>{

fetch("/testset.xlsx")
.then(res=>res.arrayBuffer())
.then(buffer=>{

const workbook = XLSX.read(buffer);

const sheet = workbook.Sheets[workbook.SheetNames[0]];

const jsonData = XLSX.utils.sheet_to_json(sheet);

setData(jsonData.slice(0,100));

});

},[]);

return(

<div className="container">

<h1>Delhi Weather Dataset</h1>

<table>

<thead>

<tr>

<th>Date</th>
<th>Condition</th>
<th>Temperature</th>
<th>Humidity</th>
<th>Pressure</th>

</tr>

</thead>

<tbody>

{data.map((row,index)=>(
<tr key={index}>

<td>{row.datetime_utc}</td>
<td>{row._conds}</td>
<td>{row._tempm}</td>
<td>{row._hum}</td>
<td>{row._pressurem}</td>

</tr>
))}

</tbody>

</table>

</div>

)

}

export default Weather;