import { createContext, useState } from 'react';


export const DataContext = createContext(null);

const DataProvider = ({ children }) => {

    const [html, setHtml] = useState('<!--write your html code here-->');
    const [js, setJs] = useState('//write your js code here');
    const [css, setCss] = useState('/*write your css code here */ ');

    return (
        <DataContext.Provider value={{
            html,
            setHtml,
            css,
            setCss,
            js,
            setJs
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;