import '../styles/modal.scss';

const SettingsModal = () => {

    return (
        <dialog id="settingsModal" className="settings-modal">
            <div className='user-info'>
                <div className='photo'>
                
                </div>
                <div className='user-text'>
                    <span className='name'>Иван Лучегов</span>
                    <span className='job'>Web-разработчик</span>
                </div>
                <hr></hr>
                <div className='settings-list'>
                    <div className='item'>
                        <div></div>
                    </div>
                </div>
                <hr></hr>
                <div className='settings-list leave'>
                    <div className='item'>
                        <div></div>
                    </div>
                </div>
            </div>
        </dialog>
    )
}

export default SettingsModal;