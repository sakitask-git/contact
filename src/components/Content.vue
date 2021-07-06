<template>
  <div id="content" class="content" :class="$store.state.layouts.thema">
    <section class="keyVisual">
      <h2><img src="../assets/images/key_visual.jpg" alt="キービジュアル"></h2>
    </section>
    <div class="wrap">
      <section class="section" v-for="(section, index) in $store.state.sections" :key="index">
        <div class="section-wrap">
          <p><img :src="require(`@/assets/images/${section.image}`)" :alt="section.alt"></p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content',
}
</script>

<style scoped>
.section {
  display: flex;
  align-items: center;
  justify-content: center;
}
.white {
  background-color: #fff;
}
.black {
  background-color: #000;
}
.keyVisual img {
  width: 100%;
}
.wrap {
  padding: 100px 0;
}
.section {
  margin: 100px auto;
}
</style>