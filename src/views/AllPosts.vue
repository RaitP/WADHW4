<template>
  <button @click="Logout" class="logoutButton">Logout</button>
  <div class="item" v-for="post in posts" :key="post.id">
    <a class= 'singlepost' :href="'/api/apost/' + post.id">
      <span class="date"> {{ post.date }}  </span><br />
      <span class="sisu"> {{ post.body }} </span> <br />
    </a>
    </div>
    <div class="buttons">
      <button @click='this.$router.push("/api/addpost")' class="center">Add post</button>
      <button @click="deleteAll" class="center">Delete all</button>
  </div>
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
    Logout() {
      fetch("http://localhost:3000/auth/logout", {
          credentials: 'include', //  Don't forget to specify this if you need cookies
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log('jwt removed');
        //console.log('jwt removed:' + auth.authenticated());
        this.$router.push("/login");
        //location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error logout");
      });
    },
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
      setTimeout(() => {}, 2000);
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
.date{
  margin-right: 0px;
  margin-left: 210px;
}

body{
  line-height: 1.6;
  margin: 0;
  background-color: #869FB2;
  position: absolute;
}


.center{
  background-color: gray;
  border: 0;
  margin-top:  20px;
  margin-bottom:  130px;
  margin-right:  10px;
  width: 100px;
  height: 30px;
  border-radius: 25px;
}

.center:hover{
  transform: scale(1.05) perspective(1px);
  background-color: gray;
  border: 0;
  margin: 15px 10px 0 10px;
}

.buttons{
  margin: 0 auto; 
  text-align: center;
  margin-bottom: 15px;
}
.logoutButton {
  background-color: gray;
  border-radius: 25px;
  border: 0;
  width: 100px;
  height: 30px;
  display: block;
  margin: 15px auto 0 auto;
}

.logoutButton:hover {
  transform: scale(1.05) perspective(1px)
}

h1 {
  font-size: 20px;
}

.singlepost{
  text-decoration: none;
  color: black;
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

section {
  padding: 10px 15px;
  margin: 10px;
  display: block;
  text-align: center;
}
</style>