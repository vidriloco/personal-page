import * as React from 'react';
import PersonalBlogWrapper from './style';
import Posts from './posts';
import Intro from './intro';
import Brief from './brief';

type PersonalBlogProps = {};

const PersonalBlog: React.FunctionComponent<PersonalBlogProps> = (props) => {
  return (
    <PersonalBlogWrapper {...props}>
      <Intro />
    </PersonalBlogWrapper>
  );
};

export default PersonalBlog;
