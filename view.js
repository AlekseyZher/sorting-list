export class View {
  constructor() {}

  elements = {
    productList: document.querySelector(".productList"),
    sortCategorySelect: document.querySelector("#sortCategory"),
    sortTypeSelect: document.querySelector("#sortType"),
    sortOrderSelect: document.querySelector("#sortOrder"),
    filterInput: document.querySelector("#filterInput"),
    form: document.querySelector("#form"),
  };
  // подсвечивание символов которые совпали
  highlightFilterValue(name, filterValue) {
    const lowerCaseName = name.toLowerCase();
    const lowerCaseFilterValue = filterValue.toLowerCase();

    const startIdx = lowerCaseName.indexOf(lowerCaseFilterValue);

    if (startIdx !== -1) {
      const start = name.substring(0, startIdx);
      const interval = name.substring(startIdx, startIdx + filterValue.length);
      const end = name.substring(startIdx + filterValue.length);
      const highlightedName = `${start}<span class='active'>${interval}</span>${end}`;
      return highlightedName;
    }
    return name;
  }

  renderProducts(arrData) {
    this.elements.productList.innerHTML = "";
    arrData.forEach((product) => {
      const name = this.highlightFilterValue(
        product.name,
        this.elements.filterInput.value
      );
      const markup = /*html*/ `<li>
          <span>${product.subtitle}</span>
          <h3>${name}</h3>
          <p>Цена: ${product.price} руб.</p>
          <p>Дата добавления: ${product.date}</p>
      </li>
      `;

      this.elements.productList.insertAdjacentHTML("afterbegin", markup);
    });
  }

  sortingElementsValue() {
    return {
      sortCategory: this.elements.sortCategorySelect.value,
      sortType: this.elements.sortTypeSelect.value,
      sortOrder: this.elements.sortOrderSelect.value,
    };
  }

  sortingElements() {
    return {
      sortCategory: this.elements.sortCategorySelect,
      sortType: this.elements.sortTypeSelect,
      sortOrder: this.elements.sortOrderSelect,
    };
  }
}
