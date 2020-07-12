import React, { useEffect, useState } from "react";
import $ from "jquery";
import { connect } from "react-redux";

import PreLoader from "../component/PreLoader";
import { PAGE_ROUTE, HTTP, MediaType} from "../util/Const";
import { actionCreators } from "../store";

import MainBoardTopbar from "../component/mainBoard/frame/MainBoardTopbar";
import CellsListContainer from "../component/mainBoard/frame/CellsListContainer";
import CreateCellUnitModal from "../component/mainBoard/CreateCellUnitModal";
import SearchAllCellUnitModal from "../component/mainBoard/SearchAllCellUnitModal";

const MainBoard = ( {appInfo} ) => {

    const [cellList, setCellList] = useState([]);

    useEffect(() => {
        history.pushState('','', '/MainBoard');
        $(".preloader").fadeOut(); // Remove preloader.

        getCellList(); //get Cells with current user
    }, []);

    const getCellList = () => {
        const JWT_TOKEN = appInfo.appInfo.jwtToken;
        //s: Ajax ----------------------------------
        fetch(HTTP.SERVER_URL + `/api/accounts/${appInfo.userInfo.currentUserId}/cells`, {
            method: HTTP.GET,
            headers: {
                'Content-type': MediaType.JSON,
                'Accept': MediaType.HAL_JSON,
                'Authorization': HTTP.BASIC_TOKEN_PREFIX + JWT_TOKEN
            },
        }).then(res => {
            return res.json();
        }).then(res => {
            if("errors" in res){
                try{
                    errorCodeToAlertCreater(json);
                }catch(error){
                    throw error;
                }
            }else if("_embedded" in res){
                console.log(res._embedded.cellEntityModelList);
                setCellList(res._embedded.cellEntityModelList);
            }
        }).catch(error => {
            console.error(error);
            alert("Client unexpect error.");
        });
        // e: Ajax ----------------------------------
    };

    
    return (
        <>
            <PreLoader />

            <MainBoardTopbar />

            <CellsListContainer cellList={cellList}/>

            {/* <!-- Modal Create new Cell Unit --> */}
            <CreateCellUnitModal getCellList = {getCellList}/>

            {/* <!-- Modal Search all Cell Unit --> */}
            <SearchAllCellUnitModal currentCellList={cellList}/>
        </> 
    );
};

const mapStateToProps = (state, ownProps) => {
    return { appInfo: state };
}

const mapDispathToProps = (dispatch) => {
    return {
        switchLogin: () => dispatch(actionCreators.switchMainPageRoute(PAGE_ROUTE.LOGIN)),
        initJwtToken: () => dispatch(actionCreators.addJwtToken("")),
        initUserInfo: () => dispatch(actionCreators.addUserInfo("")),
    };
}

export default connect(mapStateToProps, mapDispathToProps) (MainBoard);