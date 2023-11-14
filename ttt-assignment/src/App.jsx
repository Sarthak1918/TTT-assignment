

function App() {

  return (
    <div>

      {/* navbar */}

      <nav className="bg-black flex px-4 py-4 justify-between">
        <div className="flex justify-center items-center gap-3">
          <img src="/ttt.svg" alt="logo" />
          <p className="text-white border-l-2 border-l-white px-2">S T O R I E S</p>
        </div>
        <button className="bg-yellow-500 rounded px-2 py-1 font-bold">Courses</button>
      </nav>

      {/* coverphoto */}
      <div>
        <img src="cover-photo.png" alt="" />
        {/* <img src="profile-photo.jpg" alt="" className="rounded-full border-gray-500 h-32" /> */}
      </div>

      {/* profile */}
      <div className="flex gap-6 px-5 py-2 items-end -mt-10">
        <img src="profile-photo.jpg" alt="" className="rounded-full border-2 border-gray-500 h-32" />
        <div className="flex flex-col gap-2">
          <p className="font-bold">Anuj Gosalia</p>
          <div className="flex gap-2">
            <div>
              <p className="bg-white border-2 border-gray-500 text-gray-500 text-center rounded-md font-bold">6482</p>
              <p className="text-gray-500 text-xs pt-1">Followers</p>
            </div>
            <div>
              <p className="bg-white border-2 border-gray-500 text-gray-500 text-center rounded-md font-bold">245</p>
              <p className="text-gray-500 text-xs pt-1">Following</p>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default App
