type Props = {
  name: string
  picture: string
}

const Avatar = ({ name, picture }: Props) => {

    const handleClick = () => {
        window.location.href = '/author/' + name.toLowerCase();
    };

  return (
    <div className="flex items-center">
      <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} />
      <a>
        <div onClick={handleClick} style={{cursor:"pointer"}} className="text-xl font-bold text-white">{name}</div>
      </a>
    </div>
  )
}

export default Avatar
