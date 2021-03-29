import {
  del, post, get
} from '@/helpers/request';

export const add = (title) => {
  return post('/good-classify/add', {
    title,
  });
};

export const list = () => {
  return get('/good-classify/list');
};

export const remove = (id) => {
  return del(`/good-classify/${id}`);
};

export const updateTitle = (id, title) => {
  return post('/good-classify/update/title', {
    id,
    title,
  });
};
