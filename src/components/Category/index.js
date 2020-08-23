import React from 'react'
import { Anchor, Image } from './styles'

const DEFAULT_IMAGE = 'https://www.publicdomainpictures.net/pictures/180000/velka/dog-foodprint.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = 'Cargando...' }) => (
  <Anchor href={path}>
    <Image src={cover} />
    {emoji}
  </Anchor>
)
