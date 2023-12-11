import AdDeEdItem from "../../components/galleryAdmin/AdDeEdItem";
import "../../styles/gallery-admin/gallery-admin.css";

const GalleryAdmin = () => {
  return (
    <main className="d-flex pt-4 justify-content-center" id="gallery-admin-page">
      <section
        id="gallery-admin-form-container"
        className="p-4 bg-white mx-3 mt-auto"
      >
        <AdDeEdItem />
      </section>
    </main>
  );
};

export default GalleryAdmin;