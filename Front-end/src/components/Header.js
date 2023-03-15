import { useNavigate } from "react-router-dom";
import { TOKEN_NAME } from "../constants/url";
import { goToLoginPage } from "../routes/coordinator";
import { StyledCheckout } from "./styles";


export default function Header() {
    const navigate = useNavigate();

    const logout = () => {
        window.localStorage.removeItem(TOKEN_NAME);
        goToLoginPage(navigate);
    };

    return (
        <StyledCheckout>
            <button onClick={logout}>Deslogar</button>
        </StyledCheckout>
    );
}
