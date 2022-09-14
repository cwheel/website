import * as React from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import { css } from '@emotion/react';

const HeroImage = css`
    max-height: 500px;
    filter: grayscale() brightness(0.75);
`;

const heroImages = [
    {
        image: (
            <StaticImage
                alt="hero1"
                src="../../../static/images/outdoors/hero1.jpg"
                css={HeroImage}
            />
        ),
        location: 'Above Kenosha Pass, Park County, CO',
    },
    {
        image: (
            <StaticImage
                alt="hero2"
                src="../../../static/images/outdoors/hero2.jpg"
                css={HeroImage}
            />
        ),
        location: 'Swiss Syphon, Cenote Jailhouse, Tulum Mexico',
    },
    {
        image: (
            <StaticImage
                alt="hero3"
                src="../../../static/images/outdoors/hero3.jpg"
                css={HeroImage}
            />
        ),
        location: 'Hillmans Highway, Mt. Washington, NH',
    },
    {
        image: (
            <StaticImage
                alt="hero4"
                src="../../../static/images/outdoors/hero4.jpg"
                css={HeroImage}
            />
        ),
        location: 'Hurrican Mountain, Conway, NH',
    },
    {
        image: (
            <StaticImage
                alt="hero5"
                src="../../../static/images/outdoors/hero5.jpg"
                css={HeroImage}
            />
        ),
        location: 'Rubicon Wall, D.L. Bliss State Park, Lake Tahoe, CA',
    },
    {
        image: (
            <StaticImage
                alt="hero6"
                src="../../../static/images/outdoors/hero6.jpg"
                css={HeroImage}
            />
        ),
        location: 'Lower Gunstock, Rogers Pass, British Columbia, CA',
    },
    {
        image: (
            <StaticImage
                alt="hero7"
                src="../../../static/images/outdoors/hero7.jpg"
                css={HeroImage}
            />
        ),
        location: 'Gunstock, Rogers Pass, British Columbia, CA',
    },
    {
        image: (
            <StaticImage
                alt="hero8"
                src="../../../static/images/outdoors/hero8.jpg"
                css={HeroImage}
            />
        ),
        location: 'Chan Hole, Texas Skull Line, Tulum, Mexico',
    },
];

export default heroImages;