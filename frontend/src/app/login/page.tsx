import { Header } from "@/components/Navigation/Header";
import { Box } from "@mui/material";
import { Login } from "@/components/Forms/Login";

export default function home() {
  return (
    <main>
      <Header />
      <Box>
        <Login />
      </Box>
      
    </main>
  )
}
