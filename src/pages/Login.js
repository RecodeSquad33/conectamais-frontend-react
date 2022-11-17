function Login() {
    return(

    <main className="form-signin w-100 m-auto">

        <form>

            <div className="form-floating">
                <input name="email" type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required></input>
                <label for="floatingInput">Email</label>
            </div>

            <div className="form-floating mt-1">
                <input name="senha" type="password" className="form-control" id="floatingPassword" placeholder="Password" required></input>
                <label for="floatingPassword">Senha</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" style={{backgroundColor: "#0D6EFD", border: "#0D6EFD",}}>Login</button>
      
        </form>

    </main>
    );
}

export default Login;
