import React, {Component} from 'react';

export default class PageNotFound extends Component {

    render() {
        return (
            <div>
                <h3>Page <code>{this.props.location.pathname}</code> not found </h3>
            </div>
        );
    }

}