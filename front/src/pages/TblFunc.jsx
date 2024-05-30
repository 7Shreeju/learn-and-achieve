import React, { useEffect,Component, useRef } from "react";
import $ from 'jquery';
import "datatables.net-dt/css/dataTables.dataTables.css";
import "datatables.net";

export function TblFunc(props) {
 
// $.DataTable = require('datatables.net');
const tableRef = useRef();

const tableName = "table1";
 
useEffect(() => {
    const table = $(`#${tableName}`).DataTable(
        {
            language: {
                searchPlaceholder: "Search",
                paginate: {
                  next: "Next",
                  previous: "Prev",
                },
              },
            data: props.data,
                columns: props.title,   
                columnDefs: [{ orderable: false, targets: 0 }],
                destroy: true,  
        }
    )
    
    return function() {
        table.destroy()
    }
},[])
    return (
        <div>
            <table className="display" width="100%" id={tableName} ref={ tableRef }></table>
        </div>
         
    )
}