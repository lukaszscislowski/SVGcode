import{d as n,m as a,a as e}from"./index.6a732c1a.js";import"./vendor.741bd9a9.js";const s="window-controls-overlay",o=()=>{navigator.windowControlsOverlay.visible?(a.classList.add(s),e.classList.add(s)):(a.classList.remove(s),e.classList.remove(s))};navigator.windowControlsOverlay.addEventListener("geometrychange",n(async()=>{o()},250));o();
