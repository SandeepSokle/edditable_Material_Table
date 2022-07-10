import { useState } from "react";
import EditDataModel from "./components/editDataModel";
import { Table } from "./components/table/materialTable";
import { completeData } from "./data/TableData";

function App() {
  // console.log("In app")
  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setSelectedData(null);
    setOpen(false);
  };

  const columns = [
    { title: "First Name", field: "first_name" },
    { title: "Middle Name", field: "middle_name" },
    { title: "Last Name", field: "last_name" },
    { title: "Gender", field: "gender" },
    { title: "Email", field: "email" },
    { title: "Phone Number", field: "phone_number" },
    { title: "Address", field: "address" },
  ];
  const editableList = [
    { name: "First Name", dataKey: "first_name", type: "string" },
    { name: "Middle Name", dataKey: "middle_name", type: "string" },
    { name: "Last Name", dataKey: "last_name", type: "string" },
    {
      name: "Gender",
      dataKey: "gender",
      type: "dropDown",
      dropDownData: ["Male", "Female"],
    },
    { name: "Email", dataKey: "email", type: "string" },
    { name: "Phone Number", dataKey: "phone_number", type: "string" },
    { name: "Address", dataKey: "address", type: "string" },
  ];
  
  return (
    <div
      className="App"
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <Table
        data={completeData}
        columns={columns}
        setSelectedData={setSelectedData}
        handleOpen={handleOpen}
        title="Editable Material Table"
      />
      {open ? (
        <EditDataModel
          open={open}
          editableList={editableList}
          selectedData={selectedData}
          handleClose={handleClose}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
