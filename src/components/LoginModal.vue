<template>
  <div class="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
  <div class="modal-content">
      <div class="modal-header text-center">
          <h4 class="modal-title w-100 font-weight-bold">Sign in</h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
      </div>
      <div class="modal-body mx-3">
          <div class="md-form mb-5">
              <label data-error="wrong" data-success="right" for="defaultForm-email"> Your email</label>
              <input type="email" id="defaultForm-email" class="form-control validate">
          </div>
          <div class="md-form mb-4">
              <label data-error="wrong" data-success="right" for="defaultForm-pass"> Your password</label>
              <input type="password" id="defaultForm-pass" class="form-control validate">
          </div>
      </div>
      <div class="modal-footer  mx-3 justify-content-center">
          <button class="btn btn-outline-info col-6">Login</button>
          <a class="btn btn-outline-primary col-6">Forgot Password</a> </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: 'LoginModal',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
