
function Footer() {
  return (
    <div className="py-12 px-5 bg-gray-500 text-gray-200">
                <div className="space-y-3 pb-9">
                    <p className="font-bold">For brand partnership, contact us at:</p>
                    <div className="flex gap-4 items-center">
                        <img className="h-7 cursor-pointer" src="email.png" alt="" />
                        <p className=" cursor-pointer">collab@terriblytinytales.com</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <img className="h-7 cursor-pointer" src="telephone.png" alt="" />
                        <p className=" cursor-pointer">+91 8879294257</p>
                    </div>
                </div>

                <div className="flex gap-5 items-center flex-wrap">
                    <div className="flex space-x-4 text-sm items-center mr-auto">
                        <img src="ttt-black.svg" className="h-8" alt=""/>
                        <p className="font-bold">© 2022 Terribly Tiny Ventures Pvt. Ltd.</p>
                        <p>Privacy Policy</p>
                        <p>Terms Of Use</p>
                    </div>
                    <div className="flex gap-3">
                        <a href="https://www.instagram.com/ttt_official/" target="_blank" rel="noopener noreferrer"> <img src="instagram.png" className="h-5" alt=""/></a>
                        <a href="https://www.facebook.com/terriblytinytales/" target="_blank" rel="noopener noreferrer"><img src="facebook.png" className="h-5" alt=""/></a>
                        <a href="https://www.youtube.com/c/TerriblyTinyTales" target="_blank" rel="noopener noreferrer"> <img src="youtube.png" className="h-5" alt=""/></a>
                        <a href="https://twitter.com/terriblytiny" target="_blank" rel="noopener noreferrer"><img src="twitter.png" className="h-5" alt=""/></a>
                    </div>
                </div>

            </div>
  )
}

export default Footer
