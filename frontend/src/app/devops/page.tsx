import { Header } from "@/components/Navigation/Header";
import { Box } from "@mui/material";
import DevOpsPage from "@/Pages/DevOpsPage";

export default function devops() {
  return (
    <main>
      <Header />
      <Box>
        <DevOpsPage />
      </Box>
      
    </main>
  )
}
