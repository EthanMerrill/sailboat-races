/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSailingEvent = /* GraphQL */ `
  subscription OnCreateSailingEvent(
    $filter: ModelSubscriptionSailingEventFilterInput
  ) {
    onCreateSailingEvent(filter: $filter) {
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
export const onUpdateSailingEvent = /* GraphQL */ `
  subscription OnUpdateSailingEvent(
    $filter: ModelSubscriptionSailingEventFilterInput
  ) {
    onUpdateSailingEvent(filter: $filter) {
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
export const onDeleteSailingEvent = /* GraphQL */ `
  subscription OnDeleteSailingEvent(
    $filter: ModelSubscriptionSailingEventFilterInput
  ) {
    onDeleteSailingEvent(filter: $filter) {
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
export const onCreateSailingOrganization = /* GraphQL */ `
  subscription OnCreateSailingOrganization(
    $filter: ModelSubscriptionSailingOrganizationFilterInput
  ) {
    onCreateSailingOrganization(filter: $filter) {
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
export const onUpdateSailingOrganization = /* GraphQL */ `
  subscription OnUpdateSailingOrganization(
    $filter: ModelSubscriptionSailingOrganizationFilterInput
  ) {
    onUpdateSailingOrganization(filter: $filter) {
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
export const onDeleteSailingOrganization = /* GraphQL */ `
  subscription OnDeleteSailingOrganization(
    $filter: ModelSubscriptionSailingOrganizationFilterInput
  ) {
    onDeleteSailingOrganization(filter: $filter) {
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
