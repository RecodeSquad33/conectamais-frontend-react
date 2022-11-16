function Login() {
    return(

    <main class="form-signin w-100 m-auto">

        <form>

            <div class="form-floating">
                <input name="email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required></input>
                <label for="floatingInput">Email</label>
            </div>

            <div class="form-floating mt-1">
                <input name="senha" type="password" class="form-control" id="floatingPassword" placeholder="Password" required></input>
                <label for="floatingPassword">Senha</label>
            </div>

            <button class="w-100 btn btn-lg btn-primary" style={{backgroundColor: "#0D6EFD", border: "#0D6EFD",}}>Login</button>
      
        </form>

  </main>

    );
}

export default Login;
