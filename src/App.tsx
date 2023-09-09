import { useState } from 'react';
import './App.css';
import ReactMarkdown from "react-markdown";
import { FaFreeCodeCamp  } from 'react-icons/fa';



const defaultMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '/*' && lastLine == '*/') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;





function App() {
const [content, setContent] = useState<string>(defaultMarkdown);
const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
  setContent(event.target.value);
}





  return (
    <>
      <div id="app" className='background'>
        <div className='container'>
          <div className="editorWrap">
            <div className="toolbar-editor">
              <i><FaFreeCodeCamp size="25" /></i>
              <h3 className="text-tag">Editor</h3>
            </div>
            <textarea name="editor-text" id="editor" value={content} 
            onChange={handleContentChange}
            >{content}
            </textarea>
          </div>
          <div className="converter"></div>
          <div className="previewWrap">
            <div className="toolbar-previewer">
              <i><FaFreeCodeCamp size="25" /></i>
              <h3 className="text-tag">Previewer</h3>
            </div>
            <div id="preview" >
              <ReactMarkdown >{content}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default App
