// import styled from "styled-components";

// const AddCompetition = () => {
//     const handleAddMiathon = async ()=>{
//         const url = "http://localhost:5299/api/Competition";
//         const competition = {
//             "competitionId": 0,
//             "name": "string",
//             "description": "string",
//             "descriptionTop": "string",
//             "responsibleEmail": "string",
//             "date": "2024-06-08T13:42:52.327Z",
//             "tags": [
//               "string"
//             ],
//             "theme": [
//               "string"
//             ],
//             "rules": "string",
//             "organizers": [
//               {
//                 "name": "name",
//                 "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeo1aedo_F7bzoaLcipBM4OcNYw92D2cA6hzD2PAMEEg&s"
//               },
//           {
//                 "name": "name",
//                 "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeo1aedo_F7bzoaLcipBM4OcNYw92D2cA6hzD2PAMEEg&s"
//               }
//             ],
//             "partnerships": [
//               {
//                 "name": "name",
//                 "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeo1aedo_F7bzoaLcipBM4OcNYw92D2cA6hzD2PAMEEg&s"
//               },
//           {
//                 "name": "name",
//                 "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeo1aedo_F7bzoaLcipBM4OcNYw92D2cA6hzD2PAMEEg&s"
//               }
//             ],
//             "sponsors": [
//               {
//                 "name": "name",
//                 "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeo1aedo_F7bzoaLcipBM4OcNYw92D2cA6hzD2PAMEEg&s"
//               },
//           {
//                 "name": "name",
//                 "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeo1aedo_F7bzoaLcipBM4OcNYw92D2cA6hzD2PAMEEg&s"
//               }
//             ],
//             "prizes": [
//               {
//                 "beginningRank": 0,
//                 "endingRank": 0,
//                 "name": "First winner",
//                 "amount": 10000,
//                 "currency": "$",
//                 "description": "first winner"
//               },
//           {
//                 "beginningRank": 0,
//                 "endingRank": 0,
//                 "name": "second winner",
//                 "amount": 10000,
//                 "currency": "$",
//                 "description": "second winner"
//               },
//           {
//                 "beginningRank": 0,
//                 "endingRank": 0,
//                 "name": "third winner",
//                 "amount": 10000,
//                 "currency": "$",
//                 "description": "third winner"
//               }
//             ],
//             "location": "Oujda",
//             "targetAudience": "All",
//             "url": "miathon02",
//             "photo": "https://pix4free.org/assets/library/2021-06-16/originals/competition.jpg",
//             "coverPhoto": "https://pix4free.org/assets/library/2021-06-16/originals/competition.jpg",
//             "pdfRules": "https://drive.google.com/file/d/1wZO75Poq0mBofXs34fJGKwuqdDBJ0_PA/view?usp=drive_open",
//             "startDate": "2024-06-08T13:42:52.328Z",
//             "deadLine": "2024-06-08T13:42:52.328Z"
//           }
//         try {
//           const response = await axios.post(url, competition);
//           if (response.data) {
//             setInProgress(false);
//             window.location.reload()
    
//             confirmation? navigate("/confirmation?success") : navigate("/login")
    
    
//           }
//         } catch (error) {
//           setInProgress(false);
//           console.error(error);
//         }
//     }
//   return (
//     <>
//       <AddCompetitionStyle className="container">
//         <h1>Add Miathon 02</h1>
//         <button onClick={handleAddMiathon} className="btn btn-red">Add competition</button>
//       </AddCompetitionStyle>
//     </>
//   );
// };
// const AddCompetitionStyle = styled.div`
//   min-height: 80vh;
//   /* width:; */
//   display: flex;
//   flex-direction: column;
//   /* align-items: start; */
//   /* justify-content: center; */
//  h1{
//     margin: 1em auto;
//  }
//   button{
//     margin: 3em auto;
//   }
// `;
// export default AddCompetition;
