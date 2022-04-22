export default function Modal({active, setActive, children}) {
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className='modal__container' onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}