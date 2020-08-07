import { IResolvers } from 'graphql-tools';
import { ApiResponse } from './graphql';
import axios from 'axios';

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
        async submitContactForm(_: void, args: any, ctx: any): Promise<any> {
            // Send slack notification
            // TODO remove console.log
            console.log(process.env.SLACK_WEBHOOK);
            if (process.env.SLACK_WEBHOOK) {
                axios
                    .post(process.env.SLACK_WEBHOOK, {
                        text: `NEW CONTACT FORM SUBMISSION: ${args.email} -- ${args.message}`
                    })
                    .then((res) => {
                        console.log(
                            'Contact form submitted, slack channel notified'
                        );
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }

            return await ctx.dataSources.CMS_API.submitContactForm(args);
        }
    }
};

export default resolverMap;
