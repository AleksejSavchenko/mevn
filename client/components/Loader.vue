<template>
  <img class="loader" :src="loadingImage" alt="loading" />
</template>

<script>
import loadingImage from '@images/loading.gif'

export default {
  name: 'Loader',
  data: () => ({
    loadingImage
  })
}
</script>

<style>
  .loader {
    display: inline-flex;
    width: 20px;
  }
</style>
