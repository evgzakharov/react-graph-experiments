import React from 'react';
import cn from 'arui-feather/cn';

import actionList from './data/action-list.json';

@cn('index')
export default class IndexPage extends React.Component {
    static parseGraph(graph) {
        return graph.map(next => next.actionId);
    }
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        let actionGraph = actionList.map(action => ({
            id: action.id,
            next: IndexPage.parseGraph(action.graphSettings ? JSON.parse(action.graphSettings) : []),
            depends: action.depends ? JSON.parse(action.depends) : []
        }));
        this.setState({ actionGraph });
    }

    render(cn) {
        return (
            <div>
                { this.state.actionGraph &&
                <pre
                    className={ cn('test') }
                >
                    { JSON.stringify(this.state.actionGraph, null, 2) }
                </pre>
                }
            </div>
        );
    }
}
