import ButtonIcon from './ButtonIcon'
import Image from 'next/image'

type TButtonIconBookmarkProps = {
  active: Boolean;
  text: String;
  onClick?(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}

const ButtonIconBookmark = ({ active, text, onClick }: TButtonIconBookmarkProps) => {
  const preIcon = active
    ? <Image src="/images/bookmarkon-icon@2x.svg" alt="Bookmark Icon" width={10.5} height={13.5} />
    : <Image src="/images/bookmarkoff-icon@2x.svg" alt="Bookmark Icon" width={10.5} height={13.5} />
  return (
    <ButtonIcon
      preIcon={preIcon}
      text={text}
      onClick={onClick}
    />
  )
}

export default ButtonIconBookmark