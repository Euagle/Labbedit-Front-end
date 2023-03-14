import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL, TOKEN_NAME } from "../../constants/url";
import { goToHomePage, goToSignupPage } from "../../routes/coordinator";
import { Arti, LoginContainer, LogoContainer, Title, SubTitle, Hr, Logo, Orange, Gray, LightOrange, LightGray, MainContainer, LoaderContainer } from './style'


export default function LoginPage() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false)

  const changeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const login = async (event) => {
    event.preventDefault()

    try {
      setIsLoading(true);

      const body = {
        email: form.email,
        password: form.password
      };

      const response = await axios.post(BASE_URL + "/users/login", body);
      window.localStorage.setItem(TOKEN_NAME, response.data.token);

      setIsLoading(false);
      goToHomePage(navigate);
    } catch (error) {
      setIsLoading(false);
      console.error(error?.response?.data);
      window.alert(error?.response?.data)
    }
  };

  return (
    <LoginContainer>
        <LogoContainer>
                            <Logo>
                                <Orange></Orange>
                                <Gray></Gray>
                                <LightOrange></LightOrange>
                                <LightGray></LightGray>
                            </Logo>
                            <Title>LabEddit</Title>
                            <SubTitle>O projeto de rede social da Labenu</SubTitle>
                        </LogoContainer>
      {/* <Title>
        da labnu
      </Title> */}
                        <MainContainer>
        {/* <h1>
          Faça o login
        </h1> */}

        <Arti >
          <form onSubmit={login} autoComplete="off">
            <section>
              {/* <placholdr>Email</placholdr> */}
              <input
                name={"email"}
                value={form.email}
                onChange={changeForm}
                placeholder="E-mail"
              />
            </section>

            <section>
              {/* <placholdr>Senha</placholdr> */}
              <input
                type={showPassword ? "text" : "password"}
                name={"password"}
                value={form.password}
                onChange={changeForm}
                placeholder="password"
              />

              {/* <span>
                <input
                  type="checkbox"
                  value={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                />
                Mostrar Senha
              </span> */}
            </section>

            <button className="button" disabled={isLoading}>Continuar</button>
          </form>
          <h2>
          <Hr />

          </h2>

          <h2>
            {/* Ainda não tem conta? {" "} */}
            <button className="button-color" disabled={isLoading} onClick={() => goToSignupPage(navigate)}>
              Crie uma conta!
            </button>
          </h2>


          {/* <h3>Conta de teste</h3>
          <p>gleiscylima@email.com</p>
          <p>gleicea123</p> */}
          {/* <button
            onClick={() => {
              setForm({
                email: "astrodev@email.com",
                password: "astrodev99"
              })
            }}
          >
            Autopreencher
          </button> */}
        </Arti>
      </MainContainer>
      
      
    </LoginContainer>
    
  );
}
