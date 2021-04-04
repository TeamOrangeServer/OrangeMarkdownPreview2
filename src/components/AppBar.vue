<template>
  <v-app-bar :clipped-left="clipped" fixed app>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    <v-toolbar-title v-text="title" />
    <v-spacer />
  </v-app-bar>
</template>

<script>
export default {
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
  }
};
</script>

<style>
</style>
