import { formatDatetimeToInt } from '../../utils/formatTime'

export const GET_PROJECT = () => `query{
  getProjects {
    id
    name
    image
    create_date
    level_count
    update_date
    end_date
    start_date
  }
}

 `

export const GET_PROJECT_BY_ID = id => `
query{
  getProjectById(id: "${id}") {
    id
    name
    create_date
    update_date
    start_date
    end_date
    level_count
    image
    steps {
      image
      name
      icon
      id
      color
      start_date
      end_date
    }
  }
}
 `

export const CREATE_PROPJECT = projectData => {
  let dataSteps = ''
  projectData.steps.map(attachment => {
    dataSteps += `{ end_date: "${formatDatetimeToInt(
      attachment.end_date
    )}", start_date: "${formatDatetimeToInt(attachment.start_date)}",color: "${
      attachment.color
    }",icon: "${attachment.icon}",text: "${attachment.text}" }`
    // { id: 1, short_id: "abcxyz" }{ id: 2, short_id: "bcdqrs" }
  })
  // eslint-disable-next-line standard/object-curly-even-spacing
  return `
    mutation{
      createProject(name:"${projectData.name}",
        steps: [${dataSteps}]){
        id
        name
      }
    }
    `
}

export const DELETE_PROPJECT = id => {
  return `
    mutation{
      deleteProject(id:"${id}") {
        id
      }
    }
  `
}

export const GET_PROPJECT_BY_ID = id => {
  return `
    query{
    getProjectById(id:"${id}") {
      id
      name
      create_date
      update_date
      start_date
      end_date
      level_count
      steps {
        image
        name
        icon
        id
        color
        start_date
        end_date
      }
    }
  }
  `
}
