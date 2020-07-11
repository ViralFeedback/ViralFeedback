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

export type UserInfoInput = {
  display_name?: Maybe<Scalars['String']>;
};

export type Links = {
   __typename?: 'Links';
  html?: Maybe<Scalars['String']>;
  incontext?: Maybe<Scalars['String']>;
  json?: Maybe<Scalars['String']>;
};

export type LinksInput = {
  html?: Maybe<Scalars['String']>;
  incontext?: Maybe<Scalars['String']>;
  json?: Maybe<Scalars['String']>;
};

export type Document = {
   __typename?: 'Document';
  title?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DocumentInput = {
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

export type SelectorInput = {
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

export type TargetInput = {
  source?: Maybe<Scalars['String']>;
  selector?: Maybe<Array<Maybe<SelectorInput>>>;
};

export type Permissions = {
   __typename?: 'Permissions';
  delete?: Maybe<Array<Maybe<Scalars['String']>>>;
  update?: Maybe<Array<Maybe<Scalars['String']>>>;
  admin?: Maybe<Array<Maybe<Scalars['String']>>>;
  read?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type PermissionsInput = {
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
  references?: Maybe<Array<Maybe<Scalars['String']>>>;
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
  annotation?: Maybe<Annotation>;
};


export type QueryAnnotationsArgs = {
  _separate_replies?: Maybe<Scalars['Boolean']>;
  any?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['String']>;
  quote?: Maybe<Scalars['String']>;
  references?: Maybe<Scalars['String']>;
  search_after?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  text?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
  wildcard_uri?: Maybe<Scalars['String']>;
};


export type QueryAnnotationArgs = {
  id?: Maybe<Scalars['String']>;
};

export type Mutation = {
   __typename?: 'Mutation';
  createAnnotation?: Maybe<Annotation>;
};


export type MutationCreateAnnotationArgs = {
  id?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['String']>;
  flagged?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_info?: Maybe<UserInfoInput>;
  links?: Maybe<LinksInput>;
  document?: Maybe<DocumentInput>;
  target?: Maybe<Array<Maybe<TargetInput>>>;
  permissions?: Maybe<PermissionsInput>;
  references?: Maybe<Array<Maybe<Scalars['String']>>>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AnnotationsQueryVariables = {
  _separate_replies?: Maybe<Scalars['Boolean']>;
  any?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['String']>;
  quote?: Maybe<Scalars['String']>;
  references?: Maybe<Scalars['String']>;
  search_after?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
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
      & Pick<Annotation, 'created' | 'updated' | 'text' | 'user' | 'uri' | 'references' | 'tags'>
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

export type CreateAnnotationMutationVariables = {
  id?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['String']>;
  flagged?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_info?: Maybe<UserInfoInput>;
  links?: Maybe<LinksInput>;
  document?: Maybe<DocumentInput>;
  target?: Maybe<Array<Maybe<TargetInput>>>;
  permissions?: Maybe<PermissionsInput>;
  references?: Maybe<Array<Maybe<Scalars['String']>>>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type CreateAnnotationMutation = (
  { __typename?: 'Mutation' }
  & { createAnnotation?: Maybe<(
    { __typename?: 'Annotation' }
    & Pick<Annotation, 'id'>
  )> }
);


export const AnnotationsDocument = gql`
    query Annotations($_separate_replies: Boolean, $any: String, $group: String, $limit: Int, $offset: Int, $order: String, $quote: String, $references: String, $search_after: String, $sort: String, $tag: String, $tags: [String], $text: String, $uri: String, $user: String, $wildcard_uri: String) {
  annotations(_separate_replies: $_separate_replies, any: $any, group: $group, limit: $limit, offset: $offset, order: $order, quote: $quote, references: $references, search_after: $search_after, sort: $sort, tag: $tag, tags: $tags, text: $text, uri: $uri, user: $user, wildcard_uri: $wildcard_uri) {
    total
    rows {
      created
      updated
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
      references
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
 *      _separate_replies: // value for '_separate_replies'
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
export const CreateAnnotationDocument = gql`
    mutation CreateAnnotation($id: String, $created: String, $updated: String, $user: String, $uri: String, $text: String, $group: String, $flagged: Boolean, $hidden: Boolean, $user_info: UserInfoInput, $links: LinksInput, $document: DocumentInput, $target: [TargetInput], $permissions: PermissionsInput, $references: [String], $tags: [String]) {
  createAnnotation(id: $id, created: $created, updated: $updated, user: $user, uri: $uri, text: $text, group: $group, flagged: $flagged, hidden: $hidden, user_info: $user_info, links: $links, document: $document, target: $target, permissions: $permissions, references: $references, tags: $tags) {
    id
  }
}
    `;
export type CreateAnnotationMutationFn = ApolloReactCommon.MutationFunction<CreateAnnotationMutation, CreateAnnotationMutationVariables>;

/**
 * __useCreateAnnotationMutation__
 *
 * To run a mutation, you first call `useCreateAnnotationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAnnotationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAnnotationMutation, { data, loading, error }] = useCreateAnnotationMutation({
 *   variables: {
 *      id: // value for 'id'
 *      created: // value for 'created'
 *      updated: // value for 'updated'
 *      user: // value for 'user'
 *      uri: // value for 'uri'
 *      text: // value for 'text'
 *      group: // value for 'group'
 *      flagged: // value for 'flagged'
 *      hidden: // value for 'hidden'
 *      user_info: // value for 'user_info'
 *      links: // value for 'links'
 *      document: // value for 'document'
 *      target: // value for 'target'
 *      permissions: // value for 'permissions'
 *      references: // value for 'references'
 *      tags: // value for 'tags'
 *   },
 * });
 */
export function useCreateAnnotationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateAnnotationMutation, CreateAnnotationMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateAnnotationMutation, CreateAnnotationMutationVariables>(CreateAnnotationDocument, baseOptions);
      }
export type CreateAnnotationMutationHookResult = ReturnType<typeof useCreateAnnotationMutation>;
export type CreateAnnotationMutationResult = ApolloReactCommon.MutationResult<CreateAnnotationMutation>;
export type CreateAnnotationMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateAnnotationMutation, CreateAnnotationMutationVariables>;