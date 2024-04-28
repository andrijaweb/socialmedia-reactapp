import Modal from "../../components/shared/Modal";
import CreatePostForm from "./CreatePostForm";

import { HiOutlinePencilSquare } from "react-icons/hi2";

const EditPost = ({ post }) => {
  return (
    <Modal>
      <Modal.Open opens="post-form">
        <button>
          <HiOutlinePencilSquare className="text-xl" />
        </button>
      </Modal.Open>
      <Modal.Window name="post-form">
        <CreatePostForm postToEdit={post} />
      </Modal.Window>
    </Modal>
  );
};

export default EditPost;