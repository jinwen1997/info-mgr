import {
  del, post, get
} from '@/helpers/request';

export const add = (form) => {
  return post(
    '/good/add',
    form,
  );
};

export const list = (data) => {
  return get(
    '/good/list',
    data
  );
};

export const remove = (id) => {
  return del(
    `/good/${id}`,
  );
};

export const updateCount = (data = {}) => {
  return post(
    `/good/update/count`,
    data,
  );
};

export const update = (data = {}) => {
  return post(
    `/good/update`,
    data,
  );
};

export const detail = (id) => {
  return get(
    `/good/detail/${id}`,
  );
};

export const addMany = (key) => {
  return post('/good/addMany', {
    key,
  });
};
