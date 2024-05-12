import styled from "styled-components"

import search_icon from "../../assets/search_icon.png"

const SearchParticipant = ()=>{
    const hackathon = "Search Participant"
    return(
        <SearchStyle>
            <div className="container">
                <div className="row">
                    <div className="col-9">
                        <div className="searchInput">
                        <span className="icon_search">
                            <img src={search_icon} alt="Search" />
                        </span>
                        <input type="text" placeholder="Find participant" />
                        </div>
                        
                    </div>
                    <div className="col-3">
                        <div className="btn btn-red btn-search">
                            {hackathon}
                        </div>
                    </div>
                </div>
            </div>
        </SearchStyle>
    )
}

const SearchStyle = styled.div`
.searchInput{
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #B7C3C7;
    border-radius: 5px;
    span{
        padding: 5px;
    }
    input{
        width: 100%;
        border: none;
        padding: 5px;
    }
}
.btn-search{
    width: 100%;
    padding: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}  
`

export default SearchParticipant;