#!/usr/bin/node

export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string' || startString.length === 0) {
    return '';
  }

  const filteredElements = Array
    .from(set).filter((element) => element && element.startsWith(startString));
  const cleanedStrings = filteredElements.map((element) => element.slice(startString.length));

  return cleanedStrings.join('-');
}
