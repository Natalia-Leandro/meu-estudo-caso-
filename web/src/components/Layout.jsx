import { AppBar, Toolbar, Typography, Container, Box, Button } from "@mui/material";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Add, List } from "@mui/icons-material";

export default function Layout() {
  const location = useLocation();

  return (
    <>
      {}
      <AppBar
        position="fixed"
        sx={{
          background: "linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)",
          boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Título do sistema */}
          <Typography variant="h6" fontWeight="bold">
            🛍️ Sistema de Produtos
          </Typography>

          {/* Menu de navegação */}
          <Box display="flex" gap={2}>
            <Button
              component={Link}
              to="/"
              variant={location.pathname === "/" ? "contained" : "outlined"}
              startIcon={<List />}
              sx={{
                textTransform: "none",
                background:
                  location.pathname === "/"
                    ? "linear-gradient(90deg, #7b1fa2, #9c27b0)"
                    : "transparent",
                color: location.pathname === "/" ? "#fff" : "#fff",
                borderColor: "#fff",
                "&:hover": {
                  background:
                    "linear-gradient(90deg, #6a1b9a, #8e24aa)",
                },
              }}
            >
              Produtos
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Espaço reservado pra altura da AppBar */}
      <Toolbar />

      {/* Conteúdo das páginas */}
      <Container
        maxWidth="lg"
        sx={{
          mt: 4,
          mb: 4,
          backgroundColor: "#f9f9fb",
          borderRadius: 3,
          p: 3,
          minHeight: "80vh",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <Outlet />
      </Container>
    </>
  );
}
