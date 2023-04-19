<template>
  <div class="profile">
    <div class="container">
        <div class="row">
            <span class="mt-5" style="text-align:left"><h2>MyProfile</h2></span>
        </div>
        <div class="row">
            <div class="avatar">
                <img src="user.png" width="100%" />
            </div>
            <div class="info">
              <div style="text-align:left">
                <span class="info-text"><b>Name: </b>Gerard Jonhson</span><br>
                <span class="info-text"><b>Login: </b>gerard</span><br>
                <span class="info-text"><b>Email: </b>gerard@nono.com</span><br>
                <span class="d-flex flex-row"><b style="font-size: 25px;">Status:</b>
                  <div class="form-check" style="margin:6px">
                    <input type="radio" class="form-check-input" id="radio1" name="optradio" value="option1" checked>Active
                    <label class="form-check-label" for="radio1"></label>
                  </div>
                  <div class="form-check" style="margin:6px">
                    <input type="radio" class="form-check-input" id="radio2" name="optradio" value="option2">Inactive
                    <label class="form-check-label" for="radio2"></label>
                  </div>
                </span>
                <span class="info-text"><b>Address: </b>17 street, Southen Garden no 36 Mountain View, Ca</span><br>
              </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Profile',
}
</script>

<style scoped>
  .avatar {
    width: 40%;
  }

  .info {
    width: 60%;
    padding-left: 50px;
  }

  .info-text {
    font-size: 25px;
  }


  @media screen and (max-width: 786px) {
      .avatar {
          width: 100%;
      }
      .info {
          width: 100%;
          padding-top: 20px;
      }
  }
</style>