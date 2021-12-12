import * as types from '../constants';

const changeUserName = data => {
  return {
    type: types.USERNAME,
    payload: data,
  };
};

const changeUserProfilePicture = data => {
  return {
    type: types.USERPROFILEPICTURE,
    payload: data,
  };
};

const changeParentContactNumber = data => {
  return {
    type: types.PARENTMOBILE,
    payload: data,
  };
};
const changeSchoolContactNumber = data => {
  return {
    type: types.SCHOOLCONTACT,
    payload: data,
  };
};

export {
  changeUserName,
  changeUserProfilePicture,
  changeParentContactNumber,
  changeSchoolContactNumber,
};
