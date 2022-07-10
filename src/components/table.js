import { Header } from "./header";
import { TableData } from "./tableData";
import "../styling/table.css";

export const Table = () => {
  return (
    <>
      <div
        style={{
          boxShadow: "0px 0px 20px grey",
          margin: "4rem",
          marginBottom: "1rem",
          width: "85%",
          maxHeight: "75%",
          minHeight: "50%",
          overflow: "scroll",
        }}
      >
        <Header />
        <TableData />
      </div>
      <div
        className="addBtn"
        style={{
          borderRadius: "50%",
          height: "4rem",
          width: "4rem",
          boxShadow: "0px 0px 30px red",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            fontSize: "2.8rem",
            fontWeight: "bold",
            // padding:"2rem",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          +
        </div>
      </div>
    </>
  );
};
