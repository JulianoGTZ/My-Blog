import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Author from './Author';
import Comments from './Comments';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import styles from './Post.module.scss';

const Post = ({ post }) => {
  const { html } = post;
  const { tagSlugs, slug } = post.fields;
  const { tags, title, date } = post.frontmatter;

  return (
    <div className={styles.post}>
      <Link className={styles['post__home-button']} to="/">
        All Articles
      </Link>

      <div className={styles.post__content}>
        <Content body={html} title={title} />
      </div>

      <div className={styles.post__footer}>
        <Meta date={date} />
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        <Author />
      </div>

      <div className={styles.post__comments}>
        <Comments postSlug={slug} postTitle={post.frontmatter.title} />
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      tagSlugs: PropTypes.string.isRequired,
    }),
    frontmatter: PropTypes.shape({
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      title: PropTypes.string.isRequired,
    }),
    id: PropTypes.string.isRequired,
    html: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
