/**
 * sorting callback function
 * @param {object} a element of items array
 * @param {object} b element of items array
 * @returns result of comparison for ascending order
 */
function sortByOrderProp(a, b) {
  if (a.order < b.order) return -1;
  if (a.order < b.order) return 1;
  return 0;
}

/**
 * Sort provided data
 * @param {object} input data returned from fetch request
 * @returns {object} copy of input data sorted in ascending order
 */
export function sortData(input) {
  if (!input) return;

  const data = { ...input };
  const defConfig = data.default_configuration;

  //sort items in each layer in ascending order
  data.layers.forEach((layer) => {
    const activeLayer = layer.order;
    layer.items.sort(sortByOrderProp);
    layer.items.forEach((item, i) =>
      assignStatusToItem(item, i, defConfig[activeLayer])
    );
  });

  return data;
}

/**
 *
 * @param item item passed from the array
 * @param i index of item in items array
 * @param indexOfActive Index of item that should be active in current layer
 */
function assignStatusToItem(item, i, indexOfActive) {
  item.active = i === indexOfActive ? true : false;
}

/**
 * download canvas to user desktop
 * I've used method from this youtube clip
 * https://www.youtube.com/watch?v=YoVJWZrS2WU
 */
export function downloadCanvas(canvas) {
  console.log(canvas);
  // IE/Edge Support (PNG only)
  if (window.navigator.msSaveBlob) {
    window.navigator.msSaveBlob(canvas.msToBlob(), "design.png");
  } else {
    // rest of the browsers
    const a = document.createElement("a");

    document.body.appendChild(a);
    a.href = canvas.toDataURL();
    a.download = "design.png";
    a.click();
    document.body.removeChild(a);
  }
}

/**
 * draw canvas from the active items
 */
export function drawCanvas(canvasRef, layer0, layer1, layer2) {
  const width = canvasRef.current.clientWidth;
  const height = canvasRef.current.clientHeight;
  const ctx = canvasRef.current.getContext("2d");
  ctx.clearRect(0, 0, width, height);

  ctx.drawImage(layer0.current, 0, 0, width, height);
  ctx.drawImage(layer1.current, 0, 0, width, height);
  ctx.drawImage(layer2.current, 0, 0, width, height);
}
