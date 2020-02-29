export const fetchData = async (url, options = {}) => {
  const response = await fetch(url, options)
   const fetchedData = await response.json()
   if(!response.ok) {
     throw new Error('There was an error fetching data')
   } else {
     return fetchedData
   }
 }
