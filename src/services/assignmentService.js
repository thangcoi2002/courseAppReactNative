import getToken from '~/common/getToken';
import {httpRequest} from '~/utils/httprequest';

export const submitAssignment = async ({id, data}) => {
  try {
    const token = await getToken();
    const res = await httpRequest.put(`lessons/submit-assignment/${id}`, data, {
      headers: {authorization: 'Bearer ' + token},
    });
    return res;
  } catch (error) {
    return error;
  }
};

export const changeAssignment = async ({id, data}) => {
  try {
    const token = await getToken();
    const res = await httpRequest.put(`lessons/assignment/${id}`, data, {
      headers: {authorization: 'Bearer ' + token},
    });
    return res;
  } catch (error) {
    return error;
  }
};
