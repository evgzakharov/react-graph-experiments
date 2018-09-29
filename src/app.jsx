import React from 'react';
import cn from 'arui-feather/cn';

@cn('index')
export default class IndexPage extends React.Component {
    render(cn) {
        return (
            <div
                className={ cn('test') }
            >
                { 'index test' }
            </div>
        );
    }
}
