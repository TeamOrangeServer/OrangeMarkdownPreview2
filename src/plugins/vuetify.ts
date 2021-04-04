import Vue from 'vue';
//@ts-ignore
import Vuetify from 'vuetify/lib/framework';
//@ts-ignore
import ja from 'vuetify/lib/locale/ja';

Vue.use(Vuetify);

export default new Vuetify({
    lang: {
      locales: { ja },
      current: 'ja',
    },
});
