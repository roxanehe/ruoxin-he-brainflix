import "./Upload.scss";
import image from "../../assets/Images/Upload-video-preview.jpg";
import { Link } from "react-router-dom";

function Upload() {
  return (
    <>
      <h2 className="upload__title">Upload Video</h2>
      <div className="upload">
        <div className="upload__content">
          <div className="upload__imgsection">
            <label className="upload__label">VIDEO THUMBNAIL</label>
            <img src={image} alt="avatar-img" className="upload__img" />
          </div>
          <form className="upload__form">
            <label htmlFor="upload__video" className="upload__label">
              TITLE YOUR VIDEO
            </label>
            <input
              id="upload__video"
              name="commentcontent"
              placeholder="Add a title to your video"
              type="text"
            ></input>
            <label htmlFor="upload__descrip" className="upload__label">
              ADD A VIDEO DESCRIPTION
            </label>
            <textarea
              id="upload__descrip"
              name="commentcontent"
              placeholder="Add a description to your video"
            ></textarea>
          </form>
        </div>
        <div className="upload__action">
          <Link to="/" className="upload__button">
            <span>PUBLISH</span>
          </Link>
          <span className="upload__cancel">CANCEL</span>
        </div>
      </div>
    </>
  );
}
export default Upload;