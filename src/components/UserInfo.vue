<template>
  <div class="user">
      <div class="row mt-2">
          <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
              <img v-bind:src="'avatar/' + user.avatar" />
          </div>
          <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
            <div class="info">
              <div style="text-align:left">
                  <div class="d-flex flex-row line-group">
                    <span class="info-text"><b>Name: </b></span>
                    <input type="text" class="form-control" :value="user.name" /><br>
                  </div>
                  <div class="d-flex flex-row line-group">
                    <span class="info-text"><b>Login: </b></span>
                    <input type="text" class="form-control" :value="user.login" /><br>
                  </div>
                  <div class="d-flex flex-row line-group">
                    <span class="info-text"><b>Email: </b></span>
                    <input type="text" class="form-control" :value="user.email" /><br>
                  </div>
                  <div class="d-flex flex-row line-group">
                    <span class="info-text"><b>Status: </b></span>
                    <div class="form-check">
                      <input type="radio" class="form-check-input" id="radio1" name="optradio" value="option1" checked>Active
                      <label class="form-check-label" for="radio1"></label>
                    </div>
                    <div class="form-check">
                      <input type="radio" class="form-check-input" id="radio2" name="optradio" value="option2">Inactive
                      <label class="form-check-label" for="radio2"></label>
                    </div>
                  </div>               
                  <div class="d-flex flex-row line-group">
                      <span style="margin-right: 20px;"><b>Address:</b></span>
                      <textarea class="form-control" style="height: 120px;" :value="user.address" /><br>
                  </div>
                  <div class="d-flex flex-row justify-content-end" style="margin-top: 5px;">
                      <button class="btn btn-md" style="background-color: yellow; margin-right: 10px;">Change</button>
                      <button class="btn btn-md" style="background-color: white; margin-right: 10px;">Discard Changes</button>
                  </div>
              </div>
            </div>
          </div>
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
img {
   margin: 30px;
   width: 200px; 
   height: auto;
}

.info {
  margin: 30px;
}

.line-group {
  margin: 5px;
}
.form-check {
  margin: 5px;
}
.user-avatar {
    width: 40%;
    padding: 20px;
}

.info-text {
    margin-right: 40px;
    margin-top: 5px;
}

.user-info {
    width: 60%;
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
    margin: 5%;
}

</style>
