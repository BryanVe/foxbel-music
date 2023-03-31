import { FC } from 'react'
import foxbelLogo from '@/assets/images/foxbel-music@3x.png'

type BrandProps = {
  width?: number
}

const Brand: FC<BrandProps> = (props) => {
  const { width = 250 } = props

  return <img alt='Foxbel Music' src={foxbelLogo} width={width} />
}
export default Brand
