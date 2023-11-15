import moment from "moment"

/* eslint-disable react/prop-types */
function Post({post,username}) {
  return (
    <div>
      <div className="px-5 pt-10 pb-8 border-b-2 border-gray-200 flex flex-col gap-6">
          <div className="flex justify-between  items-center">
            <p className="text-2xl font-bold">{post.title}</p>
            <img  src="upvote.png" className="h-6 cursor-pointer" />
          </div>

          <p>{post.description}</p>

          <div className="flex gap-x-4  items-center flex-wrap">
            <div className="space-x-1 mr-auto">
              <span className="text-[#71c9cf] font-semibold text-xs">{post.category}</span>
              <span className="text-xs font-semibold text-gray-500">by {username}</span>
            </div>

            <div className="space-x-1 text-xs text-gray-400">
                <span>{moment(post.postDate).format("MMMM D")}</span> •
                <span>{post.readTime} read</span> •
                <span>{post.postViews} views</span>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Post
