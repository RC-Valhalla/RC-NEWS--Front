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
  <div id="layoutAuthentication_content_3">
    <main>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5">
            <div class="card shadow-lg border-0 rounded-lg mt-5">
              <div class="card-header bg-greyblack text-light"><h3 class="text-center font-weight-light my-4">Recuperação de Senha</h3></div>
              <div class="card-body bg-greyblack">
                <div class="small mb-3 text-muted">Insira o endereço de email que deseja resetar a senha.</div>
                <form method="POST">
                  <div class="form-floating mb-3">
                    <input class="form-control bg-greydark" id="inputEmail" type="email" placeholder="name@example.com" />
                    <label for="inputEmail">Email </label>
                  </div>
                  <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                    <a class="small" href="/login">Voltar ao Login</a>
                    <a class="btn btn-greend" href="login.html">Resetar Senha</a>
                  </div>
                </form>
              </div>
              <div class="card-footer text-center py-3 bg-greyblack text-light">
                <div class="small"><a href="/register">Não possui uma conta? Assine!</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  <TheFooter/>
</template>


<style lang="scss" type="text/scss">
a{
  color:#66A120;
}
a:hover{
  color:#56841A;
}

  #layoutAuthentication_content_3 {
    background-image:url('../assets/background/bg-register-page.jpg');
    background-repeat:no-repeat;
    background-size:cover;

    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
</style>
