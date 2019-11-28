<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image :src="$page.markdownContent.picture" />

    <h1>{{ $page.markdownContent.name }}</h1>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
    markdownContent(id: $id) {
        name
        picture(width: 100, height: 100)
    }
}
</page-query>
