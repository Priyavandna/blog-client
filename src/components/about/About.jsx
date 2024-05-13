import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">ABOUT MY APP</Typography>
                <Text variant="h5">Welcome to [MY BLOG]!

At [CREATE YOUR OWN SPACE], we are passionate about [BLOGING]. Our mission is to [briefly describe your mission or purpose, e.g., "to share our love of music with fellow enthusiasts" or "to provide insightful commentary on the latest trends in fashion and beauty"]. Whether you're a seasoned enthusiast or a curious newcomer, we strive to create engaging and informative content that caters to all levels of interest and expertise.

Our team of writers and contributors are dedicated to [describe what sets your blog apart, e.g., "providing in-depth analysis and thoughtful commentary" or "curating the best tips and recommendations"]. From [list specific types of content or topics you cover, e.g., "artist interviews and album reviews" or "trend forecasts and product reviews"], we cover a wide range of topics to keep you informed, entertained, and inspired.

Join us on this journey as we explore the fascinating world of [topic/subject of your blog] together. Whether you're looking for the latest news and trends, expert advice and insights, or simply a community of like-minded individuals to connect with, you'll find it all right here at [Your Blog Name].

Thank you for visiting, and we look forward to sharing our passion with you!.<br />
                    If you are interested, you can view some of my favorite BLOGS here
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/kunaltyagi9" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                   
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/codeforinterview/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>  
                        or send me an Email 
                        <Link href="mailto:codeforinterview@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;