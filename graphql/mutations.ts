/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSailingEvent = /* GraphQL */ `
  mutation CreateSailingEvent(
    $input: CreateSailingEventInput!
    $condition: ModelSailingEventConditionInput
  ) {
    createSailingEvent(input: $input, condition: $condition) {
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
export const updateSailingEvent = /* GraphQL */ `
  mutation UpdateSailingEvent(
    $input: UpdateSailingEventInput!
    $condition: ModelSailingEventConditionInput
  ) {
    updateSailingEvent(input: $input, condition: $condition) {
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
export const deleteSailingEvent = /* GraphQL */ `
  mutation DeleteSailingEvent(
    $input: DeleteSailingEventInput!
    $condition: ModelSailingEventConditionInput
  ) {
    deleteSailingEvent(input: $input, condition: $condition) {
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
export const createSailingOrganization = /* GraphQL */ `
  mutation CreateSailingOrganization(
    $input: CreateSailingOrganizationInput!
    $condition: ModelSailingOrganizationConditionInput
  ) {
    createSailingOrganization(input: $input, condition: $condition) {
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
export const updateSailingOrganization = /* GraphQL */ `
  mutation UpdateSailingOrganization(
    $input: UpdateSailingOrganizationInput!
    $condition: ModelSailingOrganizationConditionInput
  ) {
    updateSailingOrganization(input: $input, condition: $condition) {
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
export const deleteSailingOrganization = /* GraphQL */ `
  mutation DeleteSailingOrganization(
    $input: DeleteSailingOrganizationInput!
    $condition: ModelSailingOrganizationConditionInput
  ) {
    deleteSailingOrganization(input: $input, condition: $condition) {
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
