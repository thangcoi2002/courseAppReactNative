import getToken from "~/common/getToken";
import { httpRequest } from "~/utils/httprequest";

export const getLessonByCourse = ({ courseId }) => {
  try {
    const res = httpRequest.get(`lessons/course/${courseId}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getAllLesson = ({ page, perPage, nameLesson, teacherId }) => {
  try {
    const res = httpRequest.get(`lessons/get-all`, {
      params: {
        page,
        per_page: perPage,
        nameLesson,
        teacherId,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getLessonById = async ({ id }) => {
  try {
    const res = await httpRequest.get(`lessons/get-lesson/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const addLesson = async({ courseId, data }) => {
  try {
    const token = await getToken();

    const res = httpRequest.post(`lessons/add-lesson/${courseId}`, data, {
      headers: { authorization: "Bearer " + token },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const editLesson = async({ courseId, data }) => {
  try {
    const token = await getToken()
    const res = httpRequest.put(`lessons/edit-lesson/${courseId}`, data, {
      headers: { authorization: "Bearer " + token },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const deleteLesson = async({ courseId }) => {
  try {
    const token = await getToken();

    const res = httpRequest.delete(`lessons/delete-lesson/${courseId}`, {
      headers: { authorization: "Bearer " + token },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
