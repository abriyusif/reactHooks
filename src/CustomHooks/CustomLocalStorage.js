// import { useState, useEffect } from 'react';
// export default function CustomLocalStorage() {
//   const [searchTermProp, setSearchTermProp] = useState(
//     localStorage.getItem('search') || 'React'
//   )

//   useEffect(() => {
//     localStorage.setItem('search', searchTermProp)
//   }, [searchTermProp])

//   return [searchTermProp, setSearchTermProp]
// }

import { useState, useEffect } from 'react';
export default function CustomLocalStorage(key, initialState) {
  const [value, setValue] = useState(
    localStorage.getItem(key) || initialState
  )

  useEffect(() => {
    localStorage.setItem(key, value)
  }, [value, key])

  return [value, setValue]
}