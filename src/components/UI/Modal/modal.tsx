import React, {ReactNode} from 'react';
import styles from './style.module.css'
interface ModalProps {
    children: ReactNode;
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({children,visible,setVisible} : ModalProps) => {
    const rootStyles = [styles.modal__wrapper]
    if (visible){
        rootStyles.push(styles.active)
    }
    return (
        <div className={rootStyles.join(' ')} onClick={() =>setVisible(false)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <span className={styles.modal__close} onClick={() => setVisible(false)}>
                    &times;
                </span>
                {children}
            </div>
        </div>
    );
};

export default Modal;