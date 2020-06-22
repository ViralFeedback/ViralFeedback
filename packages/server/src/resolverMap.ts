import { IResolvers } from 'graphql-tools';

const resolverMap: IResolvers = {
    Query: {
        // TODO gql generate some return types
        async annotations(_: void, args: void, ctx: any): Promise<any> {
            return await ctx.dataSources.HypothesisAPI.getAnnotations(args);
        }
    }
};

export default resolverMap;
