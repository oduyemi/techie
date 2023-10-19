"use client"
import { useEffect, useState } from 'react';
import { Box, Typography, FormControl, Button, TextField } from "@mui/material";
import Link from "next/link";
import Image from "next/image";





interface Blog {
    blog_img: string;
    blog_category: any;
    blog_title: string;
    blog_date: string;
    blog_author: string[];
    // Add other properties as needed
}


export const FeaturedPost = () => {
    const [latestBlog, setLatestBlog] = useState<Blog | null>(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch("localhost:8000/blogs");
            const data = await response.json();
            setLatestBlog(data[0]);
        } catch (error) {
            console.error('Error fetching blog data:', error);
        }
        };

        fetchData();
    }, []);

    return(
        <Box maxWidth="xl" className="all_post section_padding mt-10">
        <Box>
            <Box maxWidth="xl" sx={{ display:"flex", alignItems:"space-between", justifyContent:"center"}} className="mx-auto">
                <Box >
                    <Box>
                        {latestBlog && (
                            <Box maxWidth="xl" className="single_post post_1 feature_post">
                                <Box className="single_post_img mt-14">
                                    <Image
                                        src=""
                                        alt="Featured Post"
                                        width={400}
                                        height={400}
                                        className="h-full w-full object-cover"
                                    />
                                </Box>
                                <Box className="single_post_text text-center">
                                    <Link href=""><Typography variant="h5" className="text-pinkie text-sm">{latestBlog.blog_category}</Typography></Link> 
                                    <Link href=""><Typography variant="h2" className="text-pee hover:text-pinkie text-4xl">{latestBlog.blog_title} </Typography></Link> 
                                    <Typography variant="h5" className="text-fadedpee text-sm" paragraph>{`Posted on ${latestBlog.blog_date} by ${latestBlog.blog_author.join(', ')}`}</Typography>
                                </Box>
                            </Box>
                        )}
                    </Box>
                    <Box maxWidth="l" sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                    <Box >
                        <Box className="single_post post_1">
                            <Box className="single_post_img mr-4">
                            {/* <MuiImage
                                    src="/assets/images/post/post_18.png"
                                    alt="Featured Post"
                                    width={200}
                                    height={200}
                                    className="h-full w-full object-cover"
                                /> */}
                            </Box>
                            <Box className="single_post_text text-center mr-4">
                            <Link href=""><Typography variant="h5" className="text-pinkie text-sm"> Data Analytics / Data Science</Typography></Link> 
                                <Link href=""><Typography variant="h2" className="text-pee hover:text-pinkie text-4xl">Say the D-Word </Typography></Link> 
                                <Typography variant="h5" className="text-fadedpee text-sm" paragraph>Posted on April 15, 2019 by Fname Lname</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box >
                            <Box className="single_post post_1">
                                <Box className="single_post_img">
                                {/* <MuiImage
                                    src="/assets/images/post/post_19.png"
                                    alt="Featured Post"
                                    width={200}
                                    height={200}
                                    className="h-full w-full object-cover"
                                /> */}
                                </Box>
                                <Box className="single_post_text text-center">
                                <Link href=""><Typography variant="h5" className="text-pinkie text-sm"> Data Analytics / Data Science</Typography></Link> 
                                <Link href=""><Typography variant="h2" className="text-pee hover:text-pinkie text-4xl">Say the D-Word </Typography></Link> 
                                <Typography variant="h5" className="text-fadedpee text-sm" paragraph>Posted on April 15, 2019 by Fname Lname</Typography>
                                </Box>
                            </Box>
                    </Box>
                    </Box>
                    <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                    <Box >
                        <Box className="single_post post_1">
                            <Box className="single_post_img mr-4">
                            {/* <MuiImage
                                    src="/assets/images/post/post_20.png"
                                    alt="Featured Post"
                                    width={200}
                                    height={200}
                                    className="h-full w-full object-cover"
                                /> */}
                            </Box>
                            <Box className="single_post_text text-center mr-4">
                            <Link href=""><Typography variant="h5" className="text-pinkie text-sm"> Data Analytics / Data Science</Typography></Link> 
                                <Link href=""><Typography variant="h2" className="text-pee hover:text-pinkie text-4xl">Say the D-Word </Typography></Link> 
                                <Typography variant="h5" className="text-fadedpee text-sm" paragraph>Posted on April 15, 2019 by Fname Lname</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box >
                            <Box className="single_post post_1">
                                <Box className="single_post_img">
                                {/* <MuiImage
                                    src="/assets/images/post/post_21.png"
                                    alt="Featured Post"
                                    width={200}
                                    height={200}
                                    className="h-full w-full object-cover"
                                /> */}
                                </Box>
                                <Box className="single_post_text text-center inner_title">
                                <Link href=""><Typography variant="h5" className="text-pinkie text-sm"> Data Analytics / Data Science</Typography></Link> 
                                <Link href=""><Typography variant="h2" className="text-pee hover:text-pinkie text-4xl">Say the D-Word </Typography></Link> 
                                <Typography variant="h5" className="text-fadedpee text-sm" paragraph>Posted on April 15, 2019 by Fname Lname</Typography>
                                </Box>
                            </Box>
                    </Box>
                    </Box>
                    <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                    <Box >
                        <Box className="single_post post_1">
                            <Box className="single_post_img mr-4">
                            {/* <MuiImage
                                    src="/assets/images/post/post_18.png"
                                    alt="Featured Post"
                                    width={200}
                                    height={200}
                                    className="h-full w-full object-cover"
                                /> */}
                            </Box>
                            <Box className="single_post_text text-center mr-4">
                            <Link href=""><Typography variant="h5" className="text-pinkie text-sm"> Data Analytics / Data Science</Typography></Link> 
                                <Link href=""><Typography variant="h2" className="text-pee hover:text-pinkie text-4xl">Say the D-Word </Typography></Link> 
                                <Typography variant="h5" className="text-fadedpee text-sm" paragraph>Posted on April 15, 2019 by Fname Lname</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box >
                            <Box className="single_post post_1">
                                <Box className="single_post_img">
                                {/* <MuiImage
                                    src="/assets/images/post/post_19.png"
                                    alt="Featured Post"
                                    width={200}
                                    height={200}
                                    className="h-full w-full object-cover"
                                /> */}
                                </Box>
                                <Box className="single_post_text text-center inner_title">
                                <Link href=""><Typography variant="h5" className="text-pinkie text-sm"> Data Analytics / Data Science</Typography></Link> 
                                <Link href=""><Typography variant="h2" className="text-pee hover:text-pinkie text-4xl">Say the D-Word </Typography></Link> 
                                <Typography variant="h5" className="text-fadedpee text-sm" paragraph>Posted on April 15, 2019 by Fname Lname</Typography>
                                </Box>
                            </Box>
                    </Box>
                    </Box>
                    
                    
                    
                    
                            
                        
                    </Box>
                    <Box className="page_pageniation">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination flex justify-content-center items-center">
                                <li className="page-item disabled">
                                <Link className="page-link" href=""  aria-disabled="true">Previous</Link>
                                </li>
                                <li className="page-item"><Link className="page-link" href="#">1</Link></li>
                                <li className="page-item"><Link className="page-link" href="#">2</Link></li>
                                <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                                <li className="page-item">
                                <Link className="page-link" href="#">Next</Link>
                                </li>
                            </ul>
                        </nav>
                    </Box>
                
                <Box maxWidth="sm" className="mt-14">
                    <Box className="sidebar_widget">
                        <Box className="single_sidebar_wiget search_form_widget">
                            <FormControl>
                                <Box className="mt-14">
                                    <TextField type="search" size="small"  placeholder='Search Keyword' className="mr-6 ml-4"></TextField>
                                    <Button variant="contained" sx={{ backgroundColor:"#3B0D11"}} className="rounded bg-brownie text-white px-4 py-2 text-sm hover:bg-fadedpee hover:text-white border border-brownie hover:border-fadedpee">
                                        search
                                    </Button>
                                </Box>
                            </FormControl>
                        </Box>
                        <Box className="single_sidebar_wiget">
                            <Box className="sidebar_tittle">
                                <Typography variant="h3">Categories</Typography>
                            </Box>
                            <Box className="single_catagory_item category">
                                <ul className="list-unstyled">
                                    <li><Link href="/backend">Backend Development</Link> <span>(15)</span> </li>
                                    <li><Link href="/data-science">Data Science</Link> <span>(15)</span> </li>
                                    <li><Link href="/devops">DevOps</Link> <span>(15)</span> </li>
                                    <li><Link href="/frontend">Frontend Development</Link> <span>(15)</span> </li>
                                    <li><Link href="/product-management">Product Managment</Link> <span>(15)</span> </li>
                                </ul>
                            </Box>
                        </Box>
                        <Box className="single_sidebar_wiget">
                            <Box className="sidebar_tittle">
                                <Typography variant="h3">Popular Feeds</Typography>
                            </Box>
                            <Box className="single_catagory_post post_2 ">
                                <Box className="category_post_img">
                                {/* <MuiImage
                                        src="/assets/images/sidebar/sidebar_1.png"
                                        alt="Featured Post"
                                        width={10}
                                        height={10}
                                        className="h-20 w-20 object-cover"
                                    /> */}
                                    {/* <img src="img/sidebar/sidebar_1.png" alt=""> */}
                                </Box>
                                <Box className="post_text_1 pr_30">
                                    <Link href="single-blog.html">
                                        <h3>Subdue lesser beast winged
                                            bearing meat tree one</h3>
                                    </Link>
                                    <p><span> By Michal</span> / March 30</p>
                                </Box>
                            </Box>
                            <Box className="single_catagory_post post_2 ">
                                <Box className="category_post_img">
                                {/* <MuiImage
                                        src="/assets/images/sidebar/sidebar_1.png"
                                        alt="Featured Post"
                                        width={10}
                                        height={10}
                                        className="h-20 w-20 object-cover"
                                    /> */}
                                    {/* <img src="img/sidebar/sidebar_2.png" alt=""> */}
                                </Box>
                                <Box className="post_text_1 pr_30">
                                    
                                    <Link href="">
                                        <Typography variant="h3">Subdue lesser beast winged
                                            bearing meat tree one</Typography>
                                    </Link>
                                    <Typography variant="h5" paragraph><span> By Michal</span> / March 30</Typography>
                                </Box>
                            </Box>
                            <Box className="single_catagory_post post_2">
                                <Box className="category_post_img">
                                {/* <MuiImage
                                        src="/assets/images/sidebar/sidebar_1.png"
                                        alt="Featured Post"
                                        width={10}
                                        height={10}
                                        className="h-20 w-20 object-cover"
                                    /> */}
                                    {/* <img src="img/sidebar/sidebar_3.png" alt=""> */}
                                </Box>
                                <Box className="post_text_1 pr_30">
                                    <Link href="">
                                        <Typography variant="h3">Subdue lesser beast winged
                                            bearing meat tree one</Typography>
                                    </Link>
                                    <Typography variant="h5" paragraph><span> By Michal</span> / March 30</Typography>
                                </Box>
                            </Box>
                        </Box>
                        
                        <Box className="single_sidebar_wiget">
                            <Box className="sidebar_tittle">
                                <Typography variant="h3">Share this post</Typography>
                            </Box>
                            <Box className="social_share_icon tags">
                                <ul className="list-unstyled">
                                    <li><Link href="#"><i className="ti-facebook"></i></Link></li>
                                    <li><Link href="#"><i className="ti-twitter-alt"></i></Link></li>
                                    <li><Link href="#"><i className="ti-pinterest"></i></Link></li>
                                    <li><Link href="#"><i className="ti-instagram"></i></Link></li>
                                </ul>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
    )
}

