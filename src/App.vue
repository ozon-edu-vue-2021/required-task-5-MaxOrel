<template>
  <div id="app">
    <Header>
    </Header>
    <main class="content container">
    <ProductList>
    </ProductList>
    <Cart>
    </Cart>
    </main>
  </div>
</template>
<script>

import ProductList from "./components/productList/ProductList";
import Cart from "./components/cart/Cart";
import Header from "./components/header/Header";
export default {
  name: "App",
  components: {
    Header,
    Cart,
    ProductList
  },
};
</script>

<style>
html {
  box-sizing: border-box;
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
}

.container {
  max-width: none;
  margin: 0 auto;
  padding: 0 30px;
}

@media screen and (min-width: 1150px) {
  .container {
    max-width: 1200px;
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

</style>
