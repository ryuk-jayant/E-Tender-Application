function search(array, Keywordarray, filterColumns) {
  
  return array.filter((a) => {
    return Keywordarray.every((t) => {
      return filterColumns.some((f) => {    
        return a[f].toString().indexOf(t) !== -1 || a[f].toString().toLowerCase().indexOf(t) !== -1;
      });
    });
  });
}

export default search;
