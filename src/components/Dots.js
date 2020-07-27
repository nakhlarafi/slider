/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const Dot = ({ active }) => (
  <span
    css={css`
      padding: 10px;
      margin-right: 5px;
      cursor: pointer;
      border-radius: 25%;
      background: ${active ? 'black' : 'white'};
    `}
  />
)

const Dots = ({ slides, activeIndex }) => (
  <div
    css={css`
      position: absolute;
      top: 25px;
      width: 100%;
      display: flex;
      margin: 25px;
      align-items: right;
      justify-content: right;
    `}
  >
    {slides.map((slide, i) => (
      <Dot key={slide} active={activeIndex === i} />
    ))}
  </div>
)

export default Dots
