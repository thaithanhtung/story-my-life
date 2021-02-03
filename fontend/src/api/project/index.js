import { graphql } from '../../utils/request'
import {
  GET_PROJECT,
  GET_PROJECT_BY_ID,
  CREATE_PROPJECT,
  DELETE_PROPJECT,
  GET_PROPJECT_BY_ID
} from './project.query'

export async function getProjects () {
  return graphql(GET_PROJECT())
}

export async function getProjectById (id) {
  return graphql(GET_PROJECT_BY_ID(id))
}

export async function createproject (project) {
  return graphql(CREATE_PROPJECT(project))
}

export async function deleteProject (id) {
  return graphql(DELETE_PROPJECT(id))
}

export async function getProjectbyId (id) {
  return graphql(GET_PROPJECT_BY_ID(id))
}
