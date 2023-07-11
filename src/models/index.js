// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const EventType = {
  "SERIES": "SERIES",
  "DISTANCE_RACE": "DISTANCE_RACE",
  "LOCAL_EVENT": "LOCAL_EVENT",
  "PURSUIT_RACE": "PURSUIT_RACE"
};

const { Events, Organizations } = initSchema(schema);

export {
  Events,
  Organizations,
  EventType
};