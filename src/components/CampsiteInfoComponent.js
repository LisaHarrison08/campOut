import React, { Component } from "react";
// import { Navbar, NavbarBrand } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class CampsiteInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsite: null,
        };
    }

    renderCampsite(campsite) {
        return (
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                <CardBody>
                    <CardTitle>{campsite.name}</CardTitle>
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    render() {
        if (this.props.campsite) {
            return (
                <div className='row'>
                    {this.renderCampsite(this.props.campsite)}
                </div>
            );
        }
        return <div />;
    }

}






export default CampsiteInfo;

