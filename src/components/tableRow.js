export const TableRow = (props) => {
  const { data } = props;
  return (
    <div
      style={{
        boxShadow: "0px 0px 2px grey",
        height: "3rem",
        // background: "#dedddd",
        overflow: "auto",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {[
        `${data.first_name} ${data.middle_name} ${data.last_name}`,
        data.gender,
        data.email,
        data.phone_number,
        data.address,
      ].map((ele) => {
        return (
          <div
            style={{
              width: "30%",
              //   boxShadow: "1px 0px 1px",
              borderRight: "2px solid grey",
              height: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              overflow: "auto",
            }}
          >
            {ele}
          </div>
        );
      })}
      <div
        style={{
          width: "30%",
          //   boxShadow: "1px 0px 1px",
          borderRight: "2px solid grey",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          overflow: "auto",
        }}
      >
        Edit Delete
      </div>
    </div>
  );
};
