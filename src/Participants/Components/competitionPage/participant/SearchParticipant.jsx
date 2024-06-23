import styled from "styled-components"

import search_icon from "../../../../assets/search_icon.png"

const SearchParticipant = ()=>{
    const hackathon = "Search Participant"
    return(
        <SearchStyle>
            <div className="container">
                {/* <div className="row">
                    <div className="col-9"> */}
                    <div className="search">
                    <div className="searchInput">
                        <span className="icon_search">
                            <img src={search_icon} alt="Search" />
                        </span>
                        <input type="text" placeholder="Find participant" />
                        </div>
                        <div className="btn btn-red btn-search">
                            {hackathon}
                        </div>
                    </div>
                       
                   
            </div>
        </SearchStyle>
    )
}

const SearchStyle = styled.div`

.search{
    display: flex;
    /* flex-wrap: wrap; */
    width: 100%;
    @media (max-width: 517px) {
    /* flex-wrap: wrap; */
    flex-direction: column;
    gap: 10px;
  }

}
.searchInput{
    display: flex;
    align-items: center;
    border: 2px solid #B7C3C7;
    width: inherit;
    span{
        padding: 5px;
    }
    input{
        border: none;
        padding: 5px;
    }
}
.btn-search{
    /* width: 100%; */
    padding: 0 1em;
    /* height: 100%; */
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 517px) {
    padding: 10px;
  }
}  
`

export default SearchParticipant;