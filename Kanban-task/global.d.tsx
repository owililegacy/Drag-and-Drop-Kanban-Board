import * as React from 'react';

declare global {
  namespace JSX {
    // Redirect to React's new JSX namespace
    export type Element = React.JSX.Element;
    export interface ElementClass { }
    export interface ElementAttributesProperty { }
    export interface IntrinsicElements extends React.JSX.IntrinsicElements { }
    export interface IntrinsicAttributes extends React.JSX.IntrinsicAttributes { }
  }
}