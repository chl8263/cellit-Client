import React, { useState } from "react";
import { connect } from "react-redux";

import { PAGE_ROUTE, HTTP, MediaType} from "../../util/Const";
import errorCodeToAlertCreater from "../../util/ErrorCodeToAlertCreater";

import SearchCellUnitList from "../mainBoard/SearchCellUnitList";

const SearchAllCellUnitModal = ( { appInfo, getCells } ) => {

    const [searchCellname, setSearchCellname] = useState("");
    const [searchedCellList, setSearchedCellList] = useState([]);

    const onSearchCreateCellname = (e) => {
        setSearchCellname(e.target.value);
    };

    const onSubmitSearchCell = (e) => {
        e.preventDefault();
        console.log(searchCellname);

        const JWT_TOKEN = appInfo.appInfo.jwtToken;

        const modalClose = document.getElementById("modalClose");
        
        //s: Ajax ----------------------------------
        fetch(HTTP.SERVER_URL + `/api/cells?query=cellName%3D${searchCellname}`, {
            method: HTTP.GET,
            headers: {
                'Content-type': MediaType.JSON,
                'Accept': MediaType.HAL_JSON,
                'Authorization': HTTP.BASIC_TOKEN_PREFIX + JWT_TOKEN
            },
        }).then((res) => {
            if(!res.ok){
                throw res;
            }
            return res;
        }).then((res) => {
            return res.json();
        }).then(res => {
            if("_embedded" in res && res._embedded.cellEntityModelList.length > 0){
                console.log(res._embedded.cellEntityModelList);
                setSearchedCellList(res._embedded.cellEntityModelList);
            }else {

            }
        }).catch(error => {
            console.error(error);
            alert("Cannot create cell, Please try later.");
        });
        //e: Ajax ----------------------------------
    };

    return (
        <>
            <div className="modal fade none-border" id="searchAllCellUnit">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title"><strong>Search All Cell Unit</strong></h4>
                            <button id="modalClose" type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        </div>
                        
                            <div className="modal-body">
                                <form id="createNewCellUnitForm" onSubmit={onSubmitSearchCell}>
                                    <div className="row">
                                        <div className="col-md-8">
                                            <label className="control-label">Cell Unit Name</label>
                                            <input style={{"display": "inline"}} id="cellName" name="cellName" className="form-control form-white" onChange={onSearchCreateCellname} value={searchCellname} placeholder="Enter cell name to search" type="text" />
                                            <button style={{"display": "inline"}} type="submit" className="btn btn-secondary waves-effect">Search</button>
                                        </div>
                                    </div>
                                </form>
                                <hr/>
                                <label className="control-label">Result of Cell List</label>
                                {searchedCellList.map( x => {
                                    return <SearchCellUnitList key={x.cellId} cellInfo = {x}/>
                                })}
                                {/* <div className="row">
                                    <div className="col-md-6">
                                        <label className="control-label">Cell Unit Name</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="control-label">Cell Unit Name</label>
                                    </div>
                                </div> */}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = (state, ownProps) => {
    return { appInfo: state };
}

export default connect(mapStateToProps) (SearchAllCellUnitModal);