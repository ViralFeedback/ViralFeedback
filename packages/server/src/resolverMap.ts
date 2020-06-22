import { IResolvers } from 'graphql-tools';
import { ApiResponse } from './graphql';

const resolverMap: IResolvers = {
    Query: {
        async annotations(_: void, args: void, ctx: any): Promise<ApiResponse> {
            return await ctx.dataSources.HypothesisAPI.getAnnotations(args);
        }
    }
};

export default resolverMap;
