<template>
  <Layout>
    <h1>gatsby Core team</h1>
    <ul>
      <li v-for="edge in $page.allMarkdownContent.edges" :key="edge.node.name">
        {{ edge.node.name }}
      </li>
    </ul>
    <Pager :info="$page.allMarkdownContent.pageInfo" />
  </Layout>
</template>

<script>
import { Pager } from 'gridsome'

export default {
  components: {
    Pager
  }
}
</script>

<page-query>
query($page: Int) {
  allMarkdownContent(perPage: 2, page: $page) @paginate {
  pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        name
      }
    }
  }
}
</page-query>
