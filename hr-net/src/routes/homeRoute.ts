import type { RouteObject } from 'react-router';

const homeRoute: RouteObject = {
    index: true,
    loader: loader,
};

async function loader() {}

export default homeRoute;
