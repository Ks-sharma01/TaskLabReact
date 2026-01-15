const Footer =()=>{
    return(
        <footer className="p-4 bg-blue-600 text-lg text-bold text-white shadow fixed bottom-0 w-full text-center">
            <p>© {new Date().getFullYear()} TaskLab. All rights reserved.</p>
        </footer>
    )
}

export default Footer;