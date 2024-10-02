import { useMemo, useCallback } from "react"

const useLocalStorage = () => {
  const get = useCallback((key: string): any => {
    const value = window.localStorage.getItem(key)
    return value ? JSON.parse(value) : null
  }, [])

  const set = useCallback((key: string, value: any) => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [])

  const getFromObject = useCallback(
    (key: string, property: string | number) => {
      const object = get(key)
      return object ? (property in object ? object[property] : null) : null
    },
    [get],
  )

  const setToObject = useCallback(
    (key: string, property: string | number, value: any) => {
      const object = get(key)
      if (object) {
        object[property] = value
        set(key, object)
      } else {
        set(key, { [property]: value })
      }
    },
    [get, set],
  )

  const remove = useCallback((key: string) => {
    window.localStorage.removeItem(key)
  }, [])

  const removeAll = useCallback(() => {
    window.localStorage.clear()
  }, [])

  return useMemo(
    () => ({ self: window.localStorage, get, set, getFromObject, setToObject, remove, removeAll }),
    [get, set, getFromObject, setToObject, remove, removeAll],
  )
}

export default useLocalStorage
