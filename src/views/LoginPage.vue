<script>
import TheFooter from '@/layouts/TheFooter.vue'

import '@/styles/home.css'

export default {
  components: {
    TheFooter
  }
}
</script>


<template>

  <div id="layoutAuthentication_content">
    <main>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5">
            <div class="card shadow-lg border-0 rounded-lg mt-5">
              <div class="card-header bg-greyblack text-light"><h3 class="text-center font-weight-light my-4">Login</h3></div>
              <div class="card-body bg-greyblack text-light">
                <form method="POST">
                  <div class="form-floating mb-3">
                    <input class="form-control bg-greydark" id="inputEmail" type="email" placeholder="name@example.com" />
                    <label for="inputEmail">Email </label>
                  </div>
                  <div class="form-floating mb-3">
                    <input class="form-control bg-greydark" id="inputPassword" type="password" placeholder="Password" />
                    <label for="inputPassword">Senha</label>
                  </div>
                  <div class="form-check mb-3">
                    <input class="form-check-input" id="inputRememberPassword" type="checkbox" value="" />
                    <label class="form-check-label" for="inputRememberPassword">Lembrar senha</label>
                  </div>
                  <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                    <a class="small" href="/reset">Esqueceu sua Senha?</a>
                    <a class="btn btn-blue text-light" href="/">Login</a>
                  </div>
                </form>
              </div>
              <div class="card-footer text-center py-3 bg-greyblack">
                <div class="small"><a href="/register">Não possui uma conta? Assine!</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <TheFooter/>
  </div>
</template>


<style lang="scss" type="text/scss">
#layoutAuthentication_content {
  background-image:url('@/assets/background/bg-login-page.png');
  background-repeat:no-repeat;
  background-size:cover;

  display: flex;
  flex-direction: column;
  min-height: 100vh;

  main {
    height: 100%;
  }
}
</style>
