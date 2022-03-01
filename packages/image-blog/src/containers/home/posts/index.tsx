import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Masonry from 'react-masonry-component';
import Button from '../../../components/button/button';
import ImageCard from '../../../components/image-card/image-card';
import BlogPostsWrapper, {
  PostRow,
  PostCol,
  SecTitle,
  LoadMoreButton,
  SectTitleWrapper,
  SecSubTitle,
} from './style';

type PostsProps = {};

const Posts: React.FunctionComponent<PostsProps> = () => {
  const Data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        totalCount
        edges {
          node {
            excerpt(pruneLength: 300)
            fields {
              slug
              readingTime {
                text
              }
            }
            frontmatter {
              date(formatString: "MMM DD, YYYY")
              title
              description
              tags
              cover {
                childImageSharp {
                  gatsbyImageData(
                    layout: FULL_WIDTH
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
      }
    }
  `);

  const Posts = Data.allMarkdownRemark.edges;
  const TotalPost = Data.allMarkdownRemark.edges.length;

  const [state, setState] = useState({
    visibile: 9,
  });

  const [load, setload] = useState({
    loading: false,
  });

  const fetchMoreData = () => {
    setload({ loading: true });

    setTimeout(function () {
      setState((prev) => {
        return { visibile: prev.visibile + 6 };
      });
      setload({ loading: false });
    }, 1000);
  };

  return (
    <BlogPostsWrapper>
      <SectTitleWrapper>
        <SecTitle>Showcase</SecTitle>
        <SecSubTitle>Some of the projects I've been invited to contribute to in the past.</SecSubTitle>
      </SectTitleWrapper>
      <PostRow>
        <Masonry className="showcase">
          {Posts.slice(0, state.visibile).map(({ node }: any) => {
            const title = node.frontmatter.title || node.fields.slug;
            return (
              <PostCol key={node.fields.slug}>
                <ImageCard
                  title={title}
                  image={
                    node.frontmatter.cover == null
                      ? null
                      : node.frontmatter.cover.childImageSharp.gatsbyImageData
                  }
                  url={node.fields.slug}
                  readTime={node.fields.readingTime.text}
                ></ImageCard>
              </PostCol>
            );
          })}
        </Masonry>
        <LoadMoreButton>
          {state.visibile < TotalPost ? (
            <Button
              title="Load more"
              type="submit"
              onClick={fetchMoreData}
              isLoading={load.loading == true ? true : false}
              loader="Loading.."
            />
          ) : (
            <p>No more posts</p>
          )}
        </LoadMoreButton>
      </PostRow>
    </BlogPostsWrapper>
  );
};

export default Posts;
