import React from 'react';
import styled,{css} from 'styled-components';
import {Link, useHistory, useLocation} from 'react-router-dom';


const SideBarClickUserStyle = styled.div `
    a{
        color: #dedede;
    }
    .userList-box{
        color: #6c63ff;
        min-width: 126px;
        display:flex;
        align-items:center;
        font-size: 20px;
        font-weight: bold;
        
        justify-content: space-between;
        margin: 96px 79px 0px;
    }

    .subjectList-box{
      min-width: 126px;
      display:flex;
      align-items:center;
      font-size: 20px;
      font-weight: bold;
      justify-content: space-between;
      margin: 46px 79px 0px;
    }
`

const SideBarClickSubjectStyle = styled.div `
    a{
        color: #dedede;
    }
    .userList-box{
        min-width: 126px;
        display:flex;
        align-items:center;
        font-size: 20px;
        font-weight: bold;
       
        justify-content: space-between;
        margin: 96px 79px 0px;
    }

    .subjectList-box{
    color: #6c63ff;
      min-width: 126px;
      display:flex;
      align-items:center;
      font-size: 20px;
      font-weight: bold;
      justify-content: space-between;
      margin: 46px 79px 0px;
    }
`

const ClickUserList = () =>{
    return(
        <SideBarClickUserStyle>
            <Link to='/user'>
                <div className = "userList-box">
                    <img src='/img/ProfileUserOn.svg'/>
                    사용자 관리
                </div>
            </Link>

            <Link to='/subject'>
                <div className = "subjectList-box">
                    <img src='/img/MenuOff.svg'/>
                    과목 관리
                </div>
            </Link>
        </SideBarClickUserStyle>
    );
}

const ClickSubjectList = () =>{
    return(
        <SideBarClickSubjectStyle>
            <Link to='/user'>
                <div className = "userList-box">
                    <img src='/img/ProfileUserOff.svg'/>
                    사용자 관리
                </div>
            </Link>
            
            <Link to='/subject'>
                <div className = "subjectList-box">
                    <img src='/img/MenuOn.svg'/>
                    과목 관리
                </div>
            </Link>
        </SideBarClickSubjectStyle>
        
    );
}

const SideBarClick = () =>{
    const location = useLocation();
    console.log(location.pathname);
    return(
       <div>
           {location.pathname === '/user' ? ClickUserList() : ClickSubjectList()} 
       </div>
    )
}
export default SideBarClick;