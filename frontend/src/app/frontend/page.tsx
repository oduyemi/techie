import { Header } from "@/components/Navigation/Header";
import { Box } from "@mui/material";
import FrontendPage from "@/Pages/FrontendPage";

export default function frontend() {
  return (
    <main>
      <Header />
      <Box>
        <FrontendPage />
      </Box>
      
    </main>
  )
}
