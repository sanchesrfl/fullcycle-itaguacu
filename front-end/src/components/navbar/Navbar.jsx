function Navbar(){
    return(
        <nav>
            <div>

            </div>
            <ul>
                <li>
                    <Link to="/" aria-current="page" >
                        Login
                    </Link>
                </li>
                <li>
                    <Link className="" to="/cadastroUsuarios" aria-current="page" >
                        Cadastro Usuário
                    </Link>
                </li>
                <li>
                    <Link className="" aria-current="page" to="/chat">
                        Chat
                    </Link>
                </li>
                <li>
                    <Link className="" aria-current="page" to="/excluirConta">
                        Excluir conta
                    </Link>
                </li>
                <li>
                    <Link className="" aria-current="page" to="/logout">
                        Logout
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar