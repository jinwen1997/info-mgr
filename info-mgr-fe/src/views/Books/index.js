import {defineComponent, ref, onMounted } from 'vue';
import { book } from '@/service';
import { result } from "@/helpers/utils";
import AddOne from './AddOne/index.vue';

export default defineComponent({
  components: {
    AddOne,
  },
  setup() {
    const columns = [
      {
        title: '书名',
        dataIndex: 'name',
      },
      {
        title: '作者',
        dataIndex: 'author',
      },
      {
        title: '价格',
        dataIndex: 'price',
      },
      {
        title: '出版日期',
        dataIndex: 'publishDate',
      },
      {
        title: '分类',
        dataIndex: 'classify',
      },

    ];
    const show = ref(false);
    const list = ref(list);
    onMounted(async () =>{
      const res = await book.list();
      result(res)
        .success(({data}) =>{
          list.value = data;
        });
    });


    return {
      columns,
      show,
      list,
    };
  },
});
