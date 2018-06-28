<template>
  <div class="view-demand-item">

  </div>
</template>

<script type="text/javascript">
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      item: state => state.post
    })
  },
  mounted () {
    console.log(this.$route.params)
  }
}
</script>
