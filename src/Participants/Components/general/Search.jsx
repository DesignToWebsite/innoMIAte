import styled from "styled-components"

import search_icon from "../../../assets/search_icon.png"
import { RED_COLOR } from "../../../style/Colors"

const Search = ()=>{
    const hackathon = "Search"
    return(
        <SearchStyle>
            <div className="container">
                <div className="search">
                <div className="searchInput">
                        <span className="icon_search">
                            <img src={search_icon} alt="Search" />
                        </span>
                        <input type="text" placeholder="Find your next hackathon" />
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
    width: 100%;
    align-items: center;
}
.searchInput{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #B7C3C7;
    
    /* border-radius: 5px; */
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
    border: 1px solid ${RED_COLOR};
    width: fit-content;
    padding:5px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}  

`

export default Search;