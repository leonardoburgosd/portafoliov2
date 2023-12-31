
function HeaderComponent() {

    return (
        <header className="shadow-md bg-zinc-800 relative z-10 w-full">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 px-8" aria-label="Global">
                <ul className="flex flex-1">
                    <a href="#" className="flex p-1.5 font-semibold text-lg">
                        <h1 className='text-xl'>leonardo</h1>
                        <h1 className="text-[#2F80ED] text-xl">BURGOS</h1>
                    </a>
                </ul>
                <ul className="flex gap-x-12">
                    <a href="https://codcafein.azurewebsites.net" target="_blank"
                        rel="noreferrer" className="text-sm hover:text-[#2F80ED]">Blog</a>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderComponent
