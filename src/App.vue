<template>
  <div id="app">
    <Header>
    </Header>
    <main class="content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </main>
  </div>
</template>
<script>

import Header from "./components/header/Header";

export default {
  name: "App",
  components: {
    Header,
  },
  computed: {
  },
};
</script>

<style>
html {
  box-sizing: border-box;
  height: 100%;
}

*,
::before,
::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 0;
  color: #000000;
  background: #ffffff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  line-height: 24px;
  height: 100%;
}
#app {
  height: 100%;
}

.container {
  max-width: none;
  margin: 0 auto;
  padding: 0 30px;
}

@media screen and (min-width: 1150px) {
  .container {
    max-width: 1280px;
  }
}

img {
  max-width: 100%;
  height: auto;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  color: #000000;
  text-decoration: none;
  cursor: pointer;
}

p {
  margin: 0;
}

button {
  padding: 0;
}
.visually-hidden:not(:focus):not(:active),
input[type="checkbox"].visually-hidden,
input[type="radio"].visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  -webkit-clip-path: inset(100%);
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}
.content {
  height: 100%;
}

.section-title {
  display: block;
  font-size: 20px;
  line-height: 1.43;
  text-align: center;
  width: 100%;
  margin-bottom: 40px;
  text-align: center;
}

.button {
  width: 100%;
  border: none;
  padding: 10px 40px;
  border-radius: 5px;
}

.button_type_primary {
  background: #4faa51;
  color: #fff;
}

.button_type_secondary {
  border: 1px solid #4faa51;
}

.button_width_inner {
  width: max-content;
  display: inline-block;
}
</style>
