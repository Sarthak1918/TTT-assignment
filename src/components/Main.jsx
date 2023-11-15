import Post from "./Post"
import data from "../data.json"
import Footer from "./Footer"

function Main() {
    return (
        <div className="w-full max-w-3xl mx-auto bg-white shadow-2xl">
            {/* coverphoto */}
            <div>
                <img src="cover-photo.png" className=" h-60 object-cover w-full" alt="" />
            </div>

            {/* profile */}
            <div className="flex gap-6 px-5 py-2 items-end -mt-10">
                <img src="profile-photo.png" alt="" className="rounded-full border-2 border-gray-500 h-32 w-32 object-cover" />
                <div className="flex flex-col gap-2">
                    <div className="flex justify-center items-center gap-2">
                        <span className="font-bold">{data.fullname}</span>
                        <span><img src="diamond.png" className="h-5" /></span>
                        <span><img src="verified.png" className="h-6" /></span>
                    </div>
                    <div className="flex gap-2">
                        <div>
                            <p className="bg-white border-2 border-gray-500 text-gray-500 text-center rounded-md font-bold px-3">{data.followers_count}</p>
                            <p className="text-gray-500 text-xs pt-1 text-center">Followers</p>
                        </div>
                        <div>
                            <p className="bg-white border-2 border-gray-500 text-gray-500 text-center rounded-md font-bold px-3">{data.following_count}</p>
                            <p className="text-gray-500 text-xs pt-1 text-center">Following</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* bio & details */}
            <div className="px-5 py-8">
                <p>{data.bio}</p>
                <a href={data.insta_link} className="text-[#71c9cf] font-semibold text-sm">http://instagram.com/anujgosalia</a>
                <div className="flex gap-3 mt-2 items-center">
                    <div className="flex items-center gap-1">
                        <img src="star.png" alt="" className="h-6" />
                        <p className="font-semibold text-xs mr-1">{data.profile_data.stars}</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <img src="upvote.png" alt="" className="h-6" />
                        <p className="font-semibold text-xs mr-1">{data.profile_data.upvotes}</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <img src="view.png" alt="" className="h-6" />
                        <p className="font-semibold text-xs mr-1">{data.profile_data.profileViews}</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <img src="like.png" alt="" className="h-6" />
                        <p className="font-semibold text-xs mr-1">{data.profile_data.likes}</p>
                    </div>
                </div>
            </div>

            {/* post-section */}
            <div className="border-b-2 border-gray-200">
                <div className="border-2 w-28 border-l-0 border-b-white bg-white -mb-[2px]  border-gray-200 text-center text-[#1b9aff] font-bold py-3 ">{data.posts.length} Posts</div>
            </div>

            {
                data.posts.map((post) => <Post key={post.post_id} post={post} username={data.username} />)
            }



            <Footer/>


        </div>
    )
}

export default Main
