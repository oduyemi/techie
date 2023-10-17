import { Header } from "@/components/Navigation/Header";
import { Box } from "@mui/material";
import ContactPage from "@/Pages/ContactPage";

export default function contact() {
  return (
    <main>
      <Header />
      <Box>
        <ContactPage />
      </Box>
      
    </main>
  )
}
