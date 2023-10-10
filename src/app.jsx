import Title from './components/title/component.jsx'
import Socials from './components/socials/component.jsx'
import Footer from './components/footer/component.jsx'

function App() {
    return (
        <>
            <div className='bg-zinc-900 flex items-center h-screen'>
                <div id='container' className='container block px-3 mx-auto'>
                    <div className='grid place-items-center'>
                        <Title />
                        <Socials />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default App
