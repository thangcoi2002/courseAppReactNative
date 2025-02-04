import {configureStore} from '@reduxjs/toolkit';
import courseReducer from '~/redux/features/courseReducer';
import forgotReducer from '~/redux/features/forgotReducer';
import recruitmentReducer from '~/redux/features/recruitmentReducer';
import userReducer from '~/redux/features/userReducer';
import myCourseReducer from './features/myCourseReducer';
import LessonReducer from './features/LessonReducer';

export const store = configureStore({
  reducer: {
    userReducer,
    forgotReducer,
    courseReducer,
    LessonReducer,
    myCourseReducer,
    recruitmentReducer,
  },
});
