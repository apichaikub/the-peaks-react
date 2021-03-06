import styled from "styled-components"
import Image from 'next/image'

const WrapperIconSearch = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 90px;
  background-color: #2153A3;
  border-bottom: 2px solid white;
  cursor: pointer;
`

const Icon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
`

type TIconSearchProps = {
  src: string;
  width: number;
  height: number;
  onClick?(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
}

const IconSearch = ({ src, width, height, onClick }: TIconSearchProps) => {
  return (
    <WrapperIconSearch
      onClick={(e) => onClick && onClick(e)}
    >
      <Icon>
        <Image src={src} alt="Search Icon" width={width} height={height} />
      </Icon>
    </WrapperIconSearch>
  )
}

export default IconSearch