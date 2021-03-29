import { createStore, Store } from 'vuex';
import { character, user, goodClassify } from '@/service';
import { getCharacterInfoById } from '@/helpers/character';
import { result } from '@/helpers/utils';

export default createStore({
  state: {
    characterInfo: [],
    goodClassify: [],
    userInfo: {},
    userCharacter: {},
  },
  mutations: {
    setCharacterInfo(state, characterInfo) {
      state.characterInfo = characterInfo;
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
    setUserCharacter(state, userCharacter) {
      state.userCharacter = userCharacter;
    },
    setGoodClassify(state, goodClassify) {
      state.goodClassify = goodClassify;
    },
  },
  actions: {
    async getGoodClassify(store) {
      const res = await goodClassify.list();

      result(res)
        .success(({data}) => {
          store.commit('setGoodClassify', data);
        });
    },
    async getCharacterInfo(store) {
      const res = await character.list();

      result(res)
        .success(({ data }) => {
          store.commit('setCharacterInfo', data);
        });
    },
    async getUserInfo(store) {
      const res = await user.info();

      result(res)
        .success(({ data }) => {
          store.commit('setUserInfo', data);
          store.commit('setUserCharacter', getCharacterInfoById(data.character));

          console.log(store.state);
        });
    },
  },
});
