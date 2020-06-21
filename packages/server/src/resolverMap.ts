import { IResolvers } from 'graphql-tools';

const resolverMap: IResolvers = {
    Query: {
        anotations(_: void, args: void, ctx: any): string {
            console.log(ctx);
            return `👋 Hello world! 👋`;
        }
    }
};

export default resolverMap;
