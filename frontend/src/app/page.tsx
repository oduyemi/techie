import { Header } from "@/components/Navigation/Header";
import { Box } from "@mui/material";
import Homepage from "@/Pages/HomePage";

export default function home() {
  return (
    <main>
      <Header />
      <Box>
        <Homepage />
      </Box>
      
    </main>
  )
}
