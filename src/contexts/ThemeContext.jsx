import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext()

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if(!context) {
        throw new Error("useTheme must be used within the ThemeProvider")
    } return context
}

export const ThemeProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(()=> {
        const savedTheme = localStorage.getItem('theme')
        const sysPrefTheme = window.matchMedia('(prefers-color-scheme: dark)').matches

        if(savedTheme === 'dark' || (!savedTheme && sysPrefTheme)) {
            setIsDarkMode(true)
            document.documentElement.classList.add('dark')
        } else {
            setIsDarkMode(false)
            document.documentElement.classList.remove('dark')
        }
    }, [])

    const toggleTheme = () => {
        setIsDarkMode(prev => {
            const newTheme = !prev;
            if(newTheme) {
                document.documentElement.classList.add('dark')
                localStorage.setItem('theme', 'dark')
            } else {
                document.documentElement.classList.remove('dark')
                localStorage.setItem('theme', 'dark')
            }
            return newTheme
        })
    }
    
    const value = {
        isDarkMode, toggleTheme
    }

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}