export const exerciseOptions = {
     method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': '008482cab5msh3f9a5547edf1633p1b5566jsn6eaee2731b16',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};
  


export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '008482cab5msh3f9a5547edf1633p1b5566jsn6eaee2731b16',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};







 
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };