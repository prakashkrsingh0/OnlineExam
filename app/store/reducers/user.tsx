import * as types from '../constants';
const intialState = {
  userName: 'tekina',
  parentContactNumber: "7739939996",
  schoolContactNumber: "9090909090",
  userProfilePicture: null,
  class: 'KG',
  rollNumber: '1',
  schoolName:"st. fransic school"
};

export default (state = intialState, action) => {
  switch (action.type) {
    case types.USERNAME:
      return {...state, userName: action.payload};
    case types.USERPROFILEPICTURE:
      return {...state, userProfilePicture: action.payload};
    case types.PARENTMOBILE:
      return {...state, parentContactNumber: action.payload};
    case types.SCHOOLCONTACT:
      return {...state, schoolContactNumber: action.payload};
    default:
      return state;
  }
};
