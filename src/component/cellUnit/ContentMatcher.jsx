import React from "react";

import Channel from "./content/channel/Channel";
import SettingContainer from "./content/setting/SettingContainer";

const ContentMatcher = (props) => {

    if(props.match.params.name === "calendar"){
        return (<div>calendar</div>);
    }else if(props.match.params.name === "charts"){
        return (<div>dash board</div>);
    }else if(props.match.params.name === "gallery"){
        return (<div>dash board</div>);
    }else if(props.match.params.name === "channel"){
        return (<Channel data={props}/>);
    }else if(props.match.params.name === "setting"){
        return (<SettingContainer />);
    }
    return (
        <>
        </>
    );
}

export default ContentMatcher;