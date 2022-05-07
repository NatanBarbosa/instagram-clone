export default props => {
    return(
        <>
            <img src={props.picture_src} alt="foto de perfil" className="prof-picture" style={{width: props.width, height: props.width}}/>
        </>
    );
}