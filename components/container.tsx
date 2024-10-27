type Props = {
  children?: React.ReactNode
  rgb?: number[]
}

const Container = ({ children, rgb }: Props) => {

  if (rgb !== undefined)
    return <div className="container mx-auto px-5" style={{backgroundColor: 'rgb(rgb[0], rgb[1], rgb[2])'}}>{children}</div>
  return <div className="container mx-auto px-5" style={{backgroundColor: 'rgb(28, 29, 32)'}}>{children}</div>
}

export default Container
