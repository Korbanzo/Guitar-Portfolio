type SongVideoProps = {
    path: string;
    title: string;
    artist: string;
};

const SongVideo = ({ path, title, artist }: SongVideoProps) => {
    return (
    <div style={{display: 'flex', flexDirection: 'column', width: '480px'}}>
        <video controls style={{boxShadow: "0px 0px 10px white"}}>
            <source id={title} src={path} type="video/mp4"/>
        </video>
        <label htmlFor={title} style={{fontWeight: 'bold'}}>{title}</label>
        <label htmlFor={title} style={{fontWeight: 'lighter'}}>{artist}</label>
    </div>
    )
}

export default SongVideo;