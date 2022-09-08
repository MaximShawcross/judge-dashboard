import Footer from '../app-footer/app-footer';
import Header from '../app-header/app-header';
import Table from '../table/table';
import TableItem from '../table-item/table-item';
import Sidebar from '../sidebar/sidebar';
import Modal from '../modal/modal';
import NavigationMenu from '../navigation-menu/navigation-menu';
import TableHeader from '../table-header/table-header';

import './app.scss';

const App = () => {
    return (
        <>
            <Header/>   
            <NavigationMenu/>     
            <main class="table">
                <div class="table__wrapper">
                    <TableHeader/>
                    <Table/>    
                </div>
            </main>  
            <Sidebar/>
            {/* <TableItem/> */}
            <Footer/>
            <Modal/>

        </>
    )
}

export default App;