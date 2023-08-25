import { useEffect, useState } from 'react'
import style from './Register.module.css'
import axios from 'axios'


const Register = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [sucessoRegistro, setSucessoRegistro] = useState(false)

    useEffect(() => {
        if (sucessoRegistro) {
            navigator.push('/login')
        }
    
    }, [sucessoRegistro])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await axios.post(process.env.URL_REGISTER, {
            nome,
            email,
            senha
        })
        response.status === 201 ? setSucessoRegistro(true) : setSucessoRegistro(false)
    }

    return (
        <div className={style.container}>
            <h1>Criar conta</h1>
            <form
                onSubmit={handleSubmit}
                className={style.formGroup}
            >
                <input
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                />
                <div><p>Já tenho cadastro</p></div>
                <button>Cadastrar</button>

            </form>
        </div>)
}

export default Register