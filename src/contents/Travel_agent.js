import img_guarantee from '../asset/Vector.png';
function Card_agent(){
  return(
    <div style={{ 
      paddingTop:"40px",
      width:"17%",
      position:"absolute",
      bottom:"-90px",
      left:"600px",
      height:"48%",
      boxShadow:"0px 0px 1px",
      backgroundColor:"white",
      border:"none",
      borderRadius:"4px",
      marginLeft:"80px",
      textAlign:"center"
     
     }}>
<img src={img_guarantee}  />
<h1 style={{ color:"black", fontSize:"22px", fontWeight:"bold",
paddingTop:"20px"
}}>Best Travel Agent</h1>


<p style={{ 
  fontSize:"18px",color:'GrayText'
 }}>A small river named</p>
<p style={{ 
  marginTop:"-18px",fontSize:"18px",color:'GrayText'
 }}>Duren flows by their</p>
<p style={{ 
  marginTop:"-18px",fontSize:"18px",color:'GrayText'
 }}>place and supplies</p>
    </div>
  );
}
export default Card_agent