import _ from 'lodash';
import {
  FETCH_STREAMS,
  FETCH_STREAM,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from '../action/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS: {
      return;
    }
    case FETCH_STREAM: {
      return { ...state, [action.payload.id]: action.payload };
    }
    case CREATE_STREAM: {
      return { ...state, [action.payload.id]: action.payload };
    }
    case EDIT_STREAM: {
      return { ...state, [action.payload.id]: action.payload };
    }
    case DELETE_STREAM: {
      return _omit(state, action.payload);
    }
    default:
      return state;
  }
};