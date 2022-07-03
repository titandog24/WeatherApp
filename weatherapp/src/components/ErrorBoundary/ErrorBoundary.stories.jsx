import React from 'react';
import ErrorBoundary from './';

export default {
    title: 'ErrorBoundary',
    component: ErrorBoundary
}

const WithoutError = () => <h1>Sin errores</h1>
const prop = (undefined)
const WithError = () => <h1>{prop.hola}</h1>


export const ErrorBoundaryExampleWithError = () => 
<ErrorBoundary>
    <WithError/>
</ErrorBoundary>
export const ErrorBoundaryExampleWithoutError = () => 
<ErrorBoundary>
    <WithoutError />
</ErrorBoundary>