import { reactive } from 'vue';
import DASHBOARD from './Pages/Dashboard';
import CLASSIFY from './Pages/Classify';
import TOPIC_MGR from './Pages/TopicMgr';

export default reactive({
  SITE_NAME: '商品库存管理系统',

  KEYWORD: '商品',

  PAGE_META: {
    DASHBOARD,
    CLASSIFY,
    TOPIC_MGR,
  },
});
