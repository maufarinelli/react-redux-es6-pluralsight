import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courseS) {
  return {type: types.LOAD_COURSES_SUCCESS, courseS};
}

export function loadCourses() {
  return function loadCourses(dispatch) {
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  }
}
