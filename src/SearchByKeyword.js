function search(array, Keywordarray, filterColumns) {
  textArray = textArray.map(t => t.toLowerCase());
  
  return array.filter((a) => {
    return Keywordarray.every((t) => {
      return filterColumns.some((f) => {    
        return a[f].toString().toLowerCase().indexOf(t) !== -1;
      });
    });
  });
}

module.exports=search;
