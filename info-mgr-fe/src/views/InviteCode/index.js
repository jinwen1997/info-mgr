import { defineComponent, ref, onMounted } from 'vue';
import { inviteCode } from '@/service';
import { result } from '@/helpers/utils';
import { message } from 'ant-design-vue';

const columns = [
  {
    title: '邀请码',
    dataIndex: 'code',
  },
  {
    title: '使用状态',
    slots: {
      customRender: 'status',
    },
  },
  {
    title: '操作',
    slots: {
      customRender: 'actions',
    },
  },
];

export default defineComponent({
  setup() {
    const count = ref(1);
    const curPage = ref(1);
    const list = ref([]);
    const total = ref(0);

    const getList = async () => {
      const res = await inviteCode.list(curPage.value, 20);

      result(res)
        .success(({ data: { list: l, total: t } }) => {
          list.value = l;
          total.value = t;
        });
    };

    onMounted(() => {
      getList();
    });

    const setPage = (page) => {
      curPage.value = page;
      getList();
    };

    const add = async () => {
      const res = await inviteCode.add(count.value);

      result(res)
        .success(() => {
          message.success(`成功添加 ${count.value} 条邀请码`);
          getList();
        });
    };

    const remove = async ({ _id }) => {
      const res = await inviteCode.remove(_id);

      result(res)
        .success(({ msg }) => {
          message.success(msg);

          getList();
        });
    };

    return {
      count,

      list,
      total,
      columns,
      curPage,
      setPage,
      add,
      remove,
    };
  },
});
