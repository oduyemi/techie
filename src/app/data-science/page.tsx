import { Header } from "@/components/Navigation/Header";
import { Box } from "@mui/material";
import DataSciencePage from "@/Pages/DataSciencePage";

export default function data() {
  return (
    <main>
      <Header />
      <Box>
        <DataSciencePage />
      </Box>
      
    </main>
  )
}
