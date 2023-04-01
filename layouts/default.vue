<template>
  <div id="app-before"></div>

  <SiteHeader>
    <SiteNavbar />
  </SiteHeader>

  <div id="main">
    <div class="container mx-auto">
      <slot />
    </div>
  </div>

  <SiteFooter />

  <div id="app-after"></div>
</template>
