import { Box, Typography } from "@mui/material";
import Link from "next/link";


export const Banner = () => {
    return(
        <Box className="banner_post">
        <Box maxWidth="xl">
            <Box sx={{ display: "flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap"}}>
                <Box className="banner_post_1 banner_post_bg_1">
                    <Box className="banner_post_iner text-center bg-white">
                        <Link href=""><Typography variant="h5" className="text-pinkie font-semibold"> React / Frontend</Typography></Link> 
                        <Link href=""><Typography variant="h2" className="text-pee hover:text-pinkie">Is React JS Really Dying?</Typography></Link> 
                        <Typography variant="h5" className="text-subtext" paragraph>Posted on April 15, 2019 by Fname Lname</Typography>
                    </Box>
                </Box><Box className="banner_post_1 banner_post_bg_2">
                    <Box className="banner_post_iner text-center bg-white">
                        <Link href=""><Typography variant="h5" className="text-pinkie font-semibold"> Python / Backend Development</Typography></Link> 
                        <Link href=""><Typography variant="h2" className="text-pee hover:text-pinkie">Learning FastAPI</Typography></Link> 
                        <Typography variant="h5" className="text-subtext" paragraph>Posted on April 15, 2019 by Fname Lname</Typography>
                    </Box>
                </Box>
                <Box className="banner_post_1 banner_post_bg_3">
                    <Box className="banner_post_iner text-center bg-white">
                        <Link href=""><Typography variant="h5" className="text-pinkie font-semibold"> Cloud Engineering / DevOps</Typography></Link> 
                        <Link href=""><Typography variant="h2" className="text-pee hover:text-pinkie">It&apos;s Up There!</Typography></Link> 
                        <Typography variant="h5" className="text-subtext" paragraph>Posted on April 15, 2019 by Fname Lname</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
    )
}