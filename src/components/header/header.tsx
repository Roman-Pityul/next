import { ShopTwo } from "@mui/icons-material"
import { AppBar, Container, IconButton, Toolbar, Typography } from "@mui/material"

const Header = () => {
    return (
        <AppBar>
            <Toolbar>
                <Container sx={{ display: 'fex', justifyContent: 'space-between' }}>
                    <Typography variant="h5" sx={{ color: '#fff' }}>
                        Test title
                    </Typography>
                    <IconButton sx={{ color: '#fff' }}>
                        <ShopTwo />
                    </IconButton>
                </Container>
            </Toolbar>
        </AppBar>
    )
}

export default Header