import React, { useEffect, useMemo, useState } from "react";
import * as mockTableData from "../../assets/store_test.json";
import { AgGridReact } from "ag-grid-react"; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-balham.css"; // Theme

const DataGrid = () => {
  const [gridApi, setGridApi] = useState(null);
  const rowData = mockTableData.default.slice(0, 50);
  const columns = Object.keys(rowData[0]);
  const columnData = columns.map((col) => {
    return {
      field: col,
      filterParams: {
        buttons: ["apply", "reset"],
        closeOnApply: true,
        //suppressAndOrCondition: true
      },
    };
  });
  columnData[0].checkboxSelection = true;
  columnData[0].headerCheckboxSelection = true;
  console.log("cols", columnData[0]);

  const defaultColDef = useMemo(() => {
    return {
      editable: true,
      flex: 1,
      minWidth: 100,
      filter: true,
    };
  }, []);

  // console.log("coldata", columnData);
  // console.log(rowData);

  const handleCellValueChange = (event) => {
    console.log("the event s", event);
  };

  useEffect(() => {}, [gridApi]);

  return (
    <div>
      DataGrid table data is here:
      <div className="ag-theme-balham" style={{ height: 500 }}>
        <AgGridReact
          onGridReady={(e) => setGridApi(e.gridApi)}
          suppressRowClickSelection
          rowData={rowData}
          columnDefs={columnData}
          defaultColDef={defaultColDef}
          rowSelection="multiple"
          onCellValueChanged={(event) => handleCellValueChange(event)}
        />
      </div>
    </div>
  );
};

export default DataGrid;
