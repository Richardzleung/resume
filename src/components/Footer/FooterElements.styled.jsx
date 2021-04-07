import styled from 'styled-components';

const ToolTip = styled.div`
  position: relative;
  display: inline-block;

  && .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
  
    /* Position the tooltip text - see examples below! */
    position: absolute;
    z-index: 1;
  }
  &::hover .tooltiptext::hover {
    visibility: visible;
  }
`;

export default ToolTip;