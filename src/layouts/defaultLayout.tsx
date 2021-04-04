import Vue, { VueConstructor } from 'vue'
import { VApp, VAppBar, VContent } from 'vuetify/lib'
//import SideMenu from '@/components/layouts/partials/sidemenu.vue'
import Navigation from '../components/Navigation.vue'
import AppBar from '../components/AppBar.vue'

export function defaultLayout(PageComponent: VueConstructor<Vue>) { // (1)
  return Vue.extend({
    data() {
      return {
        clipped: true,
        drawer: false,
        fixed: false,
        items: [
          {
            icon: 'mdi-home',
            title: 'Main',
            to: '/'
          },
          {
            icon: 'mdi-wrench',
            title: 'Settings',
            to: '/settings'
          },
          {
            icon: 'mdi-information',
            title: 'About',
            to: '/info'
          }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'OrangeMarkdownPreview'
      }
    },
    inheritAttrs: false,
    components: {
      PageComponent, // (2)
//      SideMenu,
      Navigation,
      AppBar,
      VApp,
      VAppBar,
      VContent,
    },
    render() {
      return (
        <v-app>
          <Navigation />
          <AppBar />
          <v-content>
            <v-container>
              <PageComponent propsData={this.$attrs} />
            </v-container>
          </v-content>
        </v-app>
      )
    },
  })
}
