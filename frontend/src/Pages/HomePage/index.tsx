import { Banner } from "@/components/Home/Banner";
import { Ads1 } from "@/components/Home/Ads1";
import { FeaturedPost } from "@/components/Home/FeaturedPost";
import { Box } from "@mui/material";



const Homepage = () => {
    return(
        <>
            <Box>
                <Banner />
            </Box>
            <Box>
                <Ads1 />
            </Box>
            <Box className="mt-10">
                <FeaturedPost />
            </Box>
        </>
    )
}

export default Homepage