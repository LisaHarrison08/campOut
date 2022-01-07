// This is an example of a class component. It begins with the class keyword, followed by a capitalized component name that should be unique within your entire app.
// Then, you use the JavaScript class inheritance keyword extends, followed by Component, which is the parent class provided by the React library from which you are creating this child class. 

import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderDirectoryItem({ campsite}) {
    return (
        <Card>
            <CardImg width="100%" src={campsite.image} alt={campsite.name} />
            <CardImgOverlay>
                <CardTitle>{campsite.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

function Directory(props) {

    const directory = props.campsites.map(campsite => {
        return (
            <div key={campsite.id} className="col-md-5 m-1">
                <RenderDirectoryItem campsite={campsite}/>
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {directory}
            </div>
        </div>
    );
}

export default Directory;