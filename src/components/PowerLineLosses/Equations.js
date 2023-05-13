import React from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';

export const PowerLineLossEquation = () => {
  return (
    <div style={{fontSize: '25px', fontFamily: 'sans-serif'}}>
      <BlockMath
        math={'\\Delta U = \\frac{P \\cdot R + P \\cdot Q}{U_n} \\textsf{, [V]}'}
      />
    </div>
  );
};

export const ActivePower = () => {
  return (
    <div style={{ fontSize: '20px', fontFamily: 'sans-serif' }}>
      <InlineMath math={'P'} /> - активна мощност [kW]
    </div>
  );
};

export const ReactivePower = () => {
  return (
    <div style={{ fontSize: '20px', fontFamily: 'sans-serif' }}>
      <InlineMath math={'Q'} /> - реактивна мощност [kVAr]
    </div>
  );
};

export const ActiveResistance = () => {
  return (
    <div style={{ fontSize: '20px', fontFamily: 'sans-serif' }}>
      <InlineMath math={'R'} /> - активно съпр. на линията [Ω]
    </div>
  );
};

export const ReactiveResistance = () => {
  return (
    <div style={{ fontSize: '20px', fontFamily: 'sans-serif' }}>
      <InlineMath math={'X'} /> - индуктивно съпр. на линията [Ω]
    </div>
  );
};

export const NominalVoltage = () => {
  return (
    <div style={{ fontSize: '20px', fontFamily: 'sans-serif' }}>
      <InlineMath math={'U_n'} /> - номинално напрежение на линията [Ω]
    </div>
  );
};

export const LongitudinalActiveResistance= () => {
  return (
    <div style={{ fontSize: '20px'}}>
      <InlineMath math={'R = R_0 \\cdot L_w'} />
    </div>
  );
};

export const LongitudinalReactiveResistance= () => {
  return (
    <div style={{ fontSize: '20px'}}>
      <InlineMath math={'X = X_0 \\cdot L_w'} />
    </div>
  );
};

export const ActiveResistanceForKm = () => {
  return (
    <div style={{ fontSize: '20px', fontFamily: 'sans-serif' }}>
      <InlineMath math={'R_0'} /> - активно съпр. на линията за 1км [Ω/km]
    </div>
  );
};

export const ReactiveResistanceForKm = () => {
  return (
    <div style={{ fontSize: '20px', fontFamily: 'sans-serif' }}>
      <InlineMath math={'X_0'} /> - реактивно съпр. на линията за 1км [Ω/km]
    </div>
  );
};

export const LengthLine = () => {
  return (
    <div style={{ fontSize: '20px', fontFamily: 'sans-serif' }}>
      <InlineMath math={'L_w'} /> - дължина на линията [km]
    </div>
  );
};


