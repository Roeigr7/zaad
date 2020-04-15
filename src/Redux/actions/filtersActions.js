//////FILTER ACTIONS/////////

//SET_FILTER_TEXT
export const setFilterText = (textFilter = "") => ({
  type: "TEXT_FILTER",
  textFilter
});
export const setFilterCategory = (cat = "") => ({
  type: "CATEGORY_FILTER",
  cat
});

//SORT_BY_FILTER__NEW_FIRST_DATE
export const sortByNewFirst = (newfirst = "") => ({
  type: "SORT_BY_NEW_FIRST"
});

//SORT_BY_FILTER__OLD_FIRST_DATE
export const sortByOldFirst = (oldfirst = "") => ({
  type: "SORT_BY_OLD_FIRST"
});
