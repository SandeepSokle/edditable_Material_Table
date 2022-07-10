export const Header = () => {
  return (
    <div
      style={{
        boxShadow: "0px 0px 2px grey",
        height: "2rem",
        background: "#dedddd",
        overflow: "auto",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {["Name", "Gender", "Email", "Phone", "Address", ""].map((ele) => {
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
    </div>
  );
};
