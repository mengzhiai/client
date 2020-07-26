<template>
  <div>
    <!-- {{formatDate(1586245587600)}} -->
  </div>
</template>

<script>
   import { formatDate,formatDateHM } from '../../utils/common'
  export default {
    data(){
      return{
        
      }
    },
    mounted(){
      console.log(formatDateHM(1586246932585));
    }
  }
</script>

<style lang="scss" scoped>

</style>