

import React from 'react';
import './commentCard.scss';


function CommentCard(props){
     return(
        <>
        <div className="commentCard" style={{display:"flex",marginLeft:"15px",padding:"5px"}}>
        <img src={`${props.comment.imgURL}`} alt="Avatar" style={{width:"6%",borderRadius:"50%",padding:"22px 0px"}}/>
        {/* <img src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg" alt="avatar" /> */}
        <div>
        <p style={{fontSize:"75%",fontWeight:"bold",marginLeft:"15px"}}>{props.comment.name}</p>
        <div className="commentText">
            <p id="box_commentContent" style={{margin:"10px"}}>{props.comment.content}</p>
            </div>
        </div>
        </div>
        </>
    ) 


}
export default CommentCard;











    // return(
    //     <>
    //     {/* <div className="commentCard" style={{display:"flex",marginLeft:"15px",padding:"5px"}}> */}
    //     <div className="result_comment col-md-11">
    //     <img src={`${props.comment.imgURL}`} alt="Avatar" style={{width:"30px",borderRadius:"50%",padding:"7px 0px"}}/>
    //     <div>
    //     <h4 >{props.comment.name}</h4>
    //     <div className="commentText">
    //         <p style={{margin:"10px"}}>{props.comment.content}</p>
    //         </div>
    //     </div>
    //     </div>
    //     </>
    // )















// import React from 'react';
// import './commentCard.scss';

// function CommentCard(props){
//     return(
//         <>
//         <div className="commentCard" style={{display:"flex",marginLeft:"15px",padding:"5px"}}>
//         <img src={`${props.comment.imgURL}`} alt="Avatar" style={{width:"30px",borderRadius:"50%",padding:"7px 0px"}}/>
//         <div>
//         <p style={{fontSize:"75%",fontWeight:"bold",marginLeft:"3px"}}>{props.comment.name}</p>
//         <div style={{border:"1px solid black"}} className="commentText">
//             <p style={{margin:"10px"}}>{props.comment.content}</p>
//             </div>
//         </div>
//         </div>
//         </>
//     )


// }
// export default CommentCard;
