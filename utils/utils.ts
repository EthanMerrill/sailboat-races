import { SailingOrganization } from "@/src/models";
import { DataStore } from "aws-amplify";
import { listSailingOrganizations } from "@/graphql/queries";
import { API } from 'aws-amplify';
// import * as queries from './graphql/queries';
import { GraphQLQuery } from '@aws-amplify/api';
import { ListSailingOrganizationsQuery } from "@/types/API";

export function queryClubs() {
    // Simple query
    try {
        const clubs = DataStore.query(SailingOrganization);

        return clubs
    } catch (error) {
        console.log('Error retrieving organizations', error);
        throw new Error('Failed to fetch data')
        return []
    }
}