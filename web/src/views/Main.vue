<template>
  <div class="theme-container">
    <!-- top-bar start -->
    <header class="navbar" style="height: 60px;">
      <a href="/" class="home-link router-link-active">
        <div class="d-flex ai-center">
          <img src="../assets/logo.png" height="40" />
          <span class="site-name pl-2">陈小锤的博客</span>
        </div>
      </a>
      <div class="links">
        <nav class="nav-links can-hide fs-md">
          <div class="nav-item">
            <a href="/" class="nav-link router-link-active">首页</a>
          </div>
          <a
            href="https://github.com/HammerChen"
            target="_blank"
            rel="noopener noreferrer"
            class="repo-link"
            >GitHub</a
          >
        </nav>
      </div>
    </header>
    <!-- top-bar end -->

    <!-- side-bar start -->
    <aside class="sidebar d-flex jc-center">
      <div class="author" style="max-width: 270px;">
        <img class="author-avatar mt-5 mb-3" src="/avatar.png" />
        <h3 class="author-name text-center m-0 mb-5">陈小锤</h3>
        <p class="text-center m-0 mb-3">
          Hi 🖖 I'm Mauricio, a nomad Software Engineer. I write tutorials for
          JavaScript and sometimes I take awesome pictures 🌅!
        </p>
      </div>
    </aside>
    <!-- side-bar end -->

    <!-- articles-list -->
    <router-view />
  </div>
</template>

<script>
export default {}
</script>

<style>
.author-avatar {
  height: 130px;
  width: 130px;
  border-radius: 100%;
  border: 1px solid #c6eaea;
  margin-left: 70px;
}
</style>
