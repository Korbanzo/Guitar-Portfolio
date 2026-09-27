type SongVideoProps = {
    path: string;
    title: string;
};

const SongVideo = ({ path, title }: SongVideoProps) => {
    return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
        <video controls>
            <source id={title} src={path} type="video/mp4"/>
        </video>
        <label htmlFor={title}>{title}</label>
    </div>
    )
}

export default SongVideo;