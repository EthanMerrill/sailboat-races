/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSailingEventInput = {
  id?: string | null,
  name: string,
  link?: string | null,
  date?: string | null,
  description?: string | null,
  series?: boolean | null,
  dayOfWeek?: DayOfTheWeek | null,
  type?: EventType | null,
  weeklyEvent?: boolean | null,
  startDate?: string | null,
  endDate?: string | null,
  _version?: number | null,
};

export enum DayOfTheWeek {
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY",
}


export enum EventType {
  DISTANCE_RACE = "DISTANCE_RACE",
  PURSUIT_RACE = "PURSUIT_RACE",
  AROUND_CANS = "AROUND_CANS",
}


export type ModelSailingEventConditionInput = {
  name?: ModelStringInput | null,
  link?: ModelStringInput | null,
  date?: ModelStringInput | null,
  description?: ModelStringInput | null,
  series?: ModelBooleanInput | null,
  dayOfWeek?: ModelDayOfTheWeekInput | null,
  type?: ModelEventTypeInput | null,
  weeklyEvent?: ModelBooleanInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  and?: Array< ModelSailingEventConditionInput | null > | null,
  or?: Array< ModelSailingEventConditionInput | null > | null,
  not?: ModelSailingEventConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelDayOfTheWeekInput = {
  eq?: DayOfTheWeek | null,
  ne?: DayOfTheWeek | null,
};

export type ModelEventTypeInput = {
  eq?: EventType | null,
  ne?: EventType | null,
};

export type SailingEvent = {
  __typename: "SailingEvent",
  id: string,
  name: string,
  link?: string | null,
  date?: string | null,
  description?: string | null,
  series?: boolean | null,
  dayOfWeek?: DayOfTheWeek | null,
  type?: EventType | null,
  hostClubs?: ModelSailingOrganizationConnection | null,
  weeklyEvent?: boolean | null,
  startDate?: string | null,
  endDate?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelSailingOrganizationConnection = {
  __typename: "ModelSailingOrganizationConnection",
  items:  Array<SailingOrganization | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type SailingOrganization = {
  __typename: "SailingOrganization",
  id: string,
  name?: string | null,
  website?: string | null,
  fleets?: string | null,
  latLong?: string | null,
  eventsID?: string | null,
  email?: string | null,
  Facebook?: string | null,
  Twitter?: string | null,
  street?: string | null,
  city?: string | null,
  phone?: string | null,
  zip?: number | null,
  state?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateSailingEventInput = {
  id: string,
  name?: string | null,
  link?: string | null,
  date?: string | null,
  description?: string | null,
  series?: boolean | null,
  dayOfWeek?: DayOfTheWeek | null,
  type?: EventType | null,
  weeklyEvent?: boolean | null,
  startDate?: string | null,
  endDate?: string | null,
  _version?: number | null,
};

export type DeleteSailingEventInput = {
  id: string,
  _version?: number | null,
};

export type CreateSailingOrganizationInput = {
  id?: string | null,
  name?: string | null,
  website?: string | null,
  fleets?: string | null,
  latLong?: string | null,
  eventsID?: string | null,
  email?: string | null,
  Facebook?: string | null,
  Twitter?: string | null,
  street?: string | null,
  city?: string | null,
  phone?: string | null,
  zip?: number | null,
  state?: string | null,
  _version?: number | null,
};

export type ModelSailingOrganizationConditionInput = {
  name?: ModelStringInput | null,
  website?: ModelStringInput | null,
  fleets?: ModelStringInput | null,
  latLong?: ModelStringInput | null,
  eventsID?: ModelIDInput | null,
  email?: ModelStringInput | null,
  Facebook?: ModelStringInput | null,
  Twitter?: ModelStringInput | null,
  street?: ModelStringInput | null,
  city?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  zip?: ModelIntInput | null,
  state?: ModelStringInput | null,
  and?: Array< ModelSailingOrganizationConditionInput | null > | null,
  or?: Array< ModelSailingOrganizationConditionInput | null > | null,
  not?: ModelSailingOrganizationConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateSailingOrganizationInput = {
  id: string,
  name?: string | null,
  website?: string | null,
  fleets?: string | null,
  latLong?: string | null,
  eventsID?: string | null,
  email?: string | null,
  Facebook?: string | null,
  Twitter?: string | null,
  street?: string | null,
  city?: string | null,
  phone?: string | null,
  zip?: number | null,
  state?: string | null,
  _version?: number | null,
};

export type DeleteSailingOrganizationInput = {
  id: string,
  _version?: number | null,
};

export type ModelSailingEventFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  link?: ModelStringInput | null,
  date?: ModelStringInput | null,
  description?: ModelStringInput | null,
  series?: ModelBooleanInput | null,
  dayOfWeek?: ModelDayOfTheWeekInput | null,
  type?: ModelEventTypeInput | null,
  weeklyEvent?: ModelBooleanInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  and?: Array< ModelSailingEventFilterInput | null > | null,
  or?: Array< ModelSailingEventFilterInput | null > | null,
  not?: ModelSailingEventFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSailingEventConnection = {
  __typename: "ModelSailingEventConnection",
  items:  Array<SailingEvent | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSailingOrganizationFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  website?: ModelStringInput | null,
  fleets?: ModelStringInput | null,
  latLong?: ModelStringInput | null,
  eventsID?: ModelIDInput | null,
  email?: ModelStringInput | null,
  Facebook?: ModelStringInput | null,
  Twitter?: ModelStringInput | null,
  street?: ModelStringInput | null,
  city?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  zip?: ModelIntInput | null,
  state?: ModelStringInput | null,
  and?: Array< ModelSailingOrganizationFilterInput | null > | null,
  or?: Array< ModelSailingOrganizationFilterInput | null > | null,
  not?: ModelSailingOrganizationFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionSailingEventFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  link?: ModelSubscriptionStringInput | null,
  date?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  series?: ModelSubscriptionBooleanInput | null,
  dayOfWeek?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  weeklyEvent?: ModelSubscriptionBooleanInput | null,
  startDate?: ModelSubscriptionStringInput | null,
  endDate?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSailingEventFilterInput | null > | null,
  or?: Array< ModelSubscriptionSailingEventFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionSailingOrganizationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  website?: ModelSubscriptionStringInput | null,
  fleets?: ModelSubscriptionStringInput | null,
  latLong?: ModelSubscriptionStringInput | null,
  eventsID?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  Facebook?: ModelSubscriptionStringInput | null,
  Twitter?: ModelSubscriptionStringInput | null,
  street?: ModelSubscriptionStringInput | null,
  city?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  zip?: ModelSubscriptionIntInput | null,
  state?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSailingOrganizationFilterInput | null > | null,
  or?: Array< ModelSubscriptionSailingOrganizationFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateSailingEventMutationVariables = {
  input: CreateSailingEventInput,
  condition?: ModelSailingEventConditionInput | null,
};

export type CreateSailingEventMutation = {
  createSailingEvent?:  {
    __typename: "SailingEvent",
    id: string,
    name: string,
    link?: string | null,
    date?: string | null,
    description?: string | null,
    series?: boolean | null,
    dayOfWeek?: DayOfTheWeek | null,
    type?: EventType | null,
    hostClubs?:  {
      __typename: "ModelSailingOrganizationConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    weeklyEvent?: boolean | null,
    startDate?: string | null,
    endDate?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateSailingEventMutationVariables = {
  input: UpdateSailingEventInput,
  condition?: ModelSailingEventConditionInput | null,
};

export type UpdateSailingEventMutation = {
  updateSailingEvent?:  {
    __typename: "SailingEvent",
    id: string,
    name: string,
    link?: string | null,
    date?: string | null,
    description?: string | null,
    series?: boolean | null,
    dayOfWeek?: DayOfTheWeek | null,
    type?: EventType | null,
    hostClubs?:  {
      __typename: "ModelSailingOrganizationConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    weeklyEvent?: boolean | null,
    startDate?: string | null,
    endDate?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteSailingEventMutationVariables = {
  input: DeleteSailingEventInput,
  condition?: ModelSailingEventConditionInput | null,
};

export type DeleteSailingEventMutation = {
  deleteSailingEvent?:  {
    __typename: "SailingEvent",
    id: string,
    name: string,
    link?: string | null,
    date?: string | null,
    description?: string | null,
    series?: boolean | null,
    dayOfWeek?: DayOfTheWeek | null,
    type?: EventType | null,
    hostClubs?:  {
      __typename: "ModelSailingOrganizationConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    weeklyEvent?: boolean | null,
    startDate?: string | null,
    endDate?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateSailingOrganizationMutationVariables = {
  input: CreateSailingOrganizationInput,
  condition?: ModelSailingOrganizationConditionInput | null,
};

export type CreateSailingOrganizationMutation = {
  createSailingOrganization?:  {
    __typename: "SailingOrganization",
    id: string,
    name?: string | null,
    website?: string | null,
    fleets?: string | null,
    latLong?: string | null,
    eventsID?: string | null,
    email?: string | null,
    Facebook?: string | null,
    Twitter?: string | null,
    street?: string | null,
    city?: string | null,
    phone?: string | null,
    zip?: number | null,
    state?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateSailingOrganizationMutationVariables = {
  input: UpdateSailingOrganizationInput,
  condition?: ModelSailingOrganizationConditionInput | null,
};

export type UpdateSailingOrganizationMutation = {
  updateSailingOrganization?:  {
    __typename: "SailingOrganization",
    id: string,
    name?: string | null,
    website?: string | null,
    fleets?: string | null,
    latLong?: string | null,
    eventsID?: string | null,
    email?: string | null,
    Facebook?: string | null,
    Twitter?: string | null,
    street?: string | null,
    city?: string | null,
    phone?: string | null,
    zip?: number | null,
    state?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteSailingOrganizationMutationVariables = {
  input: DeleteSailingOrganizationInput,
  condition?: ModelSailingOrganizationConditionInput | null,
};

export type DeleteSailingOrganizationMutation = {
  deleteSailingOrganization?:  {
    __typename: "SailingOrganization",
    id: string,
    name?: string | null,
    website?: string | null,
    fleets?: string | null,
    latLong?: string | null,
    eventsID?: string | null,
    email?: string | null,
    Facebook?: string | null,
    Twitter?: string | null,
    street?: string | null,
    city?: string | null,
    phone?: string | null,
    zip?: number | null,
    state?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetSailingEventQueryVariables = {
  id: string,
};

export type GetSailingEventQuery = {
  getSailingEvent?:  {
    __typename: "SailingEvent",
    id: string,
    name: string,
    link?: string | null,
    date?: string | null,
    description?: string | null,
    series?: boolean | null,
    dayOfWeek?: DayOfTheWeek | null,
    type?: EventType | null,
    hostClubs?:  {
      __typename: "ModelSailingOrganizationConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    weeklyEvent?: boolean | null,
    startDate?: string | null,
    endDate?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListSailingEventsQueryVariables = {
  filter?: ModelSailingEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSailingEventsQuery = {
  listSailingEvents?:  {
    __typename: "ModelSailingEventConnection",
    items:  Array< {
      __typename: "SailingEvent",
      id: string,
      name: string,
      link?: string | null,
      date?: string | null,
      description?: string | null,
      series?: boolean | null,
      dayOfWeek?: DayOfTheWeek | null,
      type?: EventType | null,
      weeklyEvent?: boolean | null,
      startDate?: string | null,
      endDate?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSailingEventsQueryVariables = {
  filter?: ModelSailingEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSailingEventsQuery = {
  syncSailingEvents?:  {
    __typename: "ModelSailingEventConnection",
    items:  Array< {
      __typename: "SailingEvent",
      id: string,
      name: string,
      link?: string | null,
      date?: string | null,
      description?: string | null,
      series?: boolean | null,
      dayOfWeek?: DayOfTheWeek | null,
      type?: EventType | null,
      weeklyEvent?: boolean | null,
      startDate?: string | null,
      endDate?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetSailingOrganizationQueryVariables = {
  id: string,
};

export type GetSailingOrganizationQuery = {
  getSailingOrganization?:  {
    __typename: "SailingOrganization",
    id: string,
    name?: string | null,
    website?: string | null,
    fleets?: string | null,
    latLong?: string | null,
    eventsID?: string | null,
    email?: string | null,
    Facebook?: string | null,
    Twitter?: string | null,
    street?: string | null,
    city?: string | null,
    phone?: string | null,
    zip?: number | null,
    state?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListSailingOrganizationsQueryVariables = {
  filter?: ModelSailingOrganizationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSailingOrganizationsQuery = {
  listSailingOrganizations?:  {
    __typename: "ModelSailingOrganizationConnection",
    items:  Array< {
      __typename: "SailingOrganization",
      id: string,
      name?: string | null,
      website?: string | null,
      fleets?: string | null,
      latLong?: string | null,
      eventsID?: string | null,
      email?: string | null,
      Facebook?: string | null,
      Twitter?: string | null,
      street?: string | null,
      city?: string | null,
      phone?: string | null,
      zip?: number | null,
      state?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSailingOrganizationsQueryVariables = {
  filter?: ModelSailingOrganizationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSailingOrganizationsQuery = {
  syncSailingOrganizations?:  {
    __typename: "ModelSailingOrganizationConnection",
    items:  Array< {
      __typename: "SailingOrganization",
      id: string,
      name?: string | null,
      website?: string | null,
      fleets?: string | null,
      latLong?: string | null,
      eventsID?: string | null,
      email?: string | null,
      Facebook?: string | null,
      Twitter?: string | null,
      street?: string | null,
      city?: string | null,
      phone?: string | null,
      zip?: number | null,
      state?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SailingOrganizationsByEventsIDQueryVariables = {
  eventsID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSailingOrganizationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SailingOrganizationsByEventsIDQuery = {
  sailingOrganizationsByEventsID?:  {
    __typename: "ModelSailingOrganizationConnection",
    items:  Array< {
      __typename: "SailingOrganization",
      id: string,
      name?: string | null,
      website?: string | null,
      fleets?: string | null,
      latLong?: string | null,
      eventsID?: string | null,
      email?: string | null,
      Facebook?: string | null,
      Twitter?: string | null,
      street?: string | null,
      city?: string | null,
      phone?: string | null,
      zip?: number | null,
      state?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateSailingEventSubscriptionVariables = {
  filter?: ModelSubscriptionSailingEventFilterInput | null,
};

export type OnCreateSailingEventSubscription = {
  onCreateSailingEvent?:  {
    __typename: "SailingEvent",
    id: string,
    name: string,
    link?: string | null,
    date?: string | null,
    description?: string | null,
    series?: boolean | null,
    dayOfWeek?: DayOfTheWeek | null,
    type?: EventType | null,
    hostClubs?:  {
      __typename: "ModelSailingOrganizationConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    weeklyEvent?: boolean | null,
    startDate?: string | null,
    endDate?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateSailingEventSubscriptionVariables = {
  filter?: ModelSubscriptionSailingEventFilterInput | null,
};

export type OnUpdateSailingEventSubscription = {
  onUpdateSailingEvent?:  {
    __typename: "SailingEvent",
    id: string,
    name: string,
    link?: string | null,
    date?: string | null,
    description?: string | null,
    series?: boolean | null,
    dayOfWeek?: DayOfTheWeek | null,
    type?: EventType | null,
    hostClubs?:  {
      __typename: "ModelSailingOrganizationConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    weeklyEvent?: boolean | null,
    startDate?: string | null,
    endDate?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteSailingEventSubscriptionVariables = {
  filter?: ModelSubscriptionSailingEventFilterInput | null,
};

export type OnDeleteSailingEventSubscription = {
  onDeleteSailingEvent?:  {
    __typename: "SailingEvent",
    id: string,
    name: string,
    link?: string | null,
    date?: string | null,
    description?: string | null,
    series?: boolean | null,
    dayOfWeek?: DayOfTheWeek | null,
    type?: EventType | null,
    hostClubs?:  {
      __typename: "ModelSailingOrganizationConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    weeklyEvent?: boolean | null,
    startDate?: string | null,
    endDate?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateSailingOrganizationSubscriptionVariables = {
  filter?: ModelSubscriptionSailingOrganizationFilterInput | null,
};

export type OnCreateSailingOrganizationSubscription = {
  onCreateSailingOrganization?:  {
    __typename: "SailingOrganization",
    id: string,
    name?: string | null,
    website?: string | null,
    fleets?: string | null,
    latLong?: string | null,
    eventsID?: string | null,
    email?: string | null,
    Facebook?: string | null,
    Twitter?: string | null,
    street?: string | null,
    city?: string | null,
    phone?: string | null,
    zip?: number | null,
    state?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateSailingOrganizationSubscriptionVariables = {
  filter?: ModelSubscriptionSailingOrganizationFilterInput | null,
};

export type OnUpdateSailingOrganizationSubscription = {
  onUpdateSailingOrganization?:  {
    __typename: "SailingOrganization",
    id: string,
    name?: string | null,
    website?: string | null,
    fleets?: string | null,
    latLong?: string | null,
    eventsID?: string | null,
    email?: string | null,
    Facebook?: string | null,
    Twitter?: string | null,
    street?: string | null,
    city?: string | null,
    phone?: string | null,
    zip?: number | null,
    state?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteSailingOrganizationSubscriptionVariables = {
  filter?: ModelSubscriptionSailingOrganizationFilterInput | null,
};

export type OnDeleteSailingOrganizationSubscription = {
  onDeleteSailingOrganization?:  {
    __typename: "SailingOrganization",
    id: string,
    name?: string | null,
    website?: string | null,
    fleets?: string | null,
    latLong?: string | null,
    eventsID?: string | null,
    email?: string | null,
    Facebook?: string | null,
    Twitter?: string | null,
    street?: string | null,
    city?: string | null,
    phone?: string | null,
    zip?: number | null,
    state?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
