import uuidv4 from 'uuid/v4'

const getuuid = () => {
  return 'cc' + uuidv4()
}

function CustomComponentDropzoneIdManager() {
  const ids = new Map()

  function generateDropzoneId(customComponentInstanceId, dropzoneName) {
    let customComponentInstanceDropzoneIds = ids.get(customComponentInstanceId)
    if (!customComponentInstanceDropzoneIds) {
      customComponentInstanceDropzoneIds = { [dropzoneName]: getuuid() }
      ids.set(customComponentInstanceId, customComponentInstanceDropzoneIds)
    }

    let dropzoneId = customComponentInstanceDropzoneIds[dropzoneName]
    if (!dropzoneId) {
      dropzoneId = getuuid()
      customComponentInstanceDropzoneIds = { ...customComponentInstanceDropzoneIds }
      customComponentInstanceDropzoneIds[dropzoneName] = dropzoneId
      ids.set(customComponentInstanceId, customComponentInstanceDropzoneIds)
    }

    return dropzoneId
  }

  function getDropzoneId(customComponentInstanceId, dropzoneName) {
    const customComponentInstanceDropzoneIds = ids.get(customComponentInstanceId)
    const dropzoneId =
      customComponentInstanceDropzoneIds && customComponentInstanceDropzoneIds[dropzoneName]

    if (!dropzoneId) {
      return generateDropzoneId(customComponentInstanceId, dropzoneName)
    }
    return dropzoneId
  }

  function getDropzoneIds(customComponentInstanceId) {
    return ids.get(customComponentInstanceId) || {}
  }

  return {
    getDropzoneId,
    getDropzoneIds,
  }
}

export default CustomComponentDropzoneIdManager()
