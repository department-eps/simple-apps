import React from 'react';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export const PowerLineLossEquation = () => {
  return (
    <div style={{ fontSize: '25px', fontFamily: 'sans-serif' }}>
      <BlockMath
        math={'\\Delta U = \\frac{P \\cdot R + Q \\cdot X}{U_n} \\textsf{, [V]}'}
      />
    </div>
  );
};

export const ActivePower = () => {
  return (
    <div>
      <InlineMath math={'P'} /> - активна мощност [kW]
    </div>
  );
};

export const ReactivePower = () => {
  return (
    <div>
      <InlineMath math={'Q'} /> - реактивна мощност [kVAr]
    </div>
  );
};

export const ActiveResistance = () => {
  return (
    <div>
      <InlineMath math={'R'} /> - активно съпр. на линията [Ω]
    </div>
  );
};

export const ReactiveResistance = () => {
  return (
    <div>
      <InlineMath math={'X'} /> - индуктивно съпр. на линията [Ω]
    </div>
  );
};

export const NominalVoltage = () => {
  return (
    <div>
      <InlineMath math={'U_n'} /> - ном. напрежение на линията [Ω]
    </div>
  );
};

export const LongitudinalActiveResistance = () => {
  return (
    <div>
      <InlineMath math={'R = R_0 \\cdot L_w'} />
    </div>
  );
};

export const LongitudinalReactiveResistance = () => {
  return (
    <div>
      <InlineMath math={'X = X_0 \\cdot L_w'} />
    </div>
  );
};

export const ActiveResistanceForKm = () => {
  return (
    <div>
      <InlineMath math={'R_0'} /> - акт. съпр. на линията за 1км [Ω/km]
    </div>
  );
};

export const ReactiveResistanceForKm = () => {
  return (
    <div>
      <InlineMath math={'X_0'} /> - реакт. съпр. на линията за 1км [Ω/km]
    </div>
  );
};

export const LengthLine = () => {
  return (
    <div>
      <InlineMath math={'L_w'} /> - дължина на линията [km]
    </div>
  );
};

export const DeltaULabel = () => {
  return (
    <div style={{fontSize: '20px'}}>
      <InlineMath math={'\\Delta U'}/> [V]
    </div>
  );
};

