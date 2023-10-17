import { Header } from "@/components/Navigation/Header";
import { Box } from "@mui/material";
import { Register } from "@/components/Forms/Register";

export default function register() {
  return (
    <main>
      <Header />
      <Box>
        <Register />
      </Box>
      
    </main>
  )
}
