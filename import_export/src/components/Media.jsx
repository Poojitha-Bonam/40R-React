import video1 from "../assets/Videos/video1.mp4"
import Audio from "../assets/Audios/Audio.mp3"
import data from "../assets/data/jsondata.json"
import image from "../assets/Images/image.jpg"
export const MediaFiles = () =>{
    return <div>
        <h1>Using Public Folder</h1>
        <h1>Image</h1>
        <img src="image.jpg" alt="Nature" width={350}/>

        <h1>Video</h1>
        <video controls style={{ width: "350px", height: "300px", borderRadius: "10px" }}>
            <source src="video1.mp4" type="video/mp4"/>
        </video>

        <h1>Audio</h1>
        <audio controls>
            <source src="Audio.mp3" type="audio/mp3"/>
        </audio>
        <h1>Json Data</h1>

           {
        data.map((item, index) => <div key={index} style={{ border: "1px solid green", width:"100px" }}>
            <p>{item.name} </p>
            <p>{item.class}</p>
        </div> )
        }




        <h1>Using Assets</h1>
        <h1>Image</h1>
        <img src={image} alt="Nature" width={350}/>

        <h1>Video</h1>
        <video controls style={{ width: "350px", height: "300px", borderRadius: "10px" }}>
            <source src={video1} type="video/mp4"/>
        </video>

        <h1>Audio</h1>
        <audio controls>
            <source src={Audio} type="audio/mp3"/>
        </audio>
        <h1>Json Data</h1>

           {
        data.map((item, index) => <div key={index} style={{ border: "1px solid green", width:"100px" }}>
            <p>{item.name} </p>
            <p>{item.class}</p>
        </div> )
        }
    </div>
}