import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiBadgeCheck, HiThumbUp, HiOutlinePhotograph, HiStar, HiX, HiPlusCircle } from 'react-icons/hi';

const Gallery = ({ language }) => {
  // ১. অ্যাডমিন পোস্ট স্টেট
  const [posts, setPosts] = useState([
    {
      id: 1,
      admin: "Trevo Holidays",
      time: "Just Now",
      caption: "সফলভাবে আমাদের নতুন ট্যুর প্যাকেজ লঞ্চ করা হলো!",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a",
      likes: 0,
      isLiked: false
    }
  ]);

  // ২. ক্লায়েন্ট রিভিউ স্টেট (শুরুতে কিছু স্যাম্পল ডেটা)
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Anika Tabassum",
      text: "তাদের সার্ভিস অনেক প্রফেশনাল!",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      rating: 5
    }
  ]);

  // ৩. ইনপুট স্টেটসমূহ
  const [newPostText, setNewPostText] = useState("");
  const [selectedPostImage, setSelectedPostImage] = useState(null);
  const [reviewName, setReviewName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [selectedReviewImage, setSelectedReviewImage] = useState(null);

  const postFileInputRef = useRef(null);
  const reviewFileInputRef = useRef(null);

  // ফাংশন: অ্যাডমিন পোস্ট সাবমিট
  const handlePostSubmit = () => {
    if (!newPostText && !selectedPostImage) return;
    const newPost = {
      id: Date.now(),
      admin: "Trevo Holidays",
      time: "Just Now",
      caption: newPostText,
      image: selectedPostImage,
      likes: 0,
      isLiked: false
    };
    setPosts([newPost, ...posts]);
    setNewPostText(""); setSelectedPostImage(null);
  };

  // ফাংশন: ক্লায়েন্ট রিভিউ সাবমিট (ছবিসহ)
  const handleReviewSubmit = () => {
    if (!reviewName || !reviewText) return;
    const newReview = {
      id: Date.now(),
      name: reviewName,
      text: reviewText,
      image: selectedReviewImage,
      rating: 5
    };
    setReviews([newReview, ...reviews]);
    setReviewName(""); setReviewText(""); setSelectedReviewImage(null);
  };

  return (
    <div className="pt-32 pb-20 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* বাম পাশ: অ্যাডমিন টাইমলাইন */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-black text-slate-800">টাইমলাইন আপডেট</h2>
          
          {/* অ্যাডমিন পোস্ট বক্স */}
          <div className="bg-white rounded-xl shadow-sm border p-4">
            <div className="flex gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">TH</div>
              <textarea 
                className="w-full bg-gray-100 rounded-2xl p-3 outline-none text-sm"
                placeholder="অ্যাডমিন হিসেবে কিছু পোস্ট করুন..."
                value={newPostText}
                onChange={(e) => setNewPostText(e.target.value)}
              />
            </div>
            {selectedPostImage && (
              <div className="relative mb-4 rounded-xl overflow-hidden border">
                <img src={selectedPostImage} className="w-full h-48 object-cover" alt="Preview" />
                <button onClick={() => setSelectedPostImage(null)} className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full"><HiX /></button>
              </div>
            )}
            <div className="flex justify-between items-center border-t pt-3">
              <button onClick={() => postFileInputRef.current.click()} className="flex items-center gap-2 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg">
                <HiOutlinePhotograph className="text-green-500 text-xl" />
                <span className="font-bold text-sm">ছবি</span>
                <input type="file" ref={postFileInputRef} className="hidden" accept="image/*" onChange={(e) => setSelectedPostImage(URL.createObjectURL(e.target.files[0]))} />
              </button>
              <button onClick={handlePostSubmit} className="bg-blue-600 text-white px-8 py-2 rounded-lg font-bold">পোস্ট করুন</button>
            </div>
          </div>

          {/* পোস্টগুলো প্রদর্শন */}
          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-xl shadow-sm border overflow-hidden">
              <div className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">TH</div>
                <div><div className="flex items-center gap-1"><span className="font-bold">Trevo Holidays</span><HiBadgeCheck className="text-blue-500" /></div><p className="text-[10px] text-gray-400 font-bold">{post.time}</p></div>
              </div>
              <p className="px-4 pb-3 text-slate-800">{post.caption}</p>
              {post.image && <img src={post.image} className="w-full h-auto" alt="post" />}
            </div>
          ))}
        </div>

        {/* ডান পাশ: ক্লায়েন্ট রিভিউ ফর্ম এবং ফিড */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-lg border sticky top-32">
            <h3 className="font-black text-xl mb-4 text-slate-900 border-b pb-2">আপনার অভিজ্ঞতা জানান</h3>
            
            {/* রিভিউ ইনপুট ফর্ম */}
            <div className="space-y-3 mb-6">
              <input 
                type="text" 
                placeholder="আপনার নাম" 
                className="w-full bg-gray-50 border rounded-xl p-3 outline-none text-sm"
                value={reviewName}
                onChange={(e) => setReviewName(e.target.value)}
              />
              <textarea 
                placeholder="আপনার অভিজ্ঞতা লিখুন..." 
                className="w-full bg-gray-50 border rounded-xl p-3 outline-none text-sm"
                rows="3"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              />
              
              {/* রিভিউ ইমেজ প্রিভিউ */}
              {selectedReviewImage && (
                <div className="relative rounded-xl overflow-hidden border h-20 w-20">
                  <img src={selectedReviewImage} className="w-full h-full object-cover" alt="Review" />
                  <button onClick={() => setSelectedReviewImage(null)} className="absolute top-0 right-0 bg-red-500 text-white p-0.5 rounded-full"><HiX size={12}/></button>
                </div>
              )}

              <button 
                onClick={() => reviewFileInputRef.current.click()} 
                className="flex items-center gap-2 text-blue-600 text-sm font-bold bg-blue-50 px-4 py-2 rounded-xl w-full justify-center"
              >
                <HiPlusCircle /> ছবি যোগ করুন
                <input type="file" ref={reviewFileInputRef} className="hidden" accept="image/*" onChange={(e) => setSelectedReviewImage(URL.createObjectURL(e.target.files[0]))} />
              </button>
              
              <button 
                onClick={handleReviewSubmit}
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-black shadow-lg shadow-blue-200 active:scale-95 transition"
              >
                সাবমিট করুন
              </button>
            </div>

            {/* রিভিউ লিস্ট */}
            <h4 className="font-bold text-slate-700 mb-4 flex items-center gap-2">সব রিভিউ ({reviews.length})</h4>
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              {reviews.map(rev => (
                <div key={rev.id} className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-bold text-sm text-slate-900">{rev.name}</span>
                    <div className="flex text-yellow-500 text-xs"><HiStar/><HiStar/><HiStar/><HiStar/><HiStar/></div>
                  </div>
                  <p className="text-gray-600 text-xs italic mb-2 leading-relaxed">"{rev.text}"</p>
                  {rev.image && <img src={rev.image} className="w-full h-24 object-cover rounded-lg border shadow-sm" alt="client experience" />}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Gallery;