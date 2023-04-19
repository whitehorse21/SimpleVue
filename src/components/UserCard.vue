<template>
  <div class="user">
      <div class="row mt-2">
          <div class="user-avatar">
              <img v-bind:src="'avatar/' + user.avatar" style="height: 100%" />
          </div>
          <div class="user-info">
            <span class="name">{{user.name}}</span><br>
            <span class="date">26 OCT 2021 · 11:46 AM</span><br>
            <span class="short">bla bla blabla bla</span>
          </div>
      </div>
      <div class="row mt-2">
          <span class="description">Vestibulum eros ipsum, pharetra
                fermentum eleifend et, finibus
                eget ipsum. Sed dignissim libero
                id leo ultrices, ac feugiat dolor
                fermentum. Sed dignissim libero
                id leo ultrices, ac feugiat
          </span>
      </div>
  </div>
</template>

<script>

export default {
    props: {
        user: Object
    }
}
</script>

<style scoped>
.user-avatar {
    width: 30%;
    padding: 20px;
}

.user-info {
    width: 70%;
    padding: 30px;
    text-align: left;
}

.name {
    font-size: 22px;
    color: rgb(17, 17, 16);
}
.date {
    font-size: 10px;
    color: rgb(190, 190, 170);
}
.short {
    font-size: 18px;
    color: rgb(218, 124, 62);
}

.description {
    padding: 5%;
    color: #4cce91;
    text-align: left;
}
.user {
    background-color: #2963b9;
}

</style>
