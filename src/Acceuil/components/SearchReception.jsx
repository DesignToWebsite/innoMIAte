import { useEffect, useState } from "react";
import search_icon from "../../assets/search_icon.png"; // Replace with the actual path to your search icon
import styled from "styled-components";

const SearchReception = ({ users, setFilteredUsers }) => {
    const [searchValue, setSearchValue] = useState("");
    const [searchCriteria, setSearchCriteria] = useState("email");
  // console.log(users)
    useEffect(() => {
      if (searchCriteria === "noTeam") {
        const filtered = users.filter(user => !user.groupName);
        setFilteredUsers(filtered);
      } else if (searchCriteria === "leader") {
        const filtered = users.filter(user => user.isLeader);
        setFilteredUsers(filtered);
      } 
      else {
        setFilteredUsers(users); // Reset to original list if search value is empty
      }
    }, [searchCriteria, users]);
  
    const handleSearch = () => {
      // console.log(searchCriteria, searchValue)
      if (searchCriteria === "email") {
        const filtered = users.filter((user) =>
          user.email.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredUsers(filtered);
      }
      if (searchCriteria === "teamName") {
        const filtered = users.filter((user) =>
          user.groupName === searchValue.toLowerCase()
        );
        setFilteredUsers(filtered);
      }
      if (searchCriteria === "name") {
        const filtered = users.filter((user) =>
          user.firstName
          .toLowerCase()
          .includes(searchValue.toLowerCase())
          ||
          user.lastName
          .toLowerCase()
          .includes(searchValue.toLowerCase())


        );
        setFilteredUsers(filtered);
      }
      
    };
  
    return (
      <SearchStyle>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-9">
              <div className="searchInput">
                <span className="icon_search">
                  <img src={search_icon} alt="Search" />
                </span>
                <input
                  type="text"
                  placeholder="Find your next hackathon"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  disabled={searchCriteria !== "email" && searchCriteria !== "teamName" && searchCriteria !== "name"}
                />
                <select
                  name="optionSearch"
                  id="optionSearch"
                  value={searchCriteria}
                  onChange={(e) => setSearchCriteria(e.target.value)}
                >
                  <option value="email">Email</option>
                  <option value="noTeam">Participant sans team</option>
                  <option value="leader">Leader</option>
                  <option value="teamName">Nom du group</option>
                  <option value="name">Nom</option>
                </select>
              </div>
            </div>
            <div className="col-12 col-md-3 mt-2 mt-md-0" >
              <div className="btn btn-red btn-search" onClick={handleSearch}>
              Rechercher 
              </div>
            </div>
          </div>
        </div>
      </SearchStyle>
    );
  };
const SearchStyle = styled.div`
    margin: 2em auto;

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
        &:focus {
    border: none;
    font-size: inherit;
    border-radius: 0;
    box-shadow: none;
    outline: none;
}
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

export default SearchReception;