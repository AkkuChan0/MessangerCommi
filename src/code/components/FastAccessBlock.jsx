import SettingsModal from "./SettingsModal";

const FastAccessBlock = () => {

    const showSettings = () => { document.getElementById('settingsModal').showModal() };

    return (
        <>
            <div className="fab">
                <div className="main-fab">
                    <div className="fab-about">
                        <div className="photo">

                        </div>
                        <div className="name">
                            <span>Иван Л.</span>
                        </div>
                    </div>
                    <div className="fab-buttons">
                        <button 
                            className="icon-button settings settings_30x30"
                            onClick={() => { showSettings()}}
                        ></button>
                    </div>
                </div>
            </div>
            <SettingsModal></SettingsModal>
        </>
    )
}

export default FastAccessBlock;