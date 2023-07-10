import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

export enum EventType {
  SERIES = "SERIES",
  DISTANCE_RACE = "DISTANCE_RACE",
  LOCAL_EVENT = "LOCAL_EVENT",
  PURSUIT_RACE = "PURSUIT_RACE"
}



type EagerEvents = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Events, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly eventName?: string | null;
  readonly eventType?: EventType | keyof typeof EventType | null;
  readonly eventDays?: string | null;
  readonly eventDate?: string | null;
  readonly eventDescription?: string | null;
  readonly organizationsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvents = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Events, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly eventName?: string | null;
  readonly eventType?: EventType | keyof typeof EventType | null;
  readonly eventDays?: string | null;
  readonly eventDate?: string | null;
  readonly eventDescription?: string | null;
  readonly organizationsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Events = LazyLoading extends LazyLoadingDisabled ? EagerEvents : LazyEvents

export declare const Events: (new (init: ModelInit<Events>) => Events) & {
  copyOf(source: Events, mutator: (draft: MutableModel<Events>) => MutableModel<Events> | void): Events;
}

type EagerOrganizations = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Organizations, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly latLong?: string | null;
  readonly address?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly zip?: string | null;
  readonly website?: string | null;
  readonly fleets?: string | null;
  readonly Events?: (Events | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOrganizations = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Organizations, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly latLong?: string | null;
  readonly address?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly zip?: string | null;
  readonly website?: string | null;
  readonly fleets?: string | null;
  readonly Events: AsyncCollection<Events>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Organizations = LazyLoading extends LazyLoadingDisabled ? EagerOrganizations : LazyOrganizations

export declare const Organizations: (new (init: ModelInit<Organizations>) => Organizations) & {
  copyOf(source: Organizations, mutator: (draft: MutableModel<Organizations>) => MutableModel<Organizations> | void): Organizations;
}