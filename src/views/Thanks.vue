<template>
  <div class="thanks">
    <section class="section">
      <p class="title">{{ $store.state.settings.thanks.title }}</p>
      <p class="text">{{ $store.state.settings.thanks.text }}</p>
      <a class="mail" :href="`mailto:${ $store.state.settings.thanks.mail }`">{{ $store.state.settings.thanks.mail }}</a>
      <a class="tel" :href="`tel:${ $store.state.settings.thanks.tel }`">{{ $store.state.settings.thanks.tel }}</a>
    </section>
    <router-link class="btn" tag="button" to="/">戻る</router-link>
  </div>
</template>

<script>
export default {
  props: {
    user: Object
  }
}
</script>