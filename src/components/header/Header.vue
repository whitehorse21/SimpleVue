<template>
  <div>
    <nav class="navbar navbar-expand-sm navbar-blue navbar-light">
        <div class="container-fluid d-flex flex-row">
            <router-link to="/"><img src="logo.png" style="max-width: 100px;" /></router-link>
            <div class="nav-btns">
                <router-link to="/modulea"><button class="btn btn-primary nav-btn nav1">Module A <span class="badge bg-yellow">2</span></button></router-link>
                <router-link to="/moduleb"><button class="btn btn-primary nav-btn nav2">Module B <span class="badge bg-yellow">4</span></button></router-link>
                <router-link to="/modulec"><button class="btn btn-primary nav-btn nav3">Module C</button></router-link>
                <router-link to="/moduled"><button class="btn btn-primary nav-btn nav4">Module D</button></router-link>
            </div>
            <div class="dropdown showmore1">
                <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                    show+
                </button>
                <ul class="dropdown-menu">
                    <li><router-link to="/moduled"><span class="dropdown-item">Module D</span></router-link></li>
                </ul>
            </div>
            <div class="dropdown showmore2">
                <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                    show+
                </button>
                <ul class="dropdown-menu">
                    <li><router-link to="/modulec"><span class="dropdown-item">Module C</span></router-link></li>
                    <li><router-link to="/moduled"><span class="dropdown-item">Module D</span></router-link></li>
                </ul>
            </div>
            <div class="dropdown showmore3">
                <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                    show+
                </button>
                <ul class="dropdown-menu">
                    <li><router-link to="/moduleb"><span class="dropdown-item">Module B</span></router-link></li>
                    <li><router-link to="/modulec"><span class="dropdown-item">Module C</span></router-link></li>
                    <li><router-link to="/moduled"><span class="dropdown-item">Module D</span></router-link></li>
                </ul>
            </div>
            <div class="dropdown dropstart text-end">
                <button type="button" class="user-icon dropdown-toggle" data-bs-toggle="dropdown">
                    <img src="user.png" class="user-image"/>
                </button>
                <ul class="dropdown-menu">
                    <li><router-link to="/profile"><span class="dropdown-item">MyProfile</span></router-link></li>
                    <li><a class="dropdown-item" href="#">MyReferences</a></li>
                    <li><a class="dropdown-item" href="#">ChangePassword</a></li>
                    <li><span class="dropdown-item-text">Logout</span></li>
                </ul>
            </div>
        </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>


<style scoped>
  .navbar-blue {
      background-color: #2963b9;
  }

  .bg-yellow {
      background-color: rgb(182, 182, 83);
  }

  a {
      text-decoration: none !important;
  }

  .nav-btn {
      margin-left: 2px;
  }

  .nav-btn {
      margin-right: 10px;
  }

  .user-icon {
    background-color: #fffefe;
    color: rgb(15, 14, 14);
    padding: 5px 10px;
    margin-left: 15px;
  }

  .user-image {
      width: 25px;
      height: 25px;
      border-radius: 50%;
  }

  .showmore1 {
      display: none;
  }

  .showmore2 {
      display: none;
  }
  .showmore3 {
      display: none;
  }

  @media screen and (max-width: 768px) {
      .nav4 {
          display: none;
      }
      .showmore1 {
          display: block;
      }
  }

  @media screen and (max-width: 712px) {
      .nav4 {
          display: none;
      }
      .nav3 {
          display: none;
      }
      .showmore1 {
          display: none;
      }
      .showmore2 {
          display: block;
      }
  }

  @media screen and (max-width: 600px) {
      .nav4 {
          display: none;
      }
      .nav3 {
          display: none;
      }
      .nav2 {
          display: none;
      }
      .showmore1 {
          display: none;
      }
      .showmore2 {
          display: none;
      }
      .showmore3 {
          display: block;
      }
  }
</style>
