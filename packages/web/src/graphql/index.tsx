import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type UserInfo = {
   __typename?: 'UserInfo';
  display_name?: Maybe<Scalars['String']>;
};

export type Links = {
   __typename?: 'Links';
  html?: Maybe<Scalars['String']>;
  incontext?: Maybe<Scalars['String']>;
  json?: Maybe<Scalars['String']>;
};

export type Document = {
   __typename?: 'Document';
  title?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Selector = {
   __typename?: 'Selector';
  type?: Maybe<Scalars['String']>;
  exact?: Maybe<Scalars['String']>;
  endOffset?: Maybe<Scalars['Int']>;
  startOffset?: Maybe<Scalars['Int']>;
  endContainer?: Maybe<Scalars['String']>;
  startContainer?: Maybe<Scalars['String']>;
};

export type Target = {
   __typename?: 'Target';
  source?: Maybe<Scalars['String']>;
  selector?: Maybe<Array<Maybe<Selector>>>;
};

export type Permissions = {
   __typename?: 'Permissions';
  delete?: Maybe<Array<Maybe<Scalars['String']>>>;
  update?: Maybe<Array<Maybe<Scalars['String']>>>;
  admin?: Maybe<Array<Maybe<Scalars['String']>>>;
  read?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Annotation = {
   __typename?: 'Annotation';
  id?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['String']>;
  flagged?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_info?: Maybe<UserInfo>;
  links?: Maybe<Links>;
  document?: Maybe<Document>;
  target?: Maybe<Array<Maybe<Target>>>;
  permissions?: Maybe<Permissions>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ApiResponse = {
   __typename?: 'APIResponse';
  total?: Maybe<Scalars['Int']>;
  rows?: Maybe<Array<Annotation>>;
};

export enum Sort {
  Created = 'created',
  Updated = 'updated',
  Group = 'group',
  Id = 'id',
  User = 'user'
}

export enum Order {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
   __typename?: 'Query';
  annotations?: Maybe<ApiResponse>;
};


export type QueryAnnotationsArgs = {
  any?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Order>;
  quote?: Maybe<Scalars['String']>;
  references?: Maybe<Scalars['String']>;
  search_after?: Maybe<Scalars['String']>;
  sort?: Maybe<Sort>;
  tag?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  text?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
  wildcard_uri?: Maybe<Scalars['String']>;
};

export type AnnotationsQueryVariables = {
  any?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Order>;
  quote?: Maybe<Scalars['String']>;
  references?: Maybe<Scalars['String']>;
  search_after?: Maybe<Scalars['String']>;
  sort?: Maybe<Sort>;
  tag?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  text?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
  wildcard_uri?: Maybe<Scalars['String']>;
};


export type AnnotationsQuery = (
  { __typename?: 'Query' }
  & { annotations?: Maybe<(
    { __typename?: 'APIResponse' }
    & Pick<ApiResponse, 'total'>
    & { rows?: Maybe<Array<(
      { __typename?: 'Annotation' }
      & Pick<Annotation, 'text' | 'user' | 'uri' | 'tags'>
      & { user_info?: Maybe<(
        { __typename?: 'UserInfo' }
        & Pick<UserInfo, 'display_name'>
      )>, links?: Maybe<(
        { __typename?: 'Links' }
        & Pick<Links, 'html' | 'incontext'>
      )>, target?: Maybe<Array<Maybe<(
        { __typename?: 'Target' }
        & Pick<Target, 'source'>
        & { selector?: Maybe<Array<Maybe<(
          { __typename?: 'Selector' }
          & Pick<Selector, 'exact'>
        )>>> }
      )>>> }
    )>> }
  )> }
);


export const AnnotationsDocument = gql`
    query Annotations($any: String, $group: String, $limit: Int, $offset: Int, $order: Order, $quote: String, $references: String, $search_after: String, $sort: Sort, $tag: String, $tags: [String], $text: String, $uri: String, $user: String, $wildcard_uri: String) {
  annotations(any: $any, group: $group, limit: $limit, offset: $offset, order: $order, quote: $quote, references: $references, search_after: $search_after, sort: $sort, tag: $tag, tags: $tags, text: $text, uri: $uri, user: $user, wildcard_uri: $wildcard_uri) {
    total
    rows {
      text
      user
      user_info {
        display_name
      }
      uri
      links {
        html
        incontext
      }
      tags
      target {
        source
        selector {
          exact
        }
      }
    }
  }
}
    `;

/**
 * __useAnnotationsQuery__
 *
 * To run a query within a React component, call `useAnnotationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAnnotationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAnnotationsQuery({
 *   variables: {
 *      any: // value for 'any'
 *      group: // value for 'group'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      order: // value for 'order'
 *      quote: // value for 'quote'
 *      references: // value for 'references'
 *      search_after: // value for 'search_after'
 *      sort: // value for 'sort'
 *      tag: // value for 'tag'
 *      tags: // value for 'tags'
 *      text: // value for 'text'
 *      uri: // value for 'uri'
 *      user: // value for 'user'
 *      wildcard_uri: // value for 'wildcard_uri'
 *   },
 * });
 */
export function useAnnotationsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AnnotationsQuery, AnnotationsQueryVariables>) {
        return ApolloReactHooks.useQuery<AnnotationsQuery, AnnotationsQueryVariables>(AnnotationsDocument, baseOptions);
      }
export function useAnnotationsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AnnotationsQuery, AnnotationsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AnnotationsQuery, AnnotationsQueryVariables>(AnnotationsDocument, baseOptions);
        }
export type AnnotationsQueryHookResult = ReturnType<typeof useAnnotationsQuery>;
export type AnnotationsLazyQueryHookResult = ReturnType<typeof useAnnotationsLazyQuery>;
export type AnnotationsQueryResult = ApolloReactCommon.QueryResult<AnnotationsQuery, AnnotationsQueryVariables>;