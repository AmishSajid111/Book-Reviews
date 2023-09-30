import React from 'react'

const SearchBar = ({handleChange,handleSubmit,query,isLoading}) => {

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input   className="form-control" type="seach"   name="query" placeholder='search book by author name' disabled={isLoading}value={query}  onChange={handleChange} />
        <input
                disabled={isLoading || !query}
                type="submit"
                className="btn"
                value="Search"
            />
      </form>
      
    </div>
  )
}

export default SearchBar
