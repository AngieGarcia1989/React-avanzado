import React, { useEffect, useRef, useState } from 'react'
import { Article, ImgWrapper, Img, Button } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg'
// se coloca la foto de archivo j.son
export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const element = useRef(null)
  const [show, setShow] = useState(false)
  useEffect(function () {
    // console.log(element.current)
    const observer = new window.IntersectionObserver(function (entries) {
      // console.log(entries) para saber si esta en pantalla del usuario
      const { isIntersecting } = entries[0]
      // console.log({ isIntersecting }) representa con true o false cuando esta la foto en el view y lo va actualizando a medida que cambia con el scroll
      console.log(isIntersecting)
      if (isIntersecting) {
        // console.log('si')
        setShow(true)
        observer.disconnect()
        // de esta manera cuando sea true observer deja de funcionar
      }
    })
    observer.observe(element.current)
  }, [element])
  return (
    <Article ref={element}>
      {
        show &&
          <>
            <a href={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </a>
            <Button>
              <MdFavoriteBorder size='32px' /> {likes} likes!
            </Button>
          </>
      }

    </Article>
  )
}
