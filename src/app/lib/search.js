import filter from 'lodash/filter';


export default function objectSearch(haystack, needles) {
  return filter(haystack, Object.keys(needles)
    .reduce((acc, key) => {
      return (obj) => {
        return acc(obj)
          && obj[key].toLowerCase().indexOf(needles[key].toLowerCase()) !== -1;
      };
    }, () => true));
}
