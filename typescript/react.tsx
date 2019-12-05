/* declare namespace JSX {
    interface IntrinsicElements {
        [ele: string]: any;
    }
}
 */


 // Function component
 interface FooProp {
     name: string;
     x: number;
     y: number;
 }

 declare function AnotherComponent(prop: {name: string})
 function componentFoo(prop: FooProp) {
     return <AnotherComponent name={prop.name} />
 }

 const Button = (prop: {value: string}, context: {color: string}) => <button></button>


 /* 
    Class based components
 */
 class MyComp {
     render() {}
 }

 // Construct a signature 
 var myComp = new MyComp()
 
 function myFunc() {
     return {
         render: () => {

         }
     }
 }

 var myComp = myFunc()

 // Attribute type checking
 declare namespace JSX {
     interface IntrinsicElements {
         foo: {
             bar?: boolean;
         }
     }
 }

 <foo bar />

 declare namespace JSX {
     interface ElementAttributeProperty {
         props;
     }
 }

 class comp {
     props: {
         foo?: string;
     }
 }

 {/* <comp foo="bar" /> */}


 declare namespace JSX {
     interface IntrinsicElements {
         foof: {
             requiredProp: string;
             optionalProp?:number;
         }
     }
 }

 <foof requiredProp="bar" optionalProp={2}/>


 /* 
    INTEGRATION WITH REACT
 */
 interface Props {
     foop: string;
 }

 import React, { Component } from 'react'
 
 export default class a extends Component<Props, {}> {
    constructor() {
        super()

        this.state = {
            foop: ""
        }
    }

     render() {
         return (
             <span>
                 {this.state.foop}
             </span>
         )
     }
 }
 
 