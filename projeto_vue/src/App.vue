<template>
  <div class="h-screen">
    <HeaderComponent />
    <BotoesComponent />
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import BotoesComponent from '@/components/BotoesComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    BotoesComponent
  }
}
</script>

<style>
</style>