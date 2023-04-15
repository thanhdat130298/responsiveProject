const modal_filter = document.getElementById("booking-list_modal-filter");
const btn_openFilter = document.getElementById("filter-btn");

btn_openFilter.onclick = function () {
    modal_filter.classList.toggle("list-view");
}