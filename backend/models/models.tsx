import React, { Component } from 'react';

export function createPeople(numPersons: number): Person[] {
  const personsList: Person[] = [];

  for (let i = 0; i < numPersons; i++) {
    const newPerson: Person = {
      Gender: "Unknown",
      Parents: [],
      Siblings: [],
      Children: [],
    };
    personsList.push(newPerson);
  }

  return personsList;
}

export function createParents(): Person[] {
  const personsList: Person[] = [];
  const Father : Person = {
    Gender: "M",
    Parents: [],
    Siblings: [],
    Children: []
  }
  const Mother : Person = {
    Gender: "F",
    Parents: [],
    Siblings: [],
    Children: []
  }

  personsList.push(Father);
  personsList.push(Mother);

  return personsList;
}


type Person = {
  Gender: string
  Parents: Person[]
  Siblings: Person[]
  Children: Person[]
};

type FormGenderReturnValue = {
  ShowModal: boolean
  PersonData: Person
}

export type {Person, FormGenderReturnValue} 