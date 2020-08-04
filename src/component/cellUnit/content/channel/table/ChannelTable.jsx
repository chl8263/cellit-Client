import React from "react";

import ChannelTableTr from "../table/ChannelTableTr";

const ChannelTable = () => {
    return(
        <>
            <table id="zero_config" className="table table-striped table-bordered dataTable" role="grid" aria-describedby="zero_config_info">
                <thead>
                    <tr role="row">
                        <th className="sorting_asc" tabIndex="0" aria-controls="zero_config" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Name: activate to sort column descending" style={{"width": "120px"}}>Number</th>
                        <th className="sorting" tabIndex="0" aria-controls="zero_config" rowSpan="1" colSpan="1" aria-label="Position: activate to sort column ascending" style={{"width": "400"}}>Subject</th>
                        <th className="sorting" tabIndex="0" aria-controls="zero_config" rowSpan="1" colSpan="1" aria-label="Office: activate to sort column ascending" style={{"width": "151px"}}>Writer</th>
                        <th className="sorting" tabIndex="0" aria-controls="zero_config" rowSpan="1" colSpan="1" aria-label="Start date: activate to sort column ascending" style={{"width": "135px"}}>Time</th>
                        <th className="sorting" tabIndex="0" aria-controls="zero_config" rowSpan="1" colSpan="1" aria-label="Salary: activate to sort column ascending" style={{"width": "120px"}}>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    <ChannelTableTr />
                    <ChannelTableTr />
                    <tr role="row" className="odd">
                        <td className="sorting_1">Airi Satou</td>
                        <td>Accountant</td>
                        <td>Tokyo</td>
                        <td>33</td>
                        <td>2008/11/28</td>
                    </tr>
                    {/* <tr role="row" className="even">
                        <td className="sorting_1">Angelica Ramos</td>
                        <td>Chief Executive Officer (CEO)</td>
                        <td>London</td>
                        <td>47</td>
                        <td>2009/10/09</td>
                        <td>$1,200,000</td>
                    </tr><tr role="row" className="odd">
                        <td className="sorting_1">Ashton Cox</td>
                        <td>Junior Technical Author</td>
                        <td>San Francisco</td>
                        <td>66</td>
                        <td>2009/01/12</td>
                        <td>$86,000</td>
                    </tr><tr role="row" className="even">
                        <td className="sorting_1">Bradley Greer</td>
                        <td>Software Engineer</td>
                        <td>London</td>
                        <td>41</td>
                        <td>2012/10/13</td>
                        <td>$132,000</td>
                    </tr><tr role="row" className="odd">
                        <td className="sorting_1">Brenden Wagner</td>
                        <td>Software Engineer</td>
                        <td>San Francisco</td>
                        <td>28</td>
                        <td>2011/06/07</td>
                        <td>$206,850</td>
                    </tr><tr role="row" className="even">
                        <td className="sorting_1">Brielle Williamson</td>
                        <td>Integration Specialist</td>
                        <td>New York</td>
                        <td>61</td>
                        <td>2012/12/02</td>
                        <td>$372,000</td>
                    </tr><tr role="row" className="odd">
                        <td className="sorting_1">Bruno Nash</td>
                        <td>Software Engineer</td>
                        <td>London</td>
                        <td>38</td>
                        <td>2011/05/03</td>
                        <td>$163,500</td>
                    </tr><tr role="row" className="even">
                        <td className="sorting_1">Caesar Vance</td>
                        <td>Pre-Sales Support</td>
                        <td>New York</td>
                        <td>21</td>
                        <td>2011/12/12</td>
                        <td>$106,450</td>
                    </tr><tr role="row" className="odd">
                        <td className="sorting_1">Cara Stevens</td>
                        <td>Sales Assistant</td>
                        <td>New York</td>
                        <td>46</td>
                        <td>2011/12/06</td>
                        <td>$145,600</td>
                    </tr><tr role="row" className="even">
                        <td className="sorting_1">Cedric Kelly</td>
                        <td>Senior Javascript Developer</td>
                        <td>Edinburgh</td>
                        <td>22</td>
                        <td>2012/03/29</td>
                        <td>$433,060</td>
                    </tr> */}
                </tbody>
            </table>
        </>
    );
};

export default ChannelTable;