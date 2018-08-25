import React from 'react'
import styled from 'styled-components'

const CellGroup = styled.div`
  display: grid;
  grid-template-columns: 60px auto;
  grid-gap: 20px;
  align-items: center;
  min-width: 320px;
`

const CellImage  = styled.div`
  width: 60px;
  height: 60px;
  background: #212C4F;
  background-image: url(${props => props.image});
  background-size: 60px;
  border-radius: 10px;
`

const CellTile = styled.div`
  font-size: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 30px 0;
`

const Cell = ({title, image}) => (
  <CellGroup>
    <CellImage image={image} />
    <CellTile>{title}</CellTile>
  </CellGroup>
)

export default Cell