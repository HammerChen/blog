<template>
  <div class="container">
    <aside class="sidebar">
      <div class="metadata">
        <div class="author d-flex flex-column ai-center text-center pt-5 pr-3 pb-3 pl-3">
          <img class="avatar mb-4" src="../assets/logo.png" />
          <h1 class="m-0 mb-4">陈小锤</h1>
          <p
            class="author_intro m-0 mb-4 fs-lg"
          >Hi 🖖 I'm Hammer, a nomad Software Engineer. I write tutorials for JavaScript and sometimes I take awesome pictures 🌅!</p>
        </div>
        <div class="tags d-flex jc-center">
          <button class="JavaScript">JavaScript</button>
          <button class="VueJs">VueJs</button>
          <button class="Element">Element</button>
          <button class="Markdown">Markdown</button>
          <button class="NodeJs">NodeJs</button>
        </div>
        <span class="d-flex jc-center fs-sm">Powerd by Vue CLI & Node.js</span>
      </div>
    </aside>

    <header class="navbar">
      <router-link class="d-flex py-2 ai-center" to="/">
        <img class="pl-3 pr-2" src="../assets/logo.png" height="40" />
        <h3 class="m-0">陈小锤的博客</h3>
      </router-link>
    </header>

    <main class="page">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {}
</script>

<style>
.sidebar {
  width: 20rem;
  position: fixed;
  z-index: 10;
  margin: 0;
  top: 3.6rem;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  border-right: 1px solid #e9f7f7;
  overflow-y: auto;
}

.page {
  padding-left: 20rem;
  padding-bottom: 2rem;
  display: block;
}

.avatar {
  height: 8.125rem;
  width: 8.125rem;
  border-radius: 100%;
  border: 1px solid #e9f7f7;
}

.author_intro {
  opacity: 0.6;
  font-weight: 400;
  width: 16.875rem;
}

.tags {
  margin-bottom: 2.25rem;
  flex-wrap: wrap;
}

.JavaScript {
  font-size: 0.9rem;
  font-weight: 700;
  color: #fff;
  background: #2c6d97;
  padding: 0.65rem;
  margin: 0.45rem;
  border-radius: 0.5rem;
  line-height: 1.35rem;
  border: none;
}

.VueJs {
  font-size: 0.9rem;
  font-weight: 700;
  color: #fff;
  background: #40b883;
  padding: 0.65rem;
  margin: 0.45rem;
  border-radius: 0.5rem;
  line-height: 1.35rem;
  border: none;
}

.Element {
  font-size: 0.9rem;
  font-weight: 700;
  color: #fff;
  background: #3489ff;
  padding: 0.65rem;
  margin: 0.45rem;
  border-radius: 0.5rem;
  line-height: 1.35rem;
  border: none;
}

.Markdown {
  font-size: 0.9rem;
  font-weight: 700;
  color: #000;
  background: #ff0;
  padding: 0.65rem;
  margin: 0.45rem;
  border-radius: 0.5rem;
  line-height: 1.35rem;
  border: none;
}

.NodeJs {
  font-size: 0.9rem;
  font-weight: 700;
  color: #fff;
  background: #43853d;
  padding: 0.65rem;
  margin: 0.45rem;
  border-radius: 0.5rem;
  line-height: 1.35rem;
  border: none;
}
</style>