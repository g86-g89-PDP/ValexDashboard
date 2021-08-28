import { BsFillImageFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsBookmarks } from "react-icons/bs";
import { FaRegPaperPlane } from "react-icons/fa";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { RiSpamLine } from "react-icons/ri";
import { BsTrash } from "react-icons/bs";

const data = [
    {
        icon: <BsFillImageFill/>,
        name: "Inbox",
        number: "20"
    },
    {
        icon: <BsStar/>,
        name: "Starred",
        number: "3"
    },
    {
        icon: <BsBookmarks/>,
        name: "Important",
        number: "10"
    },
    {
        icon: <FaRegPaperPlane/>,
        name: "Sent Mail",
        number: "8"
    },
    {
        icon: <HiOutlinePencilAlt/>,
        name: "Drafts",
        number: "15"
    },
    {
        icon: <RiSpamLine/>,
        name: "Spam",
        number: "128"
    },
    {
        icon: <BsTrash/>,
        name: "Trash",
        number: "6"
    }
]
 export default data;
