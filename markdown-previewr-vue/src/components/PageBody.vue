<template>
  <div>
    <div class="form-inline">
      <div class="checkbox">
        <label>
          <input v-model="show" type="checkbox" />show
        </label>
      </div>
      <div class="checkbox">
        <label>
          <input v-model="html" type="checkbox" />html
        </label>
      </div>
      <div class="checkbox">
        <label>
          <input v-model="breaks" type="checkbox" />breaks
        </label>
      </div>
      <div class="checkbox">
        <label>
          <input v-model="linkify" type="checkbox" />linkify
        </label>
      </div>
      <div class="checkbox">
        <label>
          <input v-model="emoji" type="checkbox" />emoji
        </label>
      </div>
      <div class="checkbox">
        <label>
          <input v-model="typographer" type="checkbox" />typographer
        </label>
      </div>
      <div class="checkbox">
        <label>
          <input v-model="toc" type="checkbox" />toc
        </label>
      </div>
    </div>
    <div id="toc"></div>
    <div class="mt-3 row text-left">
      <div class="col-6 text-left full-height">
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
            class="full-height"
          ></b-form-textarea>
        </b-form-group>
      </div>
      <div class="col-6 full-height">
        <p>Previewer:</p>
        <vue-markdown
          :source="text"
          class="full-height"
          :watches="['show','html','breaks','linkify','emoji','typographer','toc']"
          :show="show"
          :html="html"
          :breaks="breaks"
          :linkify="linkify"
          :emoji="emoji"
          :typographer="typographer"
          :toc="toc"
          v-on:rendered="allRight"
          v-on:toc-rendered="tocAllRight"
          toc-id="toc"
        ></vue-markdown>
      </div>
    </div>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";
export default {
  data() {
    return {
      text:
        "# Hello \n## Again \n### and \n#### again \n##### and  \n###### again  maybe normal text too \n 1. one \n 1. two",
      show: true,
      html: false,
      breaks: true,
      linkify: false,
      emoji: true,
      typographer: true,
      toc: false,
    };
  },
  components: {
    VueMarkdown,
  },
};
</script>

<style lang="scss" scoped>
</style>