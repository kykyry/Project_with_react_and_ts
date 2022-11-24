import React from "react"

interface ModalProps {
    children: React.ReactNode
    title: string
    onClose: () => void
}
export function Modal({ children, title, onClose }: ModalProps) {

    return (
        <>
            <div onClick={onClose} style={{ background: 'black', opacity: '0.5', top: '0', left: '0', right: '0', bottom: '0', position: 'fixed' }}></div>
            <div style={{ background: 'white', position: 'absolute', width: '500px', transform: 'translate(50%)', zIndex: '1' }}>
                <h1>{title}</h1>
                {children}
            </div>
        </>
    )
}