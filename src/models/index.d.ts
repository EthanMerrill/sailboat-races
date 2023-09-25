import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

export enum DayOfTheWeek {
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY"
}

export enum EventType {
  DISTANCE_RACE = "DISTANCE_RACE",
  PURSUIT_RACE = "PURSUIT_RACE",
  AROUND_CANS = "AROUND_CANS"
}

type EagerAddressType = {
  readonly Street?: string | null;
  readonly City?: string | null;
  readonly State?: string | null;
  readonly Zip?: string | null;
}

type LazyAddressType = {
  readonly Street?: string | null;
  readonly City?: string | null;
  readonly State?: string | null;
  readonly Zip?: string | null;
}

export declare type AddressType = LazyLoading extends LazyLoadingDisabled ? EagerAddressType : LazyAddressType

export declare const AddressType: (new (init: ModelInit<AddressType>) => AddressType)

type EagerSailingEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SailingEvent, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly link?: string | null;
  readonly date?: string | null;
  readonly description?: string | null;
  readonly series?: boolean | null;
  readonly dayOfWeek?: DayOfTheWeek | keyof typeof DayOfTheWeek | null;
  readonly type?: EventType | keyof typeof EventType | null;
  readonly hostClubs?: (SailingOrganization | null)[] | null;
  readonly weeklyEvent?: boolean | null;
  readonly startDate?: string | null;
  readonly endDate?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySailingEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SailingEvent, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly link?: string | null;
  readonly date?: string | null;
  readonly description?: string | null;
  readonly series?: boolean | null;
  readonly dayOfWeek?: DayOfTheWeek | keyof typeof DayOfTheWeek | null;
  readonly type?: EventType | keyof typeof EventType | null;
  readonly hostClubs: AsyncCollection<SailingOrganization>;
  readonly weeklyEvent?: boolean | null;
  readonly startDate?: string | null;
  readonly endDate?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SailingEvent = LazyLoading extends LazyLoadingDisabled ? EagerSailingEvent : LazySailingEvent

export declare const SailingEvent: (new (init: ModelInit<SailingEvent>) => SailingEvent) & {
  copyOf(source: SailingEvent, mutator: (draft: MutableModel<SailingEvent>) => MutableModel<SailingEvent> | void): SailingEvent;
}

type EagerSailingOrganization = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SailingOrganization, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly website?: string | null;
  readonly fleets?: string | null;
  readonly latLong?: string | null;
  readonly eventsID?: string | null;
  readonly email?: string | null;
  readonly Facebook?: string | null;
  readonly Twitter?: string | null;
  readonly street?: string | null;
  readonly city?: string | null;
  readonly phone?: string | null;
  readonly zip?: number | null;
  readonly state?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySailingOrganization = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SailingOrganization, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly website?: string | null;
  readonly fleets?: string | null;
  readonly latLong?: string | null;
  readonly eventsID?: string | null;
  readonly email?: string | null;
  readonly Facebook?: string | null;
  readonly Twitter?: string | null;
  readonly street?: string | null;
  readonly city?: string | null;
  readonly phone?: string | null;
  readonly zip?: number | null;
  readonly state?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SailingOrganization = LazyLoading extends LazyLoadingDisabled ? EagerSailingOrganization : LazySailingOrganization

export declare const SailingOrganization: (new (init: ModelInit<SailingOrganization>) => SailingOrganization) & {
  copyOf(source: SailingOrganization, mutator: (draft: MutableModel<SailingOrganization>) => MutableModel<SailingOrganization> | void): SailingOrganization;
}