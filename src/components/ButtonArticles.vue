<template>
  <button  class="article-btn">{{ nameButton }}</button>
</template>

<script>

export default {
  name: "ButtonArticles",
  props: ["nameButton"],
};
</script>

<style>
.article-btn {
  color: #0099cc;
  background: transparent;
  border: 2px solid #0099cc;
  border-radius: 6px;
  border: none;
  padding: 12px 24px;
  text-align: center;
  display: inline-block;
  font-size: 12px;
  margin: 4px 2px;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
}
.article-btn {
  background-color: white;
  color: black;
  border: 2px solid #008cba;
}

.article-btn:hover {
  background-color: #008cba;
  color: white;
}
</style>