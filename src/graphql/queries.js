/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      proj_type
      description
      place
      type_network
      area
      building
      standard
      flow_temp
      delivery_price
      delivery_currency
      size
      size_unit
      definition
      source
      name
      createdAt
      updatedAt
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        proj_type
        description
        place
        type_network
        area
        building
        standard
        flow_temp
        delivery_price
        delivery_currency
        size
        size_unit
        definition
        source
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
