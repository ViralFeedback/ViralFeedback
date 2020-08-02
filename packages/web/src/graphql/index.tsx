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
  DateTime: any;
  JSON: any;
};



/**
 * ##
 *  Hypothes.is API
 * ##
 */
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

export type Document = {
   __typename?: 'Document';
  title?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DocumentInput = {
  title?: Maybe<Array<Maybe<Scalars['String']>>>;
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

export type UserInfo = {
   __typename?: 'UserInfo';
  display_name?: Maybe<Scalars['String']>;
};

export type UserInfoInput = {
  display_name?: Maybe<Scalars['String']>;
};

/**
 * ##
 *  CMS
 * ##
 */
export type ContactForm = {
   __typename?: 'ContactForm';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  Email?: Maybe<Scalars['String']>;
  Message?: Maybe<Scalars['String']>;
};

export type Post = {
   __typename?: 'Post';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  content?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  image?: Maybe<UploadFile>;
  categories?: Maybe<Array<Maybe<Category>>>;
  published?: Maybe<Scalars['Boolean']>;
};

export type Category = {
   __typename?: 'Category';
  name?: Maybe<Scalars['String']>;
};

export type Job = {
   __typename?: 'Job';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type UploadFile = {
   __typename?: 'UploadFile';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
};

export type Query = {
   __typename?: 'Query';
  annotations?: Maybe<ApiResponse>;
  annotation?: Maybe<Annotation>;
  jobs?: Maybe<Array<Maybe<Job>>>;
  post?: Maybe<Post>;
  posts?: Maybe<Array<Maybe<Post>>>;
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


export type QueryPostArgs = {
  id?: Maybe<Scalars['String']>;
};

export type Mutation = {
   __typename?: 'Mutation';
  createAnnotation?: Maybe<Annotation>;
  submitContactForm?: Maybe<ContactForm>;
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


export type MutationSubmitContactFormArgs = {
  email?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
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
      & Pick<Annotation, 'id' | 'created' | 'updated' | 'text' | 'user' | 'uri' | 'references' | 'tags'>
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

export type AnnotationQueryVariables = {
  id?: Maybe<Scalars['String']>;
};


export type AnnotationQuery = (
  { __typename?: 'Query' }
  & { annotation?: Maybe<(
    { __typename?: 'Annotation' }
    & Pick<Annotation, 'id' | 'created' | 'updated' | 'text' | 'user' | 'uri' | 'references' | 'tags'>
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
  )> }
);

export type PostQueryVariables = {
  id?: Maybe<Scalars['String']>;
};


export type PostQuery = (
  { __typename?: 'Query' }
  & { post?: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'title' | 'content' | 'id' | 'created_at' | 'updated_at' | 'published'>
    & { image?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'url'>
    )>, categories?: Maybe<Array<Maybe<(
      { __typename?: 'Category' }
      & Pick<Category, 'name'>
    )>>> }
  )> }
);

export type PostsQueryVariables = {};


export type PostsQuery = (
  { __typename?: 'Query' }
  & { posts?: Maybe<Array<Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'title' | 'content' | 'id' | 'created_at' | 'updated_at' | 'published'>
    & { image?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'url'>
    )>, categories?: Maybe<Array<Maybe<(
      { __typename?: 'Category' }
      & Pick<Category, 'name'>
    )>>> }
  )>>> }
);

export type JobsQueryVariables = {};


export type JobsQuery = (
  { __typename?: 'Query' }
  & { jobs?: Maybe<Array<Maybe<(
    { __typename?: 'Job' }
    & Pick<Job, 'title' | 'description'>
  )>>> }
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

export type SubmitContactFormMutationVariables = {
  email?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};


export type SubmitContactFormMutation = (
  { __typename?: 'Mutation' }
  & { submitContactForm?: Maybe<(
    { __typename?: 'ContactForm' }
    & Pick<ContactForm, 'id'>
  )> }
);


export const AnnotationsDocument = gql`
    query Annotations($_separate_replies: Boolean, $any: String, $group: String, $limit: Int, $offset: Int, $order: String, $quote: String, $references: String, $search_after: String, $sort: String, $tag: String, $tags: [String], $text: String, $uri: String, $user: String, $wildcard_uri: String) {
  annotations(_separate_replies: $_separate_replies, any: $any, group: $group, limit: $limit, offset: $offset, order: $order, quote: $quote, references: $references, search_after: $search_after, sort: $sort, tag: $tag, tags: $tags, text: $text, uri: $uri, user: $user, wildcard_uri: $wildcard_uri) {
    total
    rows {
      id
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
export const AnnotationDocument = gql`
    query Annotation($id: String) {
  annotation(id: $id) {
    id
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
    `;

/**
 * __useAnnotationQuery__
 *
 * To run a query within a React component, call `useAnnotationQuery` and pass it any options that fit your needs.
 * When your component renders, `useAnnotationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAnnotationQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAnnotationQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AnnotationQuery, AnnotationQueryVariables>) {
        return ApolloReactHooks.useQuery<AnnotationQuery, AnnotationQueryVariables>(AnnotationDocument, baseOptions);
      }
export function useAnnotationLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AnnotationQuery, AnnotationQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AnnotationQuery, AnnotationQueryVariables>(AnnotationDocument, baseOptions);
        }
export type AnnotationQueryHookResult = ReturnType<typeof useAnnotationQuery>;
export type AnnotationLazyQueryHookResult = ReturnType<typeof useAnnotationLazyQuery>;
export type AnnotationQueryResult = ApolloReactCommon.QueryResult<AnnotationQuery, AnnotationQueryVariables>;
export const PostDocument = gql`
    query Post($id: String) {
  post(id: $id) {
    title
    content
    image {
      url
    }
    id
    created_at
    updated_at
    categories {
      name
    }
    published
  }
}
    `;

/**
 * __usePostQuery__
 *
 * To run a query within a React component, call `usePostQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePostQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PostQuery, PostQueryVariables>) {
        return ApolloReactHooks.useQuery<PostQuery, PostQueryVariables>(PostDocument, baseOptions);
      }
export function usePostLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PostQuery, PostQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PostQuery, PostQueryVariables>(PostDocument, baseOptions);
        }
export type PostQueryHookResult = ReturnType<typeof usePostQuery>;
export type PostLazyQueryHookResult = ReturnType<typeof usePostLazyQuery>;
export type PostQueryResult = ApolloReactCommon.QueryResult<PostQuery, PostQueryVariables>;
export const PostsDocument = gql`
    query Posts {
  posts {
    title
    content
    image {
      url
    }
    id
    created_at
    updated_at
    categories {
      name
    }
    published
  }
}
    `;

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PostsQuery, PostsQueryVariables>) {
        return ApolloReactHooks.useQuery<PostsQuery, PostsQueryVariables>(PostsDocument, baseOptions);
      }
export function usePostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PostsQuery, PostsQueryVariables>(PostsDocument, baseOptions);
        }
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsQueryResult = ApolloReactCommon.QueryResult<PostsQuery, PostsQueryVariables>;
export const JobsDocument = gql`
    query Jobs {
  jobs {
    title
    description
  }
}
    `;

/**
 * __useJobsQuery__
 *
 * To run a query within a React component, call `useJobsQuery` and pass it any options that fit your needs.
 * When your component renders, `useJobsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobsQuery({
 *   variables: {
 *   },
 * });
 */
export function useJobsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<JobsQuery, JobsQueryVariables>) {
        return ApolloReactHooks.useQuery<JobsQuery, JobsQueryVariables>(JobsDocument, baseOptions);
      }
export function useJobsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<JobsQuery, JobsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<JobsQuery, JobsQueryVariables>(JobsDocument, baseOptions);
        }
export type JobsQueryHookResult = ReturnType<typeof useJobsQuery>;
export type JobsLazyQueryHookResult = ReturnType<typeof useJobsLazyQuery>;
export type JobsQueryResult = ApolloReactCommon.QueryResult<JobsQuery, JobsQueryVariables>;
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
export const SubmitContactFormDocument = gql`
    mutation SubmitContactForm($email: String, $message: String) {
  submitContactForm(email: $email, message: $message) {
    id
  }
}
    `;
export type SubmitContactFormMutationFn = ApolloReactCommon.MutationFunction<SubmitContactFormMutation, SubmitContactFormMutationVariables>;

/**
 * __useSubmitContactFormMutation__
 *
 * To run a mutation, you first call `useSubmitContactFormMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitContactFormMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitContactFormMutation, { data, loading, error }] = useSubmitContactFormMutation({
 *   variables: {
 *      email: // value for 'email'
 *      message: // value for 'message'
 *   },
 * });
 */
export function useSubmitContactFormMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SubmitContactFormMutation, SubmitContactFormMutationVariables>) {
        return ApolloReactHooks.useMutation<SubmitContactFormMutation, SubmitContactFormMutationVariables>(SubmitContactFormDocument, baseOptions);
      }
export type SubmitContactFormMutationHookResult = ReturnType<typeof useSubmitContactFormMutation>;
export type SubmitContactFormMutationResult = ApolloReactCommon.MutationResult<SubmitContactFormMutation>;
export type SubmitContactFormMutationOptions = ApolloReactCommon.BaseMutationOptions<SubmitContactFormMutation, SubmitContactFormMutationVariables>;