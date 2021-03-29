import {defineComponent, reactive} from 'vue';
import {UserOutlined, LockOutlined, ContactsOutlined} from '@ant-design/icons-vue';
import {auth} from '@/service';
import {result} from '@/helpers/utils';
import { getCharacterInfoById } from '@/helpers/character'
import {message} from 'ant-design-vue';
import store from "@/store";
import { useRouter } from 'vue-router';
import { setToken } from '@/helpers/token';

export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined,
    ContactsOutlined,
  },
  setup() {

    const router = useRouter();
    //注册用的表单数据
    const regForm = reactive({
      account: '',
      password: '',
      inviteCode:'',
    });
    //注册逻辑
    const register = async () => {
      if (regForm.account === '') {
        message.info('请输入账户');
        return;
      }
      if (regForm.password === '') {
        message.info('请输入密码');
        return;
      }
      if (regForm.inviteCode === '') {
        message.info('请输入邀请码');
        return;
      }
      const res = await auth.register(
        regForm.account,
        regForm.password,
        regForm.inviteCode,
      );
      result(res)
        .success((data) => {
          message.success(data.msg);
        });
    };
    //等陆用的表单数据
    const loginForm = reactive({
      account: '',
      password: '',
    });
    //登录方法
    const login = async () => {
      if (loginForm.account === '') {
        message.info('请输入账户');
        return;
      }
      if (loginForm.password === '') {
        message.info('请输入密码');
        return;
      }
      const res = await auth.login(loginForm.account, loginForm.password);
      result(res)
        .success(({msg,data:{ user,token }}) => {
          message.success(msg);
          store.commit('setUserInfo',user);
          store.commit('setUserCharacter',getCharacterInfoById(user.character));
          setToken(token);


          router.replace('/books')

        });

    };

    return {
      //注册相关的数据
      regForm,
      register,


      //登录相关的数据
      login,
      loginForm,
    }
  },
});

