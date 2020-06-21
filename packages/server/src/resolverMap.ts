import { IResolvers } from 'graphql-tools';

const resolverMap: IResolvers = {
    Query: {
        async annotations(_: void, args: void, ctx: any): Promise<any> {
            return await ctx.dataSources.HypothesisAPI.getAnnotations();
        }
    }
};

export default resolverMap;
