<template>
  <section class="main">
    <!-- <post-form @create="createPost" />
    <post-list :posts="posts" />-->
    <column />
    <table-elem />
    <footer-elem />
  </section>
</template>

<script>
// import PostForm from "@/components/PostForm.vue";
//import PostList from "@/components/PostList.vue";
import Column from "@/components/Column.vue";
import FooterElem from "@/components/Footer.vue";
import TableElem from "@/components/Table.vue";

export default {
  components: {
    Column,
    FooterElem,
    TableElem,
    //PostList,
    //PostForm,
  },

  data() {
    return {
      posts: [
        { id: 1, title: "Пост 1", body: "Описание 1" },
        { id: 2, title: "Пост 2", body: "Описание 2" },
        { id: 3, title: "Пост 3", body: "Описание 3" },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;

  padding: 32px;
}
</style>
