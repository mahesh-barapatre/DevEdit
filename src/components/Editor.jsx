import { useState } from 'react';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import { Controlled as ControlledEditor } from 'react-codemirror2';

import { Box, styled } from '@mui/material';
import { CloseFullscreen } from '@mui/icons-material';

import '../App.css';

const Container = styled(Box)`
    flex-grow: 1;
    flex-basic: 0;
    display: flex;
    flex-direction: column;
    padding: 0 8px 8px;
`

const Header = styled(Box)`
    display: flex;
    justify-content: space-between;
    background: #060606;
    color: #AAAEBC;
    font-weight: 700;
`
const Heading = styled(Box)`
    background: #1d1e22;
    padding: 9px 12px;
    display: flex
`

const Editor = ({ heading, language, value, onChange, icon, color }) => {

    const [open, setOpen] = useState(true);

    const handleChange = (editor, data, value) => {
        onChange(value);
    }
    
    const reset = ()=>{
        onChange('')
    }

    return (
        <Container style={open ? null : {flexGrow: 0} }>
            <Header>
                <Heading>
                    <Box 
                        component="span"
                        style={{
                            background: color,
                            borderRadius: 5,
                            marginRight: 5,
                            height: 20,
                            width: 20,
                            display: 'flex',
                            placeContent: 'center',
                            color: '#000',
                            paddingBottom: 2
                        }}
                    >
                        {icon}
                    </Box>
                    {heading}
                </Heading>
                <div style={{display:'flexbox',
                flexDirection:'column'
            }}>
                <CloseFullscreen 
                    fontSize="small"
                    style={{ alignSelf: 'center'}}
                    onClick={() => setOpen(prevState => !prevState)}
                />
                <button style={{
                    backgroundColor:'red',
                    padding:'2',
                    margin:'6px',
                    borderStyle:'none',
                    borderRadius:'3px',
                    height:'60%',
                    fontWeight:'bold',
                    color:'white'
                }}
                onClick={reset}
                >X</button>
                </div>
            </Header>
            <ControlledEditor 
                onBeforeChange={handleChange}
                value={value}
                className="controlled-editor"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    lineNumbers: true,
                    theme: 'material'
                }}
            />
        </Container>
    )
}

export default Editor;