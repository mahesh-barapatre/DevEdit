
import { AppBar, Toolbar, styled } from "@mui/material"

const Container = styled(AppBar)`
    background: #060606;
    position: static;
    border-bottom: 1px solid #2f2f2f;
    height: 9vh;
`;

const Header = () => {
    const logo = 'https://media.istockphoto.com/id/1256009178/vector/fountain-icon-vector-logo-illustration.jpg?s=612x612&w=0&k=20&c=LBDSBqDs9kfFO7ZLUczBJHv8vRnKovnOCa6IA13xmKA=';
    return (
        <Container>
            <Toolbar>
                <img src={logo} alt="logo" style={{ width: 40 }} />
                <h2 style={{paddingLeft:8}}>DevEdit</h2>
            </Toolbar>
        </Container>
    )
}

export default Header