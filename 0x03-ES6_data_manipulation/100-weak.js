#!/usr/bin/node

export const apiCallsCounter = new WeakMap();

export function queryAPI(endpoint) {
  let callCount = apiCallsCounter.get(endpoint) || 0;

  callCount += 1;

  apiCallsCounter.set(endpoint, callCount);

  if (callCount >= 5) {
    throw new Error('Endpoint load is high');
  }

  return callCount;
}
