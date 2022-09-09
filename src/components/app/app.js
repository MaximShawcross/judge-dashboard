import { useState } from 'react';

import Footer from '../app-footer/app-footer';
import Header from '../app-header/app-header';
import Table from '../table/table';
import Sidebar from '../sidebar/sidebar';
import Modal from '../modal/modal';
import NavigationMenu from '../navigation-menu/navigation-menu';
import TableHeader from '../table-header/table-header';

import './app.scss';

import { closeModal } from '../../utils/modal';

const App = () => {
    const [modalStyle, setModalStyle] = useState(false);

    return (
        <>
            <Header/>   
            <NavigationMenu/>     
            <main className="table">
                <div className="table__wrapper">
                    <TableHeader setModalStyle = {setModalStyle}/>
                    <Table/>    
                </div>
            </main>  
            <Sidebar/>
            <Footer/>
            <Modal setModalStyle = {setModalStyle} modalStyle = {modalStyle}/>
            <div onClick={ () => closeModal(setModalStyle)} className= {modalStyle ? "overlay overlay_show" : "overlay"} id="overlay-modal"></div>
        </>
    )

}

export default App;