import withSidebarLayout from './withSidebarLayout';

export const pageWithLayout = Wrapped => {
    return    withSidebarLayout(Wrapped);
} 

export default pageWithLayout;