import React, { Component } from 'react';
import './aceEditor';

export default class AceEditor extends Component { 
        
        update(){
            var idoc = document.getElementById('iframe').contentWindow.document;

            idoc.open();
            idoc.write(editor.getValue());
            idoc.close();
        }

        setupEditor(){

        window.editor = ace.edit("editor");
        editor.setTheme("ace/theme/monokai");
        editor.getSession().setMode("ace/mode/css");
        editor.setValue(`
        .class1 {}

        .class2 {}

        .class3 {}

        .class4 {}

        .class5 {}
        `,1); //1 = moves cursor to end

        editor.getSession().on('change', function() {
            update();
        });

        editor.focus();
        
        
        editor.setOptions({
            fontSize: "10pt",
            showLineNumbers: false,
            showGutter: false,
            vScrollBarAlwaysVisible:true,
            enableBasicAutocompletion: false, enableLiveAutocompletion: false
        });

        editor.setShowPrintMargin(false);
        editor.setBehavioursEnabled(false);
        }

        setupEditor();
        update();
    
    
    
        render() {
        
            return (
            <div>
                
            <div id='container'>

                <div id="editor">
                </div>
          
                <iframe id='iframe' frameBorder="0">
                </iframe>
            </div>
            
            </div>
        )
    }
}