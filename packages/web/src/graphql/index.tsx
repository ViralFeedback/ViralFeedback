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

export type Query = {
   __typename?: 'Query';
  annotations?: Maybe<ApiResponse>;
};

export type AnnotationsQueryVariables = {};


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
    query Annotations {
  annotations {
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