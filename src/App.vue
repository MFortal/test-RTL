<template>
  <section>
    <!-- <post-form @create="createPost" />
    <post-list :posts="posts" />-->

    <column />
    <footer-elem />
  </section>
</template>

<script>
// import PostForm from "@/components/PostForm.vue";
//import PostList from "@/components/PostList.vue";
import Column from "@/components/Column.vue";
import FooterElem from "@/components/Footer.vue";
export default {
  components: {
    Column,
    FooterElem,
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
</style>
