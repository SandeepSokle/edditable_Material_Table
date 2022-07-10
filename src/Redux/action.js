const action = {
  updateData: (data) => {
    return {
      type: "UPDATE",
      payload: data,
    };
  },
  addData: (data) => {
    return {
      type: "ADD",
      payload: data,
    };
  },
  deleteData: (data) => {
    return {
      type: "DELETE",
      payload: data,
    };
  },
};


module.exports = {
    action,
  };