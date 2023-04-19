<template>
  <div class="modulea">
    <div class="container">
      <div class="row">
        <div class="item" v-for="user in users" :key="user.id">
          <UserCard :user="user" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import UserCard from '@/components/UserCard.vue'
import config from '@/config';
export default {
    name: 'Modulea',
    components: {
        UserCard
    },
    data () {
      return {
          users: []
      }
    },
    methods: {
      getUsersData() {
        fetch(`${config.server_url}/usersdata.json`)
          .then(response => response.json())
          .then(data => {
            console.log(data)
            this.users = data
          });
      }
    },
    mounted() {
      this.getUsersData()
    }
}
</script>

<style scoped>
.item {
  width: 50%;
  padding: 10px;
}

@media screen and (max-width: 810px) {
  .item {
    width: 100%;
  }
}
</style>
