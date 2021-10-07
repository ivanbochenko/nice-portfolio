import { useCallback, useEffect, useContext } from 'react'

import { ModelsContext } from './ModelsContext'

export default function useModel(modelName) {
  const { registerModel, unregisterModel, getModelByName } = useContext(ModelsContext)

  useEffect(() => () => unregisterModel(modelName), [
    modelName,
    unregisterModel
  ])

  const getModel = useCallback(() => getModelByName(modelName), [
    getModelByName,
    modelName
  ])

  return {
    registerModel,
    getModel
  }
}
