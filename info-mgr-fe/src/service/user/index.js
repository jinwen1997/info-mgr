import axios from "axios";

export const list = (page = 1,size = 20,keyword = '') => {
  return axios.get('http://localhost:3000/user/list',
    {
      params:{
        page,
        size,
        keyword,
      },
    },
  );
};


export const remove = (id)=>{
  return axios.delete(`http://localhost:3000/user/${id}`);
};

export const add = (account,password)=>{
  return axios.post('http://localhost:3000/user/add',{
    account,password,
  });
};

export const resetPassword = (id)=>{
  return axios.post('http://localhost:3000/user/reset/password',{
    id,
  });
};
