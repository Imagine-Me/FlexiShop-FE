import { IGeneralConfigData } from 'src/interfaces/config.interface'
import { Helmet as ReactHelmet } from 'react-helmet'
import { useMemo } from 'react'
import { IImageModel } from 'src/interfaces/image.interface'

interface IHelmetProps {
  data: Partial<IGeneralConfigData>
}

export const Helmet: React.FC<IHelmetProps> = ({ data }) => {
  const elements = useMemo(() => {
    const result: React.ReactNode[] = []
    Object.keys(data).forEach((key, index) => {
      if (key === 'icon') {
        result.push(<link key={index} rel="icon" href={data[key]?.url} />)
      } else if (key === 'title') {
        result.push(<title key={index}>{data[key]}</title>)
      } else if (/^og:/.test(key)) {
        let value = data[key as keyof IGeneralConfigData]
        if (/\bimage\b/.test(key)) {
          value = (value as IImageModel)?.url
        }
        result.push(
          <meta key={index} property={key} content={value as string} />
        )
      } else {
        let value = data[key as keyof IGeneralConfigData]
        if (/\bimage\b/.test(key)) {
          value = (value as IImageModel)?.url
        }
        result.push(<meta key={index} name={key} content={value as string} />)
      }
    })
    return result
  }, [data])
  return <ReactHelmet>{elements}</ReactHelmet>
}
