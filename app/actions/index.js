//Constants
export const SEARCH_TYPING = "SEARCH_TYPING"
export const SEARCH_SUBMIT = "SEARCH_SUBMIT"

//Action Creators
export const autofillSearch = (value) => {

	 var songs = [
    {title: 'Drake- Hotline Bling', Duration: '3:00', link: "https://www.youtube.com/watch?v=uxpDa-c-4Mc"},
    {title: 'Drake- Right Hand', Duration: '3:00', link: "https://www.youtube.com/watch?v=NSG-Ggn6Z_c"},
    {title: 'Selena Gomez - Come and Get it', Duration: '3:00', link: "https://www.youtube.com/watch?v=n-D1EB74Ckg"},
    {title: 'Tony Igy- Astronomia', Duration: '3:00', link: "https://www.youtube.com/watch?v=4Vk5DpS8hmY"}]
	var search = value
        search = search.toLowerCase()
        var music =  songs.map(function(song) {
            
            var re = new RegExp(search, 'g')
            var songTitle= song.title.toLowerCase()
            if( songTitle.match(re) == search){
                console.log(song)
               return (song)
            }
            
      
    })
		
  return {
    type: SEARCH_TYPING,
	autofillResults: music
	
  }
}

export const resultsSearch = (value) => {
	
  return {
    type: SEARCH_SUBMIT,
    value
  }
}
