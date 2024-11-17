import React from 'react'

// Utility function to dynamically import an icon
export const loadIcon = (icon: { name: string; type: string }) => {
  const { name, type } = icon // Split by the first uppercase letter

  switch (type) {
    case 'io':
      return React.lazy(() =>
        import(`react-icons/io`).then((module: any) => ({
          default: module[name],
        }))
      )
    case 'ai':
      return React.lazy(() =>
        import(`react-icons/ai`).then((module: any) => ({
          default: module[name],
        }))
      )
    case 'io5':
      return React.lazy(() =>
        import(`react-icons/io5`).then((module: any) => ({
          default: module[name],
        }))
      )

    case 'tb':
      return React.lazy(() =>
        import(`react-icons/tb`).then((module: any) => ({
          default: module[name],
        }))
      )
    case 'md':
      return React.lazy(() =>
        import(`react-icons/md`).then((module: any) => ({
          default: module[name],
        }))
      )
    case 'fa':
      return React.lazy(() =>
        import(`react-icons/fa`).then((module: any) => ({
          default: module[name],
        }))
      )
    case 'fa6':
      return React.lazy(() =>
        import(`react-icons/fa6`).then((module: any) => ({
          default: module[name],
        }))
      )
  }
  return React.lazy(() =>
    import(`react-icons/md`).then((module) => ({
      default: module.MdOutlineErrorOutline,
    }))
  )
}
