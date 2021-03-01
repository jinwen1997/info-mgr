// const request = (arg, cb) => {
//   setTimeout(() => {
//     console.log(arg);
//     cb(arg + 1);
//   }, 300);
// };

// request(1, function (res1) {
//   request(res1, function (res2) {
//     request(res2, function (res3) {
//       request(res3, function (res4) {
//         request(res4, function (res5) {
//           console.log('res5:' + res5);
//         });
//
//       });
//
//     });
//   });
// });

const request = (arg)=>{
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      console.log(arg);
      resolve(arg+1);
    },500);
  });
};

request(1)
    .then((res1)=>{
      return request(res1);
    })

    .then((res2)=>{
      return request(res2);
    })

    .then((res3)=>{
      return request(res3);
    })

    .then((res4)=>{
      return request(res4);
    })

    .then((res5)=>{
      return request(res5);
    })
