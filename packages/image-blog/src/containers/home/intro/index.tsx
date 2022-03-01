import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import GatsbyImage from '../../../components/gatsby-image';
import SocialProfile from '../../../components/social-profile/social-profile';
import { IntroWrapper, IntroImage, IntroTitle, Desciption, EmojisTitle } from './style';
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
} from 'react-icons/io';

type IntroProps = {};

const SocialLinks = [
  {
    icon: <IoLogoLinkedin />,
    url: 'https://www.linkedin.com/in/spalatin',
    tooltip: 'LinkedIn',
  },
  {
    icon: <IoLogoInstagram />,
    url: 'https://www.instagram.com/spalatinje',
    tooltip: 'Instagram',
  },
  {
    icon: <IoLogoTwitter />,
    url: 'https://www.twitter.com/vidriloco',
    tooltip: 'Twitter',
  },
  {
    icon: <IoLogoGithub />,
    url: 'https://github.com/vidriloco',
    tooltip: 'Github',
  },
];

const Intro: React.FunctionComponent<IntroProps> = () => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/author/" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      site {
        siteMetadata {
          author
          about
        }
      }
    }
  `);

  const { author, about, jobs } = Data.site.siteMetadata;
  const AuthorImage = Data.avatar.childImageSharp.gatsbyImageData;

  return (
    <IntroWrapper>
      <IntroImage>
        <GatsbyImage src={AuthorImage} alt="author" />
      </IntroImage>
      <IntroTitle>
        Hey! I’m <b>{author}</b>
      </IntroTitle>
      <EmojisTitle>🇲🇽 👨🏽‍💻 🗺 🪅 🛤 💪🏾 🌮 🏳️‍🌈</EmojisTitle>
      <Desciption>{about}</Desciption>
      <Desciption>{jobs}</Desciption>
      <SocialProfile items={SocialLinks} />
    </IntroWrapper>
  );
};

export default Intro;
