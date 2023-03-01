<template>
  <aside id="sidebar">
    <div data-aos="fade-down" id="search" class="sidebar-item">
      <h3>{{ title }}</h3>
      <p>
        {{ paragraph }}
      </p>
    </div>
  </aside>
</template>

<script>
export default {
  name: "NotaProps",
  props: {
    title: String,
    paragraph: String,
  },
};
</script>
