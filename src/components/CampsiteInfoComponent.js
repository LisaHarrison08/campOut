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

    // Comments

    renderComments(comments) {
        if (comments) {
            return (
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map((comment) => {
                        <div key={comment.id}></div>;
                        <p>{comment.text}</p>;
                        <p>{comment.author}</p>;
                        {
                            new Intl.DateTimeFormat('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: '2-digit',
                            }).format(new Date(Date.parse(comment.date)));
                        }
                    })}
                </div>
            );
        }
        return <div></div>;
    }

    render() {
        if (this.props.campsite) {
            return (
                <div className="container">
                    <div className='row'>
                        {this.renderCampsite(this.props.campsite)}
                        {this.renderComments(this.props.campsite.comments)}
                    </div>
                </div>
            );
        }
        return <div />;
    }

}






export default CampsiteInfo;

