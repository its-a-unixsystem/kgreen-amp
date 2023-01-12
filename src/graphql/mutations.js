/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
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
