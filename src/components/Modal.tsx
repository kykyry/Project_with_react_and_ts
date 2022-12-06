import React from "react"

interface ModalProps {
    children: React.ReactNode
    title: string
    onClose: () => void
}
export function Modal({ children, title, onClose }: ModalProps) {

    
    return (
        <>
            <div className="modalWindowBackground" onClick={onClose} ></div>
            <div className="modalWindow">
                <h1>{title}</h1>
                {children}
            </div>
        </>
    )
}