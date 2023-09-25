/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSailingEvent = /* GraphQL */ `
  query GetSailingEvent($id: ID!) {
    getSailingEvent(id: $id) {
      id
      name
      link
      date
      description
      series
      dayOfWeek
      type
      hostClubs {
        nextToken
        startedAt
        __typename
      }
      weeklyEvent
      startDate
      endDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listSailingEvents = /* GraphQL */ `
  query ListSailingEvents(
    $filter: ModelSailingEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSailingEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        link
        date
        description
        series
        dayOfWeek
        type
        weeklyEvent
        startDate
        endDate
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncSailingEvents = /* GraphQL */ `
  query SyncSailingEvents(
    $filter: ModelSailingEventFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSailingEvents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        link
        date
        description
        series
        dayOfWeek
        type
        weeklyEvent
        startDate
        endDate
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getSailingOrganization = /* GraphQL */ `
  query GetSailingOrganization($id: ID!) {
    getSailingOrganization(id: $id) {
      id
      name
      website
      fleets
      latLong
      eventsID
      email
      Facebook
      Twitter
      street
      city
      phone
      zip
      state
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listSailingOrganizations = /* GraphQL */ `
  query ListSailingOrganizations(
    $filter: ModelSailingOrganizationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSailingOrganizations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        website
        fleets
        latLong
        eventsID
        email
        Facebook
        Twitter
        street
        city
        phone
        zip
        state
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncSailingOrganizations = /* GraphQL */ `
  query SyncSailingOrganizations(
    $filter: ModelSailingOrganizationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSailingOrganizations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        website
        fleets
        latLong
        eventsID
        email
        Facebook
        Twitter
        street
        city
        phone
        zip
        state
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const sailingOrganizationsByEventsID = /* GraphQL */ `
  query SailingOrganizationsByEventsID(
    $eventsID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSailingOrganizationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sailingOrganizationsByEventsID(
      eventsID: $eventsID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        website
        fleets
        latLong
        eventsID
        email
        Facebook
        Twitter
        street
        city
        phone
        zip
        state
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
