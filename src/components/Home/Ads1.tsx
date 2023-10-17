import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";



export const Ads1 = () => {
    return(
        <Box>
            <Box maxWidth="sm" className="mx-auto mt-14 pt-10">
                <Box className="ad mx-auto">
                    <Typography variant="h6" className='font-extrabold mt-6 text-ggreen'>love writing?</Typography>
                    <Typography variant="h2" className='text-5xl font-extrabold mb-2 text-fadedpee w-2/3 gold_title'>Start<span><Typography variant="h2" className="pl-2 text-main inline gold_title">Blogging</Typography></span></Typography>
                    <Typography variant="h6" className="text-sm pl-2 text-brownie" paragraph>
                        Sign up and start blogging right away.
                    </Typography>
                    <Box className="relative inline-flex w-fit">
                        <Link href="/register">
                            <Button variant="contained" sx={{ backgroundColor:"#3B0D11"}} className="rounded bg-brownie text-white px-4 py-2 text-sm hover:bg-fadedpee hover:text-white border border-brownie hover:border-fadedpee">
                                Register
                            </Button>
                        </Link>
                    </Box>
                </Box> 
            </Box>
        </Box>
    )
}