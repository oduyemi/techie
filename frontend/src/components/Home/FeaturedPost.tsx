"use client"
import { useEffect, useState } from 'react';
import { Box, Typography, FormControl, Button, TextField } from "@mui/material";
import Link from "next/link";
import Image from "next/image";





interface Blog {
    blog_img: string;
    blog_category: string;
    blog_title: string;
    blog_date: string;
    blog_author: string[];
}

interface BlogCategory {
    blog_title: string;
    blog_author: string;
    blog_date: string;
    // blog_content: string;
    blog_img: string;
    blog_category_name: string;
}



export const FeaturedPost = () => {
    const [latestBlog, setLatestBlog] = useState<Blog | null>(null);
    const [dataBlog, setDataBlog] = useState<BlogCategory[]>([]);
    const [frontendBlog, setFrontendBlog] = useState<BlogCategory[]>([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            // const response = await fetch("https://techieapi.onrender.com/blogs");
            const data = await response.json();
            setLatestBlog(data[0]);
        } catch (error) {
            console.error('Error fetching blog data:', error);
        }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
        try {
            // const response = await fetch("https://techieapi.onrender.com/blogs-by-category/1");
            const data = await response.json();
            setDataBlog(data[0]);
        } catch (error) {
            console.error('Error fetching blog data:', error);
        }
        };

        fetchData();
    }, []);

    const renderRandomDataBlogs = () => {
        if (dataBlog.length === 0) {
            return <Typography variant="h5">No blog post available at the moment</Typography>;
        }
    
        const shuffledDataBlogs = [...dataBlog].sort(() => Math.random() - 0.5).slice(0, 2);
    
        return shuffledDataBlogs.map((blog) => (
            <Box key={blog.blog_title} className="single_post post_1">
                <Box className="single_post_img mr-4">
                    <Image
                        src={blog.blog_img} 
                        alt="Featured Post"
                        width={200}
                        height={200}
                        className="h-full w-full object-cover"
                    />
                </Box>
                    <Box className="single_post_text text-center mr-4">
                    <Link href=""><Typography variant="h5" className="text-pinkie text-sm"> {`${dataBlog?.blog_category_name}`}</Typography></Link> 
                        <Link href=""><Typography variant="h2" className="text-pee hover:text-pinkie text-4xl">{`${dataBlog.blog_title}`} </Typography></Link> 
                        <Typography variant="h5" className="text-fadedpee text-sm" paragraph>{`Posted on ${latestBlog.blog_date} by ${Array.isArray(dataBlog.blog_author) ? dataBlog.blog_author.join(', ') : dataBlog.blog_author}`}</Typography>
                    </Box>
            </Box>
        ));
    };

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch("https://techieapi.onrender.com/blogs-by-category/4");
            const data = await response.json();
            setFrontendBlog(data[0]);
        } catch (error) {
            console.error('Error fetching blog data:', error);
        }
        };

        fetchData();
    }, []);

    const renderRandomFrontendBlogs = () => {
        if (frontendBlog.length === 0) {
            return <Typography variant="h5">No blog post available at the moment</Typography>;
        }
    
        const shuffledFrontendBlogs = [...frontendBlog].sort(() => Math.random() - 0.5).slice(0, 2);

        return shuffledFrontendaBlogs.map((blog) => (
            <Box key={blog.blog_title} className="single_post post_1">
                <Box className="single_post_img mr-4">
                    <Image
                        src={blog.blog_img}  
                        alt="Featured Post"
                        width={200}
                        height={200}
                        className="h-full w-full object-cover"
                    />
                </Box>
                    <Box className="single_post_text text-center mr-4">
                    <Link href=""><Typography variant="h5" className="text-pinkie text-sm"> {`${frontendBlog?.blog_category_name}`}</Typography></Link> 
                        <Link href=""><Typography variant="h2" className="text-pee hover:text-pinkie text-4xl">{`${frontendBlog.blog_title}`} </Typography></Link> 
                        <Typography variant="h5" className="text-fadedpee text-sm" paragraph>{`Posted on ${frontendBlog.blog_date} by ${Array.isArray(frontendBlog.blog_author) ? frontendBlog.blog_author.join(', ') : frontendBlog.blog_author}`}</Typography>
                    </Box>
            </Box>
        ));
    };

    return(
        <Box maxWidth="xl" className="all_post section_padding mt-10 datablog">
        <Box>
            <Box maxWidth="xl" sx={{ display:"flex", alignItems:"space-between", justifyContent:"center"}} className="mx-auto">
                <Box >
                    <Box>
                            <Box maxWidth="xl" className="single_post post_1 feature_post">
                                <Box>
                                    {renderRandomDataBlogs()}
                                </Box>
                                
                            </Box>
                    </Box>
                    <Box maxWidth="l" sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                    <Box >
                        <Box  maxWidth="xl" className="single_post post_1 feature_post">
                            {renderRandomFrontendBlogs()}
                        </Box>
                    </Box>
                    <Box >
                        {latestBlog && (
                            <Box className="single_post post_1">
                                <Box className="single_post_img mr-4">
                                <Image
                                        src={`${dataBlog.blog_img}`}
                                        alt="Featured Post"
                                        width={200}
                                        height={200}
                                        className="h-full w-full object-cover"
                                    />
                                </Box>
                                <Box className="single_post_text text-center mr-4">
                                <Link href=""><Typography variant="h5" className="text-pinkie text-sm"> {`${dataBlog.blog_category}`}</Typography></Link> 
                                    <Link href=""><Typography variant="h2" className="text-pee hover:text-pinkie text-4xl">{`${dataBlog.blog_title}`} </Typography></Link> 
                                    <Typography variant="h5" className="text-fadedpee text-sm" paragraph>{`Posted on ${latestBlog.blog_date} by ${Array.isArray(dataBlog.blog_author) ? dataBlog.blog_author.join(', ') : dataBlog.blog_author}`}</Typography>
                                </Box>
                            </Box>
                        )}  
                           
                    </Box>
                    </Box>
                    <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                    <Box >
                        <Box className="single_post post_1">
                            <Box className="single_post_img mr-4">
                            <Image
                                    src="/assets/images/post/post_20.png"
                                    alt="Featured Post"
                                    width={200}
                                    height={200}
                                    className="h-full w-full object-cover"
                                />
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
                                <Image
                                    // src="/assets/images/post/post_21.png"
                                    alt="Featured Post"
                                    width={200}
                                    height={200}
                                    className="h-full w-full object-cover"
                                />
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
                            <Image
                                    src="/assets/images/post/post_18.png"
                                    alt="Featured Post"
                                    width={200}
                                    height={200}
                                    className="h-full w-full object-cover"
                                />
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
                                <Image
                                    src="/assets/images/post/post_19.png"
                                    alt="Featured Post"
                                    width={200}
                                    height={200}
                                    className="h-full w-full object-cover"
                                />
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
                                <Image
                                        src="/assets/images/sidebar/sidebar_1.png"
                                        alt="Featured Post"
                                        width={10}
                                        height={10}
                                        className="h-20 w-20 object-cover"
                                    />
                                    {/* <Image src="img/sidebar/sidebar_1.png" alt=""> */}
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
                                <Image
                                        src="/assets/images/sidebar/sidebar_1.png"
                                        alt="Featured Post"
                                        width={10}
                                        height={10}
                                        className="h-20 w-20 object-cover"
                                    />
                                    {/* <Image src="img/sidebar/sidebar_2.png" alt=""> */}
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
                                <Image
                                        src="/assets/images/sidebar/sidebar_1.png"
                                        alt="Featured Post"
                                        width={10}
                                        height={10}
                                        className="h-20 w-20 object-cover"
                                    />
                                    {/* <Image src="img/sidebar/sidebar_3.png" alt=""> */}
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

