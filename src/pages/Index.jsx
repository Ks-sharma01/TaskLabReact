import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

const Index = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="h-16 flex items-center">
                <Header />
            </header>
            <main className="grow px-6 py-4">
                {children}
            </main>

            <footer className="h-16 flex items-center">
                <Footer />
            </footer>
        </div>
    )
}
export default Index;