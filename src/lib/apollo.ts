import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oenfze21a101z7gyhq6imy/master',
    cache: new InMemoryCache()
})