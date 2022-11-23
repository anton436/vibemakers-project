import React from 'react';
import { createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Link, List, ListItem, Typography, Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Footer = () => {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    const contact = [
        'FILA USA Careers',
        'FILA USA Careers',
        'FILA Online Careers',
        'Idea Submission',
        'Preferred Player',
        'Wholesaler Inquiries',
    ];
    const corporate = ['FILA Holdings', 'ESG', 'FILA News'];
    const policies = ['Terms of Use', 'Privacy Policy', 'Accessibility'];
    const resources = [
        'Account',
        'Sitemap',
        'Customer Service',
        'Check Order Status',
        'The Archives',
        'eGift Card',
    ];
    const supplyChain = [
        'California Supply Chains Act',
        'Corporate Statement on Forced Labor',
        'Business Partner Code of Conduct',
        'FAQ',
    ];

    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 1024,
                lg: 1200,
                xl: 1536,
            },
        },
    });

    return (
        <Box
            sx={{
                backgroundColor: '#0b1f3f',
                color: 'white',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    [theme.breakpoints.down('md')]: {
                        display: 'block',
                    },
                    justifyContent: 'space-between',
                    padding: '2% 5%',
                    fontSize: '11px',

                    border: 'solid rgba(122,139,160,.3)',
                    borderWidth: '0 0 1px',
                    padding: '23px 0',
                    width: '97%',
                    margin: '0 auto',
                }}
            >
                <Box onClick={() => console.log('zxc')}>
                    <Typography
                        sx={{
                            padding: '3px 10px',
                            [theme.breakpoints.down('md')]: {
                                fontWeight: 600,
                                border: 'solid rgba(122,139,160,.3)',
                                borderWidth: '0 0 1px',
                                padding: '23px 0',
                            },
                        }}
                    >
                        Contact
                        <KeyboardArrowDownIcon
                            sx={{
                                position: 'absolute',
                                top: 'calc(21%)',
                                right: '3%',
                                [theme.breakpoints.up('md')]: {
                                    display: 'none',
                                },
                            }}
                        />
                    </Typography>
                    <List
                        sx={{
                            [theme.breakpoints.down('md')]: {
                                padding: '0',
                            },
                        }}
                    >
                        {contact.map((i, index) => (
                            <ListItem
                                key={index}
                                sx={{
                                    padding: '10px',
                                    margin: 0,
                                    [theme.breakpoints.down('md')]: {
                                        display: 'none',
                                    },
                                }}
                            >
                                {
                                    <Link
                                        sx={{
                                            color: 'white',
                                            cursor: 'pointer',
                                            transition: '0.5s',
                                        }}
                                    >
                                        {i}
                                    </Link>
                                }
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Box>
                    <Typography
                        sx={{
                            padding: '3px 10px',
                            [theme.breakpoints.down('md')]: {
                                fontWeight: 600,
                                border: 'solid rgba(122,139,160,.3)',
                                borderWidth: '0 0 1px',
                                padding: '23px 0',
                            },
                        }}
                    >
                        Corporate
                        <KeyboardArrowDownIcon
                            sx={{
                                position: 'absolute',
                                top: 'calc(32%)',
                                right: '3%',
                                [theme.breakpoints.up('md')]: {
                                    display: 'none',
                                },
                            }}
                        />
                    </Typography>
                    <List
                        sx={{
                            [theme.breakpoints.down('md')]: {
                                padding: '0',
                            },
                        }}
                    >
                        {corporate.map((i, index) => (
                            <ListItem
                                key={index}
                                sx={{
                                    padding: '10px',
                                    margin: 0,
                                    [theme.breakpoints.down('md')]: {
                                        display: 'none',
                                    },
                                }}
                            >
                                {
                                    <Link
                                        sx={{
                                            color: 'white',
                                            cursor: 'pointer',
                                            transition: '0.5s',
                                        }}
                                    >
                                        {i}
                                    </Link>
                                }
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Box>
                    <Typography
                        sx={{
                            padding: '3px 10px',
                            [theme.breakpoints.down('md')]: {
                                fontWeight: 600,
                                border: 'solid rgba(122,139,160,.3)',
                                borderWidth: '0 0 1px',
                                padding: '23px 0',
                            },
                        }}
                    >
                        Policies
                        <KeyboardArrowDownIcon
                            sx={{
                                position: 'absolute',
                                top: 'calc(43%)',
                                right: '3%',
                                [theme.breakpoints.up('md')]: {
                                    display: 'none',
                                },
                            }}
                        />
                    </Typography>
                    <List
                        sx={{
                            [theme.breakpoints.down('md')]: {
                                padding: '0',
                            },
                        }}
                    >
                        {policies.map((i, index) => (
                            <ListItem
                                key={index}
                                sx={{
                                    padding: '10px',
                                    margin: 0,
                                    [theme.breakpoints.down('md')]: {
                                        display: 'none',
                                    },
                                }}
                            >
                                {
                                    <Link
                                        sx={{
                                            color: 'white',
                                            cursor: 'pointer',
                                            transition: '0.5s',
                                        }}
                                    >
                                        {i}
                                    </Link>
                                }
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Box>
                    <Typography
                        sx={{
                            padding: '3px 10px',
                            [theme.breakpoints.down('md')]: {
                                fontWeight: 600,
                                border: 'solid rgba(122,139,160,.3)',
                                borderWidth: '0 0 1px',
                                padding: '23px 0',
                            },
                        }}
                    >
                        Resources
                        <KeyboardArrowDownIcon
                            sx={{
                                position: 'absolute',
                                top: 'calc(54%)',
                                right: '3%',
                                [theme.breakpoints.up('md')]: {
                                    display: 'none',
                                },
                            }}
                        />
                    </Typography>
                    <List
                        sx={{
                            [theme.breakpoints.down('md')]: {
                                padding: '0',
                            },
                        }}
                    >
                        {resources.map((i, index) => (
                            <ListItem
                                key={index}
                                sx={{
                                    padding: '10px',
                                    [theme.breakpoints.down('md')]: {
                                        display: 'none',
                                    },
                                }}
                            >
                                {
                                    <Link
                                        sx={{
                                            color: 'white',
                                            cursor: 'pointer',
                                            transition: '0.5s',
                                        }}
                                    >
                                        {i}
                                    </Link>
                                }
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Box>
                    <Typography
                        sx={{
                            padding: '3px 10px',
                            [theme.breakpoints.down('md')]: {
                                fontWeight: 600,
                                border: 'solid rgba(122,139,160,.3)',
                                borderWidth: '0 0 1px',
                                padding: '23px 0',
                            },
                        }}
                    >
                        Supply Chain
                        <KeyboardArrowDownIcon
                            sx={{
                                position: 'absolute',
                                top: 'calc(65%)',
                                right: '3%',
                                [theme.breakpoints.up('md')]: {
                                    display: 'none',
                                },
                            }}
                        />
                    </Typography>
                    <List
                        sx={{
                            [theme.breakpoints.down('md')]: {
                                padding: '0',
                            },
                        }}
                    >
                        {supplyChain.map((i, index) => (
                            <ListItem
                                key={index}
                                sx={{
                                    padding: '10px',
                                    [theme.breakpoints.down('md')]: {
                                        display: 'none',
                                    },
                                }}
                            >
                                {
                                    <Link
                                        sx={{
                                            color: 'white',
                                            cursor: 'pointer',
                                            transition: '0.5s',
                                        }}
                                    >
                                        {i}
                                    </Link>
                                }
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Box sx={{ width: '27%' }}>
                    <Typography
                        sx={{
                            padding: '3px 10px',
                        }}
                    >
                        Join FILA
                    </Typography>

                    <List>
                        <ListItem
                            sx={{
                                width: '95%',
                                fontSize: '16px',
                                padding: '3px 10px',
                            }}
                        >
                            Sign up for exclusive offers, first looks at
                            collaborations, and all things FILA.
                        </ListItem>

                        <Button
                            className="btn btn-modal-sign-up"
                            type="btn"
                            value="Sign Up to Join FILA"
                            sx={{
                                width: '95%',
                                borderRadius: '0px',
                                padding: '2% 10%',
                                margin: '15px 10px',
                                color: 'black',
                                backgroundColor: 'white',
                            }}
                        >
                            <EmailOutlinedIcon />
                            Sign Up to Join FILA
                        </Button>

                        <ListItem
                            sx={{
                                fontSize: '14px',
                                padding: '3px 10px',
                            }}
                        >
                            Connect with Us
                        </ListItem>
                        <List
                            className="icons"
                            sx={{ display: 'flex', width: '30%' }}
                        >
                            <ListItem>
                                <Link
                                    className="icon-twitter"
                                    href="https://twitter.com/FILAUSA?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                                >
                                    <TwitterIcon />
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link
                                    className="icon-instagram"
                                    href="https://www.instagram.com/filausa/"
                                >
                                    <InstagramIcon />
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link
                                    className="icon-facebook"
                                    href="https://www.facebook.com/filausa/"
                                >
                                    <FacebookIcon />
                                </Link>
                            </ListItem>
                        </List>
                    </List>
                </Box>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '80px',
                    paddingBottom: '50px',
                    paddingTop: '40px',
                    borderTopWidth: '1px',
                    borderColor: 'white',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontSize: '13px',
                    }}
                >
                    <Link
                        href="https://www.fila.com/us"
                        sx={{
                            width: '90px',
                            height: '40px',
                        }}
                    >
                        <img
                            src="https://logodownload.org/wp-content/uploads/2017/06/fila-logo-15.png"
                            alt="fila"
                        />
                    </Link>

                    <Typography>
                        {' '}
                        © 2022 FILA Luxembourg, S.a.r.l. All Rights Reserved{' '}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
