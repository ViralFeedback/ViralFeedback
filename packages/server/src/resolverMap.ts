import { IResolvers } from 'graphql-tools';
import { ApiResponse } from './graphql';

const resolverMap: IResolvers = {
    Query: {
        async annotation(_: void, args: void, ctx: any): Promise<any> {
            return await ctx.dataSources.HypothesisAPI.getAnnotation(args);
        },
        async annotations(_: void, args: void, ctx: any): Promise<ApiResponse> {
            return await ctx.dataSources.HypothesisAPI.getAnnotations(args);
        }
    },
    Mutation: {
        async createAnnotation(_: void, args: void, ctx: any): Promise<any> {
            return await ctx.dataSources.HypothesisAPI.createAnnotation(args);
        }
    }
};

export default resolverMap;
