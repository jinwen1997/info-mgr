import { reactive } from 'vue';

export default reactive({
  BASE_INFO: {
    LEFT: {
      TITLE: '商品数量',
      CONTENT(count) {
        return `共 ${count} 样`;
      },
    },
    CENTER: {
      TITLE: '用户',
      CONTENT(count) {
        return `共 ${count} 位`;
      },
    },
    RIGHT: {
      TITLE: '日志',
      CONTENT(count) {
        return `共 ${count} 条`;
      },
    },
  },

  RECENT: {
    LEFT_TITLE: '最近添加的商品',
    RIGHT_TITLE: '最近的操作日志',
  },
});
