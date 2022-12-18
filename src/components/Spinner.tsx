import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from { opacity: 1 };

  to { opacity: 0 };
`;

const StyledSpinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;

const Loading = styled.div`
  width: 217px;
  height: 217px;
  display: inline-block;
  overflow: hidden;
  background: none;
`;

const Spins = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0;

  & div {
    box-sizing: content-box;
    left: 96.565px;
    top: 46.655px;
    position: absolute;
    animation: ${rotate} linear 0.6097560975609756s infinite;
    background: #202c37;
    width: 23.869999999999997px;
    height: 15.19px;
    border-radius: 10.502799999999999px / 7.595px;
    transform-origin: 11.934999999999999px 61.845px;
  }

  & div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -0.5628517823639775s;
    background: #202c37;
  }

  & div:nth-child(2) {
    transform: rotate(27.692307692307693deg);
    animation-delay: -0.5159474671669794s;
    background: #202c37;
  }

  & div:nth-child(3) {
    transform: rotate(55.38461538461539deg);
    animation-delay: -0.46904315196998125s;
    background: #202c37;
  }

  & div:nth-child(4) {
    transform: rotate(83.07692307692308deg);
    animation-delay: -0.4221388367729831s;
    background: #202c37;
  }

  & div:nth-child(5) {
    transform: rotate(110.76923076923077deg);
    animation-delay: -0.37523452157598497s;
    background: #202c37;
  }

  & div:nth-child(6) {
    transform: rotate(138.46153846153845deg);
    animation-delay: -0.32833020637898686s;
    background: #202c37;
  }

  & div:nth-child(7) {
    transform: rotate(166.15384615384616deg);
    animation-delay: -0.28142589118198874s;
    background: #202c37;
  }

  & div:nth-child(8) {
    transform: rotate(193.84615384615384deg);
    animation-delay: -0.23452157598499063s;
    background: #202c37;
  }

  & div:nth-child(9) {
    transform: rotate(221.53846153846155deg);
    animation-delay: -0.18761726078799248s;
    background: #202c37;
  }

  & div:nth-child(10) {
    transform: rotate(249.23076923076923deg);
    animation-delay: -0.14071294559099437s;
    background: #202c37;
  }

  & div:nth-child(11) {
    transform: rotate(276.9230769230769deg);
    animation-delay: -0.09380863039399624s;
    background: #202c37;
  }

  & div:nth-child(12) {
    transform: rotate(304.61538461538464deg);
    animation-delay: -0.04690431519699812s;
    background: #202c37;
  }

  & div:nth-child(13) {
    transform: rotate(332.3076923076923deg);
    animation-delay: 0s;
    background: #202c37;
  }
`;

const Spinner = (): JSX.Element => {
  return (
    <StyledSpinner>
      <Loading>
        <Spins>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Spins>
      </Loading>
    </StyledSpinner>
  );
};

export default Spinner;
