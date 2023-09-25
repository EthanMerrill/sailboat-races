// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const DayOfTheWeek = {
  "MONDAY": "MONDAY",
  "TUESDAY": "TUESDAY",
  "WEDNESDAY": "WEDNESDAY",
  "THURSDAY": "THURSDAY",
  "FRIDAY": "FRIDAY",
  "SATURDAY": "SATURDAY",
  "SUNDAY": "SUNDAY"
};

const EventType = {
  "DISTANCE_RACE": "DISTANCE_RACE",
  "PURSUIT_RACE": "PURSUIT_RACE",
  "AROUND_CANS": "AROUND_CANS"
};

const { SailingEvent, SailingOrganization, AddressType } = initSchema(schema);

export {
  SailingEvent,
  SailingOrganization,
  DayOfTheWeek,
  EventType,
  AddressType
};