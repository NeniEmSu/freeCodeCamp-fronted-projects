<template>
  <div class="mt-3 row text-left">
    <div class="col-6 text-left">
      <b-form-group
        class="mb-0"
        label="Markdown:"
        label-for="textarea"
        description="Instantly convert to markdown."
      >
        <b-form-textarea
          id="textarea"
          v-model="text"
          placeholder="Enter something..."
          rows="16"
        ></b-form-textarea>
      </b-form-group>
    </div>
    <div class="col-6">
        <p>Previewer:</p>
      <vue-markdown :source="text"></vue-markdown>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
export default {
     data() {
    return {
      text: "# Hello \n## Again \n### and \n#### again \n##### and  \n###### again  maybe normal text too \n 1. one \n 1. two",
    };
  },
  components: {
    VueMarkdown
  },
};
</script>

<style lang="scss" scoped>
</style>