import React from 'react';

const subILetter = '\u1d62';
const niLetter = `n${subILetter}`;
const niHatchLetter = `${niLetter}\``;
const n1Letter = (
  <span>
    n<sub>1</sub>
  </span>
);
const n2Letter = (
  <span>
    n<sub>2</sub>
  </span>
);
const specXLetter = 'x\u0303';
// const aboveSpecSymbol = '\u0305';
const x1iLetter = (
  <span>
    x<sub>1</sub>
    {subILetter}
  </span>
);
const x2iLetter = (
  <span>
    x<sub>2</sub>
    {subILetter}
  </span>
);
const specX1Letter = (
  <span>
    {specXLetter}
    <sub>1</sub>
  </span>
);
const specX2Letter = (
  <span>
    {specXLetter}
    <sub>2</sub>
  </span>
);
const x1iMinusSpecX1Letter = (
  <span>
    {x1iLetter} - {specX1Letter}
  </span>
);
const x2iMinusSpecX2Letter = (
  <span>
    {x2iLetter} - {specX2Letter}
  </span>
);
const x1iMinusSpecX1SqrLetter = (
  <span>
    ({x1iMinusSpecX1Letter})<sup>2</sup>
  </span>
);
const x2iMinusSpecX2SqrLetter = (
  <span>
    ({x2iMinusSpecX2Letter})<sup>2</sup>
  </span>
);
const specSmallDLetter = 'd\u0305';
const skoLetter = '\u03c3';
const skoSmallDLetter = (
  <span>
    {skoLetter}
    <sub>d</sub>
  </span>
);
const bigSSpecSmallDLetter = (
  <span>
    S<sub>{specSmallDLetter}</sub>
  </span>
);
const diLetter = (
  <span>
    d<sub>i</sub>
  </span>
);

const Letters = {
  subI: subILetter,
  specX: specXLetter,
  specXGen: (
    <span>
      {specXLetter}
      <sub>ген</sub>
    </span>
  ),
  specX1: specX1Letter,
  specX2: specX2Letter,
  specSmallD: specSmallDLetter,
  x1iMinusSpecX1: x1iMinusSpecX1Letter,
  x2iMinusSpecX2: x2iMinusSpecX2Letter,
  x1iMinusSpecX1Sqr: x1iMinusSpecX1SqrLetter,
  x2iMinusSpecX2Sqr: x2iMinusSpecX2SqrLetter,
  dispersion1: (
    <span>
      D<sub>1</sub>
    </span>
  ),
  dispersion2: (
    <span>
      D<sub>2</sub>
    </span>
  ),
  dispersionGen: (
    <span>
      D<sub>ген</sub>
    </span>
  ),
  xi: `x${subILetter}`,
  x1i: x1iLetter,
  x2i: x2iLetter,
  ni: niLetter,
  niHatch: niHatchLetter,
  n1: n1Letter,
  n2: n2Letter,
  sko: skoLetter,
  skoSmallD: skoSmallDLetter,
  bigSSpecSmallD: bigSSpecSmallDLetter,
  x0sqr: (
    <span>
      x<sub>0</sub>
      <sup>2</sup>
    </span>
  ),
  niMinusNiHatchSqr: (
    <span>
      <span>{`(${niLetter} - ${niHatchLetter})`}</span>
      <sup>2</sup>
    </span>
  ),
  sum: '\u2211',
  significanceLevel: '\u03b1',
  infinity: '\u221e',
  sqrt: '\u221a',
  lessOrEqual: '\u2a7d',
  xSqr: (
    <span>
      x<sup>2</sup>
    </span>
  ),
  x1: (
    <span>
      x<sub>1</sub>
    </span>
  ),
  x2: (
    <span>
      x<sub>2</sub>
    </span>
  ),
  tStudent: (
    <span>
      t<sub>p</sub>
    </span>
  ),
  di: diLetter,
};

export default Letters;
