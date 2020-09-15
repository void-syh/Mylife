<template>
  <div>
    <pwd v-model="showPwd" ></pwd>
  </div>
</template>

<script>

import pwd from '@/components/pwd'

export default {
  data () {
    return {
      showPwd:false
    }
  },
  components: {
    pwd
  },
  created(){
    this.showPwd = true;
  }
}
</script>

<style>

</style>