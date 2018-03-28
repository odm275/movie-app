import React from 'react';
import { pageWithLayout } from '../../containers/page';


export const Home = props => (
    <div className='home'>
        <h2>Welcome home, Reactors!</h2>
    </div>
);

export default pageWithLayout(Home);