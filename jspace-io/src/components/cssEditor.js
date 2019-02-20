import React, { Component } from 'react';
import AceEditor from 'react-ace';
import brace from 'brace';
import 'brace/mode/css';
import 'brace/theme/dracula';
import './cssEditor';

export default class CssEditor extends Component { 
        
        constructor(props, context){
            super(props, context)
            this.onChange = this.onChange.bind(this);
        }

        onChange(newValue){
            console.log('change', newValue);
        }

        render() {
        
            return (
            <div>
                
            <AceEditor 
            mode="css"
            theme="dracula"
            onChange={this.onChange}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{$blockScrolling : true}} />
            
            </div>
        )
    }
}