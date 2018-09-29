import React from 'react';
import Type from 'prop-types';
import cn from 'arui-feather/cn';

@cn('action-graph')
export default class ActionsGraph extends React.Component {
    static propTypes = {
        actions: Type.arrayOf(Type.shape())
    };

    render(cn) {
        return (
            <div
                className={ cn('test') }
            >
                { 'graph test' }
            </div>
        );
    }
}
