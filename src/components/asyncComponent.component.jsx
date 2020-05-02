import React from 'react';

export default function asyncComponent(importedComponent) {
    class AsyncComponent extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                component: null
            }
        }

        async componentDidMount(){
            const { default: component } = await importedComponent;
            this.setState({
                component: component
            })
        }


        render(){
            const Component = this.state.component;
            return Component ? <Component {...this.props} /> : null
        }
    }
    console.log(importedComponent)
    return AsyncComponent
}