<template>
  <div class="row">
      <div class="sidebar">
          <ul class="list-group">
            <div v-for="user in users" :key="user.id" >
              <li v-if="user.id===select" class="list-group-item selected" @click="userDetail(user.id)">User {{user.id}}</li>
              <li v-else class="list-group-item" @click="userDetail(user.id)">User {{user.id}}</li>
            </div>
          </ul> 
      </div>
      <div class="content">
        <div v-if="select !== -1">
          <UserInfo :user=current />
        </div>
        <div v-else style="margin-top: 300px;">
          <span>Module Visualization area</span>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import UserInfo from '@/components/UserInfo.vue'
import config from '@/config';

export default {
  name: 'Moduleb',
  components: {
    UserInfo
  },
  data() {
    return {
      users: [],
      current: {
          id: -1,
          name: '',
          avatar: '',
          login: '',
          email: '',
          status: 1,
          address: ''
      },
      select: -1,
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
    },
    userDetail(id) {
      this.select = id;
      const selectUsers = this.users.filter(item => item.id === id)
      if (selectUsers.length !== 0)
        this.current = selectUsers[0]
    }
  },
  mounted() {
    this.getUsersData()
  }
}
</script>

<style scoped>

.list-group-item {
  cursor: pointer;
}

.selected {
  background-color: #d6e230;
}

.sidebar {
  width: 20%;
  overflow: auto;
  height: 660px;
}

.content {
  width: 80%;
}

</style>