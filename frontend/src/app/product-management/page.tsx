import { Header } from "@/components/Navigation/Header";
import { Box } from "@mui/material";
import ProductMgtPage from "@/Pages/ProductMgtPage";

export default function product() {
  return (
    <main>
      <Header />
      <Box>
        <ProductMgtPage />
      </Box>
      
    </main>
  )
}
