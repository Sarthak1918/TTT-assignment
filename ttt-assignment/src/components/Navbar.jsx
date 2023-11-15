function Navbar() {
  return (
    <div>
       <nav className="bg-black flex px-4 py-4 justify-between">
        <div className="flex justify-center items-center gap-3">
          <img src="/ttt.svg" alt="logo" />
          <p className="text-white border-l-2 border-l-white px-2">S T O R I E S</p>
        </div>
        <button className="bg-yellow-500 rounded px-2 py-1 font-bold"><a href="https://learn.terriblytinytales.com/" target="_blank" rel="noopener noreferrer">Courses</a></button>
      </nav>
    </div>
  )
}

export default Navbar
