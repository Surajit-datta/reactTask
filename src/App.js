
import './App.css';
import { CiTextAlignJustify } from "react-icons/ci";
import React, {useState} from "react";
import { AiOutlineSearch } from "react-icons/ai";
import images from "./img/flag.jpg";
import image from "./img/ai.jpg";
import { BsChatRight } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import {Helmet} from "react-helmet";
import { BsHouseDoor } from "react-icons/bs";
import { AiOutlineBook } from "react-icons/ai";
import { BsFillSendFill } from "react-icons/bs";
import { BiMessageAlt } from "react-icons/bi";
import { BiPodcast, BiMale } from "react-icons/bi";
import { CiStar } from "react-icons/ci";
import { CiGrid42, CiBrightnessDown , CiGrid41} from "react-icons/ci";
import { BsColumnsGap } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
import { FiFolderMinus } from "react-icons/fi";
import { FiGrid } from "react-icons/fi";
import imag from "./img/ai.jpg";
import ig from "./img/1.jpg";
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" rel="stylesheet"/>


function App() {
  const [select, setSelect] = useState("English");
  return (
    <>
    <Helmet>
      <title>React-portpolio-App</title>
      <meta name="Surajit-portpolio-app" content="Surajit-portpolio-website" />
      <meta name="keywords" content="surajit portpolio app portpoliowebsite " />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
       <div className="Header">
         <div className="Header_logo" >
           <b>Anesta<i>.</i></b> 
           <input type="checkbox" id="check"/>
           <label for="check" id="icon" style={{lineHeight:"10px"}}><b className="Slider"><CiTextAlignJustify/></b></label>
           <ul >
             
             <li style={{cursor:"pointer" , fontFamily:"serif",  fontSize:"17px" }}><b className="Box"><BsHouseDoor  /> </b>Home &emsp; &emsp; > </li>
             <br/>
              
              <li style={{fontFamily:"serif", opacity:".2", fontSize:"13px" }}>COMMUNITY</li><br/>
              <li style={{cursor:"pointer" , fontFamily:"serif",  fontSize:"17px" }}><AiOutlineBook/>&emsp;Knowlwdge</li> 
              <li style={{cursor:"pointer" , fontFamily:"serif",  fontSize:"17px" }}><BsFillSendFill/>&emsp;Activity</li>
              <li style={{cursor:"pointer" , fontFamily:"serif",  fontSize:"17px" }}><BiMessageAlt/>&emsp;Messages</li>
              <li style={{cursor:"pointer" , fontFamily:"serif",  fontSize:"17px", color:"blue" }}><BiPodcast/>&emsp;Groups</li>
              <li style={{cursor:"pointer" , fontFamily:"serif",  fontSize:"17px" }}><BiMale/>&emsp;Member</li>
              <li style={{cursor:"pointer" , fontFamily:"serif",  fontSize:"17px" }}><BsColumnsGap/>&emsp;Forums</li> 
              <li style={{cursor:"pointer" , fontFamily:"serif",  fontSize:"17px" }}><FiFolderMinus/>&emsp;Documents</li><br/>

              <li style={{fontFamily:"serif", opacity:".2", fontSize:"17px" }}>E-learning</li><br/>
              <li style={{cursor:"pointer" , fontFamily:"serif",  fontSize:"17px" }}><CiGrid41/>&emsp;All courses</li>
              <li style={{cursor:"pointer" , fontFamily:"serif",  fontSize:"17px",  }}><CiBrightnessDown/>&emsp;Single course</li>
              <li style={{cursor:"pointer" , fontFamily:"serif",  fontSize:"17px" }}><FiGrid/>&emsp;Topic single</li><br/>

              <li style={{fontFamily:"serif", opacity:".2", fontSize:"17px" }}>WP Job Manager</li><br/>

           </ul>
         </div>   

           <div className="Header_search">
           
           
              <div class="wrap">
              <div class="search">
              <input type="text" name="<AiOutlineSearch/>" placeholder="Type to search" class="searchTerm" id="input_text"></input>
              <button type="submit" className="searchButton">
                
              </button>
              </div>
              </div>

           </div>
           <div className="Headersocial">
              <div id="flag">
                  <img src={images} height="20px" width="20px" id="img" style={{borderRadius:"50%"}}/>
              </div>&emsp;
              <div id="lan" style={{display:"flex"}}>
                       {select}&ensp;
                  <select value={select} onChange={e=>setSelect(e.target.value)}>
                  <option></option>
                  </select>


              </div>
              <div id="msg" style={{display:"flex"}}>
              <BsChatRight/>&emsp;
              <IoNotificationsOutline style={{fontSize:"20px"}}/>&ensp;
              <img src={image} title="Hi, jack" height="20px" width="20px" id="img" style={{borderRadius:"50%"}}/> &ensp;<i>Hi, jack</i>

              </div>
                 
                

              
           </div>
           
 
   

       </div>
       <br/>
       <div className="Middle_main" style= {{ display:"flex"}}>
         <div className="Groups" >
           
           <div claaaName="Search">
           <div className="G">
             <h2>Groups</h2><br/>
             <hr/>

           </div>
           <div className="Searchgroups">
             <br/>
             <h3>Search groups...</h3>
             <br/>
             <input type="search" id="Search_box" placeholder='Search Groups...'/>&ensp;
             <button id="Search_button">Search</button>

           </div>

           <div className="All">
             <div className="All1" style={{background:"#e9e9fa"}}>
                <div><b>All groups</b> <button style={{width:"25px", height:"20px", borderRadius:"10px", background:"#ffe6f2"}}>5</button></div> &emsp;
                <div><b>My groups</b> <button style={{width:"25px", height:"20px", borderRadius:"10px", background:"#ccccff"}}>5</button></div>
                
             </div>
             <div className="All2">
               <input type="text" id="Last" placeholder="Last active"     /><select/>

             </div>

           </div>
           <div id="Viewing" style={{paddingLeft:"15px"}}>
             <b>Viewing 1-5 of 5 groups</b>

           </div>
           <div id="card_main">
              <div id="card1">
                 <div id="imgg">
                    <div id="imgg1">
                       <div id="win">P</div>
                    </div>
                    <div id="imgg2"><b>Join Group</b></div>

                 </div>
                 <div id="des">
                   <b>Design Group</b><br/>
                   <i>3 hours ago</i><br/>
                   <hr/>
                   <i>Public group 1 member</i>
                 </div>
        
              </div>
              <div id="card2">
              <div id="imgg">
                    <div id="imgg1">
                    <div id="win">P</div>
                    </div>
                    <div id="imgg2"><b>Join Group</b></div>

                 </div>
                 <div id="des">
                   <b style={{fontSize:"13px"}}>Business Group</b><br/>
                   <i>3 hours ago</i><br/>
                   <hr/>
                   <i>Public group 1 member</i>
                 </div>


              </div>
              <div id="card3">

              <div id="imgg">
                    <div id="imgg1">
                    <div id="win">P</div>
                    </div>
                    <div id="imgg2"><b>Join Group</b></div>

                 </div>
                 <div id="des" style={{fontSize:"13px"}}>
                   <b>Art Photographers</b><br/>
                   <i>3 hours ago</i><br/>
                   <hr/>
                   <i>Public group 1 member</i>
                 </div>
              </div>


           </div>

           </div>
           
         </div>
         <div className="Active">
             <div id="Active1">
                <div id="members">
                  <b>Active Members</b>
                  <hr/>
               
                </div>
                <div id="face">
                   <div id="one"></div>&ensp;
                   <div id="two"></div>&ensp;
                   <div id="three"></div>
                </div>
                <div id="arrow">
                  <b>View All</b>&ensp;<AiOutlineLogout/>
                
                </div>
             </div><br/>
             <div id="Active2">
               <div id="Recent">
                 <b>Recent Topics</b>
                 <hr/>
               </div>
               <div id="Recent_main">
                 <div id="Rec_m1">
                   <div id="one1"></div>
                   <div id="two1"><b>Lol</b><br/><p style={{opacity:".4", fontSize:"15px"}}>By jack black</p></div>

                 </div>


                 <div id="Rec_m1">
                   <div id="one1">
                     <img src={imag} height="40px" width="40px" style={{borderRadius:"50%"}} />
                   </div>
                   <div id="two1"><b id="gold">Improve Design</b><br/><p style={{opacity:".4", fontSize:"15px"}}>By Datta</p></div>

                 </div>



                 <div id="Rec_m1">
                   <div id="one1">
                   <img src={ig} height="40px" width="40px" style={{borderRadius:"50%"}} />
                   </div>
                   <div id="two1"><b>Successful startup</b><br/><p style={{opacity:".4", fontSize:"15px"}}>By jack black</p></div>

                 </div>





               </div>

               <div>

               </div>
               
             

             </div>

         </div>
         

       </div>

      
    </>
  );
}

export default App;
