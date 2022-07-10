import { completeData } from "../data/TableData";
import { TableRow } from "./tableRow";

export const TableData = () => {
  return (
    <div style = {{
        display : "flex",
        flexDirection : "column",
    }}>
      {completeData.map((ele) => {
        return <TableRow data = {ele}/>;
      })}
    </div>
  );
};
