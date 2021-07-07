import React from 'react';

export default function (Component) {
    return class Authenticated extends React.Component {
        render() {
            const token = localStorage.token
            const logMessage = <div>Please log in to see this content</div>
            return (
                <div>
                    {token ? <Component {...this.props}/> : logMessage}
                </div>
            )
        }
    }
}