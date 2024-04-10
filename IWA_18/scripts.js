//scripts.js
import {
  html,
  createOrderHtml,
  moveToColumn,
  updateDraggingHtml,
} from "../IWA_18/view.js";
import {
  TABLES,
  COLUMNS,
  state,
  createOrderData,
  updateDragging,
} from "./data.js";

/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event
 */
const handleDragOver = (event) => {
  event.preventDefault();
  const path = event.path || event.composedPath();
  let column = null;

  for (const element of path) {
    const { area } = element.dataset;
    if (area) {
      column = area;
      break;
    }
  }

  if (!column) return;
  updateDragging({ over: column });
  updateDraggingHtml({ over: column });
  console.log(column)
};

const handleDragStart = (event) => {
  const orderId = event.target.dataset.id;
  if (!orderId) return;
 /*  updateDragging({ source: orderId }); */
  console.log('start')

};
const handleDragEnd = (event) => {
  const orderId = event.target.dataset.id;
  moveToColumn(orderId, state.dragging.over )
  console.log('end')
};


const handleHelpToggle = (event) => {
  if (!html.help.overlay.open === true) {
    html.help.overlay.open = true;
  } else {
    html.help.overlay.open = false;
    html.other.add.focus();
  }

};

const handleAddToggle = (event) => {
  html.add.form.title.value = "";
  html.add.form.table.value = 1;

  if (!html.add.overlay.open === true) {
    html.add.overlay.open = true;
  } else {
    html.add.overlay.open = false;
    html.other.add.focus();
  }
};
const handleAddSubmit = (event) => {
  event.preventDefault();

  const title = html.add.form.title.value;
  const table = html.add.form.table.value;

  if (!title || !table) return;

  const newOrder = createOrderData({ title, table, column: "ordered" });
  state.orders[newOrder.id] = newOrder;
  html.add.overlay.open = false;
  html.columns.ordered.appendChild(createOrderHtml(newOrder));
};
const handleEditToggle = (event) => {
  if(!html.edit.overlay.open){
  const element = event.target.closest(".order");
  console.log(element);
  const { id } = element.dataset;
  html.edit.overlay.open = true;
  const { title, table, column } = state.orders[id];
  html.edit.title.value = title;
  html.edit.table.value = table;
  html.edit.column.value = column;
  html.edit.id.value = id;
}
else{
    html.edit.overlay.open = false;
  }
};
const handleEditSubmit = (event) => {
  event.preventDefault();
  const editingID = html.edit.id.value;
  state.orders[editingID].title = html.edit.title.value;
  state.orders[editingID].table = html.edit.table.value;
  state.orders[editingID].column = html.edit.column.value;

  const htmlSource = document.querySelector(`[data-id="${editingID}"]`);
  htmlSource.remove();
  html.columns[state.orders[editingID].column].appendChild(
    createOrderHtml(state.orders[editingID])
  );
  html.edit.overlay.open = false;
  html.other.add.focus();
};
const handleDelete = (event) => {
  const htmlSource = document.querySelector(
    `[data-id="${html.edit.id.value}"]`
  );
  htmlSource.remove();
  html.edit.overlay.open = false;
  html.other.add.focus();
};

html.add.cancel.addEventListener("click", handleAddToggle);
html.other.add.addEventListener("click", handleAddToggle);
html.add.form.addEventListener("submit", handleAddSubmit);

html.other.grid.addEventListener("click", handleEditToggle);
html.edit.cancel.addEventListener("click", handleEditToggle);
html.edit.form.addEventListener("submit", handleEditSubmit);
html.edit.delete.addEventListener("click", handleDelete);

html.help.cancel.addEventListener("click", handleHelpToggle);
html.other.help.addEventListener("click", handleHelpToggle);

for (const htmlColumn of Object.values(html.columns)) {
  htmlColumn.addEventListener("dragstart", handleDragStart);
  htmlColumn.addEventListener("dragend", handleDragEnd);
}

for (const htmlArea of Object.values(html.area)) {
  htmlArea.addEventListener("dragover", handleDragOver);
}
