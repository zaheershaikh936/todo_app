
import Navbar from './navbar/Navbar'
import TopMenu from './navbar/TopMenu'

const Layout = () => {
    return (
        <>
            <main className="bg-gray-200">
                <div className="min-h-screen flex">
                    <Navbar />
                    <div className="flex-1 min-w-0 overflow-auto p-5 ">
                        <div className='bg-white h-full rounded-xl p-1'>
                        <TopMenu />
                        <hr/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Layout;