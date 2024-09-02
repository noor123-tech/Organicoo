// import React from 'react';
// import { FaRegHeart } from "react-icons/fa";
// import { eidbundle } from '../Constant/Product';

// const EidBundleCard = () => {
//     return (
//         <div className="eidcard-container">
//             {eidbundle && eidbundle.length > 0 ? (
//                 eidbundle.map((item) => (
//                     <div key={item.id} className="eidcard">
//                         <div className="eidcard-img">
//                             <img src={item.image[0]} alt={item.name} />
//                             <div className="wishlist">
//                                 <button>
//                                     <FaRegHeart className='heart-icon' />
//                                 </button>
//                             </div>
//                             <div className="quick-view">
//                                 <button>Quick View</button>
//                             </div>
//                         </div>
//                         <div className="eidcard-data">
//                             <div className="eidcard-name">
//                                 <b>{item.name}</b>
//                             </div>
//                             <div className="eidcard-desc">
//                                 {item.description}
//                             </div>
//                             <div className="eidcard-price">
//                                 <b>{item.price}</b>
//                             </div>
//                             <div className="eidcard-addtocart">
//                                 <button>
//                                     <b>Add to Cart</b>
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ))
//             ) : (
//                 <p>No items to display.</p>
//             )}
//         </div>
//     );
// };

// export default EidBundleCard;
