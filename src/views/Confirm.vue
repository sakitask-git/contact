<template>
  <div class="confirm">
    <p>確認ページ</p>
    <dl v-for="(user, index) in $store.state.users" :key="index">
      <div class="unit">
        <dt>{{ user.title }}</dt>
        <dd>{{ user.answer }}</dd>
      </div>
    </dl>
    <div class="btns">
      <router-link class="btn" tag="button" to="/">戻る</router-link>
      <router-link class="btn" tag="button" to="/thanks">送信する</router-link>
    </div>
    {{ keyword }}
  </div>
</template>

<script>
export default {
  computed: {
    keyword: {
      get() {
        return this.$store.getters.keyword
      },
      set(value) {
        this.$store.dispatch('getKeyword', value)
      }
    }
  }
}
</script>