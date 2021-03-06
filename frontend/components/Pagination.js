import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo'
import Head from 'next/head';
import Link from 'next/link';
import Error from './ErrorMessage';
import PaginationStyles from './styles/PaginationStyles';
import { perPage } from '../config';

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    itemsConnection {
      aggregate {
        count
      }
    }
  }
`;

const Pagination = props => (
  <Query query={PAGINATION_QUERY}>
    {({ data, loading, error }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <Error error={error} />;
      const count = data.itemsConnection.aggregate.count;
      const page = props.page;
      const pages = Math.ceil(count / perPage);
      return (
        <PaginationStyles data-test="pagination">
          <Head>
            <title>Sick Fits! | Page {page} of {pages}</title>
          </Head>
          <Link
            prefetch
            href={{
              pathname: 'shop',
              query: { page: page - 1 },
            }}
          >
            <a className="prev" aria-disabled={page <= 1}>← Prev</a>
          </Link>
          <p>
            Page {page} of
            <span className="total-pages">
              {` ${pages}`}
            </span>
          </p>
          <p>{count} items total</p>
          <Link
            prefetch
            href={{
              pathname: 'shop',
              query: { page: page + 1 },
            }}
          >
            <a className="next" aria-disabled={page >= pages}>Next →</a>
          </Link>
        </PaginationStyles>
      )
    }}
  </Query>
)

export default Pagination;
export { PAGINATION_QUERY };