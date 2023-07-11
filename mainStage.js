'use strict';

let mainStage = document.getElementById('mainStage')
let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttributeNS(null, 'width', '100%');
    svg.setAttributeNS(null, 'height', '100%');
    svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    mainStage.appendChild(svg);

let svgHeight = svg.getBoundingClientRect().height;
let svgWidth = svg.getBoundingClientRect().width;
let centerSVGX = svgWidth / 2;
let centerSVGY = svgHeight / 2;
let circleDummyRadious = (svgHeight>svgWidth) ? svgWidth : svgHeight;

let blackCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    blackCircle.setAttributeNS(null, 'cx', centerSVGX);
    blackCircle.setAttributeNS(null, 'cy', centerSVGY);
    blackCircle.setAttributeNS(null, 'r', circleDummyRadious * 0.49);
    blackCircle.setAttributeNS(null, 'style', 'fill: black; stroke: black; stroke-width: 1px; pointer-events: all; cursor:pointer;' );
    svg.appendChild(blackCircle);

let whiteCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    whiteCircle.setAttributeNS(null, 'cx', centerSVGX);
    whiteCircle.setAttributeNS(null, 'cy', centerSVGY);
    whiteCircle.setAttributeNS(null, 'r', circleDummyRadious * 0.25);
    whiteCircle.setAttributeNS(null, 'style', 'fill: white; stroke: white; stroke-width: 1px; cursor:pointer;' );
    svg.appendChild(whiteCircle);

let blackBorder = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    blackBorder.setAttributeNS(null, 'cx', centerSVGX);
    blackBorder.setAttributeNS(null, 'cy', centerSVGY);
    blackBorder.setAttributeNS(null, 'r', circleDummyRadious * 0.23);blackBorder.setAttributeNS(null, 'style', 'fill: none; stroke: black; stroke-width: 1px;' );
    blackBorder.setAttributeNS(null, 'style', 'fill: none; stroke: black; stroke-width: 1px;' );
    svg.appendChild(blackBorder);

let number8 = document.createElementNS("http://www.w3.org/2000/svg", "text");
    number8.setAttributeNS(null, 'x', centerSVGX);
    number8.setAttributeNS(null, 'y', centerSVGY);
    number8.setAttributeNS(null, 'dominant-baseline', 'middle');
    number8.setAttributeNS(null, 'text-anchor', 'middle');
    number8.setAttributeNS(null, 'id', 'number8');
    number8.setAttribute('style', 'transform: translateY(4%); pointer-events: none;');
    svg.appendChild(number8);

let textNode = document.createTextNode("8");
    number8.appendChild(textNode);

let curtain = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    curtain.setAttributeNS(null, 'cx', centerSVGX);
    curtain.setAttributeNS(null, 'cy', centerSVGY);
    curtain.setAttributeNS(null, 'r', circleDummyRadious * 0.23);
    curtain.setAttributeNS(null, 'style', 'fill: none; cursor:pointer;' );
    svg.appendChild(curtain);
