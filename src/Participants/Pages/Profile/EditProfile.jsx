import React, {useState} from 'react'
import styled from "styled-components";
import { RED_COLOR, GREEN_COLOR } from '../../../style/Colors'
import SideEdit from '../../Components/SideEdit';

const EditProfile = () => {

  return (
    <div>
        <EditProfil>
            <div className="bg">
                <p>
                    Modifier les Paramètres
                </p>
            </div>
            <SideEdit/>
        </EditProfil>
    </div>
  )
}

const EditProfil = styled.div`
    .bg {
    position: relative;
    z-index: -1;
    height: 200px;
    width: 100vw;
    background: linear-gradient(to right, ${GREEN_COLOR}, ${RED_COLOR});
  }
  .bg p{
    font-size: 34px;
    font-weight: bold;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: aliceblue;
    padding-top: 80px;
    padding-left: 30px;
  }
`;


export default EditProfile
