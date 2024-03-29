
import axios from "axios"
import { StyleMain, SectionSignup } from "./style"
import { goToHomePage } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { BASE_URL, TOKEN_NAME } from "../../constants/url"
// import OpenLogin from "../../components/OpenLogin"

function SignupPage (){
    const navigate = useNavigate()
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
    }) 


    const onChangeForm = (event)=>{
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const signUp = async ()=>{
        try {

            let body ={
                name: form.name,
                email: form.email,
                password: form.password,
            }
            const response = await axios.post(`${BASE_URL}/users/signup`, body)
            window.localStorage.setItem(TOKEN_NAME, response.data.token)
            goToHomePage(navigate)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
        {/* <Header/> */}
        <StyleMain>
        {/* <OpenLogin/> */}

            <SectionSignup>
                <div>
                    <h1>Olá, boas vindas ao LabEddit ;D</h1>
                </div>
                <div>
                    <input value={form.name} name="name" onChange={onChangeForm} placeholder="Apelido"/>
                    <input value={form.email} name="email" onChange={onChangeForm} placeholder="E-mail"/>
                    <input value={form.password} name="password"
                                    type={ "password"}

                    onChange={onChangeForm} placeholder="Senha"/>         
                </div>
                <div>
                    <p>Ao continuar, você concorda com o nosso <a href="#">Contrato de usuário</a> e nossa <a href="#">Politica de Privacidade</a></p>
                    <p>
                        <span>
                            <input className="CheckBox" type="checkbox"/>
                            <label>Eu concordo em receber e-mails sobre coisas legais no Labeddit</label>
                        </span>
                    </p>
                    <button className="buttonCad" onClick={()=>signUp()}>Cadastrar</button>
                </div>
            </SectionSignup>
        </StyleMain>
        </>
    )
}

export default SignupPage
