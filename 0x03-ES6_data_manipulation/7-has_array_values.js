#!/usr/bin/node

export default function hasValuesFromArray(set, arr) {
  return arr.every((i) => set.has(i));
}
