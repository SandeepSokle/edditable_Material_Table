import { Table } from "./components/table/materialTable";

function App() {
  console.log("In app")
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
      <Table />
      table
    </div>
  );
}

export default App;
