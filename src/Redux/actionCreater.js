import { action } from "./action";
const { updateData } = action;
const updateDataActionCreater = (data, dispatch) => {
  dispatch(updateData(data));
};


module.exports = {
    updateDataActionCreater
}