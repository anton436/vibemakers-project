import React from 'react';
import Typography from '@mui/material/Typography';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
import { createTheme, List, ListItem } from '@mui/material';

const Connect = () => {
    const theme = createTheme();

    return (
        <>
            <Typography
                sx={{
                    fontWeight: 700,
                    fontSize: 26,
                    mt: {
                        xs: 8,
                        md: 0,
                    },
                }}
                component="h1"
                variant="h5"
            >
                Connect
            </Typography>

            <Link
                className="icon-twitter"
                href="https://twitter.com/FILAUSA?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            >
                <TwitterIcon />
            </Link>

            <Link
                className="icon-instagram"
                href="https://www.instagram.com/filausa/"
            >
                <InstagramIcon />
            </Link>

            <Link
                className="icon-facebook"
                href="https://www.facebook.com/filausa/"
            >
                <FacebookIcon />
            </Link>
        </>
    );
};

export default Connect;
