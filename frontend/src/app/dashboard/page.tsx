import { Header } from "@/components/Navigation/Header";
import { Box } from "@mui/material";
import DashboardPage from "@/Pages/DashboardPage";

export default function dashboard() {
  return (
    <main>
      <Header />
      <Box>
        <DashboardPage />
      </Box>
      
    </main>
  )
}
