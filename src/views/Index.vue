<template>
  <div class="index">
    <Content />
    <Form />
  </div>
</template>

<script>
// @ is an alias to /src
import Content from "@/components/Content.vue";
import Form from "@/components/Form.vue";

export default {
  name: "Index",
  components: {
    Content,
    Form
  }
};
</script>