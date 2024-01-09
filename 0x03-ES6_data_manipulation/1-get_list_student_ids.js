#!/usr/bin/node

export default function getListStudentIds(ids) {
  if (!Array.isArray(ids)) {
    return [];
  }
  return ids.map((student) => student.id);
}
