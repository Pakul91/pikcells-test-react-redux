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
