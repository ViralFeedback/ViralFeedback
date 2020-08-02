import { IResolvers } from 'graphql-tools';
import { ApiResponse } from './graphql';

const resolverMap: IResolvers = {
    Query: {
        async annotation(_: void, args: void, ctx: any): Promise<any> {
            return await ctx.dataSources.HypothesisAPI.getAnnotation(args);
        },
        async annotations(_: void, args: void, ctx: any): Promise<ApiResponse> {
            return await ctx.dataSources.HypothesisAPI.getAnnotations(args);
        },
        async jobs(_: void, args: void, ctx: any): Promise<any> {
            return await ctx.dataSources.CMS_API.getJobs(args);
        },
        async post(_: void, args: void, ctx: any): Promise<any> {
            return await ctx.dataSources.CMS_API.getPost(args);
        },
        async posts(_: void, args: void, ctx: any): Promise<ApiResponse> {
            return await ctx.dataSources.CMS_API.getPosts(args);
        }
    },
    Mutation: {
        async createAnnotation(_: void, args: void, ctx: any): Promise<any> {
            return await ctx.dataSources.HypothesisAPI.createAnnotation(args);
        },
        async submitContactForm(_: void, args: void, ctx: any): Promise<any> {
            return await ctx.dataSources.CMS_API.submitContactForm(args);
        }
    }
};

export default resolverMap;
