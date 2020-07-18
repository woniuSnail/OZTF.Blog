<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <a-button type='primary'>我是苹果</a-button>
  </div>
</template>

<script lang='ts'>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import {Vue, Component} from 'vue-property-decorator';

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  daaa: any = '2020-05-05';
};
</script>
