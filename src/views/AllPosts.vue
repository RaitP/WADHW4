<template>
  <button @click='this.$router.push("/api/login")' class="center">Logout</button>
  <div class="item" v-for="post in posts" :key="post.id">
    <a class= 'singlepost' :href="'/api/apost/' + post.id">
      <span class="date"> {{ post.date }}  </span><br />
      <span class="body"> <b>Body:</b> {{ post.body }} </span> <br />
    </a>
    </div>
    <button @click='this.$router.push("/api/addpost")' class="center">Add post</button>
    <button @click="deleteAll" class="center">Delete all</button>
</template>

<script>
export default {
  name: "AllPosts",
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    fetchPosts() {
      fetch(`http://localhost:3000/api/posts/`)
        .then((response) => response.json())
        .then((data) => (this.posts = data))
        .catch((err) => console.log(err.message));
    },
    deleteAll() {
      console.log("Hello I Delete")
      for (let i = 0; i < this.posts.length; i++) {
      fetch(`http://localhost:3000/api/posts/${this.posts[i].id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
        .catch((e) => {
          console.log(e);
        });
      }
      location.reload()
    },
  },
  mounted() {
    this.fetchPosts();
    console.log("mounted");
  },
};


</script>

<style scoped>
h1 {
  font-size: 20px;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
.item {
  background-color: #F4F5F5;
  width: 300px;
  border-radius: 25px;
  border: 2px solid #F4F5F5;
  padding: 10px;
  margin: auto;
  margin-top: 15px;
  margin-bottom: 20px;
  box-shadow: 3px 10px 20px #393738;
  transition: transform .2s
}
#post-list {
  background: #6e8b97;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
  margin: auto;
  width: 50%;
  border-radius: 20px;
}
#post-list ul {
  padding: 0;
}
#post-list li {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
</style>