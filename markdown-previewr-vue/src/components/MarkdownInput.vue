<template>
  <div>
    <b-form-group
      class="mb-0"
      label="Markdown"
      label-for="textarea"
      description="Instantly convert to markdown."
    >
      <b-form-textarea
        id="textarea"
        v-model="text"
        placeholder="Enter something..."
        rows="3"
        max-rows="6"
      ></b-form-textarea>
    </b-form-group>

    <pre class="mt-3 mb-0">{{ text }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    };
  },
};
</script>