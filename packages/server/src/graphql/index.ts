export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
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
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
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
